import multiparty from 'multiparty';
import fs from 'fs';
import csvParser from 'csv-parser';
import { v4 as uuidv4 } from 'uuid';
import crypto from 'crypto';
import card from '@/models/card';
import UserData from '@/models/UserData';
import { connectToDatabase } from '@/lib/mongoose';

export default async function handler(req, res) {
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed.' });
  }
  await connectToDatabase();
  const form = new multiparty.Form();
  let fileTemp = null
  try {
    await new Promise((resolve, reject) => {
        
      form.parse(req,(err, fields, files) => {
        console.log(files,files.bulkCsv[0],"files")
        if (err) {
          return reject(err);
        }
        fileTemp = files.bulkCsv[0] ;
        resolve({ fields, files });
      });
    });

    const file =  fileTemp;
    const stream = fs.createReadStream(file.path);
    const parsedData = [];
    const errorsArr = [];

    await new Promise((resolve) => {
      stream
        .pipe(csvParser())
        .on('error', (err) => {
          console.log(err);
          errorsArr.push(err);
          reject(err); // Reject the promise if an error occurs
        })
        .on('data', (data) => {
          parsedData.push(data);
        })
        .on('end', resolve);
    });

    if (errorsArr.length === 0) {
        if (parsedData.length > 0) {
          for (const row of parsedData) {
            let uuid = uuidv4();
            const cuuid = uuidv4();
            const checkUser = await UserData.findOne({ email: row.email })
            if(!checkUser){
          
            
            const response = await fetch('https://veraciousapis.herokuapp.com/v1/createAccount');
            const data = await response.json();
            const privateKey = data.privateKey;
            const hashedPrivateKey = crypto.createHash('sha1').update(privateKey).digest('base64');
  
            const newUser = new UserData({
              puuid: uuid,
              email: row.email,
              name: row.name,
              avatar: row.avatar,
              totalCards: 0,
              privateKey: hashedPrivateKey,
              erc20WalletId: data.address,
              enterprise: true,
            });
  
            try {
              await newUser.save();
            } catch (error) {
              console.error(error, 'New user save error');
              return res.status(200).json({ error: true, message: 'Error saving new user.', result: error });
            }
        }else{
            try {
            const totalCards = checkUser.totalCards + 1;
            uuid= checkUser.puuid
            const updateUser = await UserData.updateOne({puuid:checkUser.puuid},{
                $set:{
                    enterprise: true,
                    totalCards:totalCards
                }
            })
            console.log(updateUser,"updated user")
              } catch (error) {
                console.error(error, 'New user save error');
                return res.status(200).json({ error: true, message: 'Error saving new user.', result: error });
              }
        }
  
            const newCard = new card({
              cuuid: cuuid,
              puuid: uuid,
              cardType: '6d12bd3d-5381-4b45-8a5e-8d04a403e17c',
              cardAmount: row.cardAmount,
              cardName: row.cardName,
              companyLogo: row.companyLogo || '',
              companyName: row.companyName || '',
              hexCode: row.hexCode || '',
              fontCode: row.fontCode,
              status: 1,
              company: row.company,
              name: row.name,
              role: row.role,
              companylink: row.companylink,
              bio: row.bio,
              adress: row.adress,
              mobileNumber: row.mobileNumber,
              selectedTemplate: row.selectedTemplate,
              profileImg: row.profileImg,
              cover: row.cover,
              whatsappNumber: row.whatsappNumber,
              mail: row.mail,
              linkedin: row.linkedin,
              instagram: row.instagram,
              twitter: row.twitter,
              youtube: row.youtube,
              facebook: row.facebook,
              behance: row.behance,
              reddit: row.reddit,
              enterprise: true,
            });
  
            try {
              await newCard.save();
            } catch (error) {
              console.error(error, 'New card save error');
              return res.status(200).json({ error: true, message: 'Error saving new card.', result: error });
            }
          }
        } else {
          return res.status(200).json({
            error: true,
            message: 'Empty CSV found',
            result: errorsArr,
          });
        }
      } else {
        return res.status(200).json({
          error: true,
          message: 'Something went wrong while parsing the CSV',
          result: errorsArr,
        });
      }

    fs.unlinkSync(file.path);

    console.log("CSV file uploaded and data inserted.")
    return res.status(200).json({
      error: false,
      message: 'CSV file uploaded and data inserted.',
      result: parsedData,
    });
  } catch (error) {
    console.error(error,"error");
    return res.status(200).json({ error:true,message: 'Error parsing the CSV file.',result:error });
  }
}



export const config = {
    api: { bodyParser: false },
};
