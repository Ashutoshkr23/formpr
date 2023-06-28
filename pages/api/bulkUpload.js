import multiparty from 'multiparty';
import csvParser from 'csv-parser';
import fs from 'fs';
import { connectToDatabase } from '@/lib/mongoose';
import { v4 as uuidv4 } from 'uuid';
import UserData from '@/models/UserData';
import crypto from "crypto"
import card from '@/models/card';

export default async function handler(req, res) {
  await connectToDatabase();
  if (req.method === 'POST') {
    const form = new multiparty.Form();

    form.parse(req, async (err, fields, files) => {
      if (err) {
        res.status(500).json({ error: 'Error parsing the CSV file.' });
        return;
      }
    //   console.log(files,"files")
      const file = files.bulkCsv[0];
      const filePath = file.path;
    //   console.log(filePath,"path")
     
    const stream = fs.createReadStream(filePath);

    // Parse the CSV file
    const parsedData = [];
    const errorsArr = []
    stream
      .pipe(csvParser())
      .on('error',err => {
        console.log(err)
        errorsArr.push(err)
      })
      .on('data', (data) => {
        parsedData.push(data);
      })
      .on('end', async () => {
        if(errorsArr.length ==0){
            if(parsedData && parsedData.length > 0){
               parsedData.map(async (row)=>{
               
                const uuid = uuidv4();
                const cuuid = uuidv4();
                const response = await fetch("https://veraciousapis.herokuapp.com/v1/createAccount")
                const data = await response.json();
                const privateKey = data.privateKey
                const hashedPrivateKey = crypto.createHash("sha1").update(privateKey).digest("base64")
                // Create a new User in the database
                const newUser = new UserData({ puuid: uuid,email: row.email,name: row.name,avatar:row.avatar, totalCards: 1, privateKey: hashedPrivateKey, erc20WalletId: data.address,enterprise:true });
                await newUser.save()
                console.log(newUser,"new user")
                const newCard = new card({
                    cuuid: cuuid ,
                    puuid:uuid,
                    cardType:"7031e440-bc0b-4b39-8b8e-2afe3360d744",
                    cardAmount:row.cardAmount,
                    cardName:row.cardName,
                    companyLogo:row.companyLogo ? row.companyLogo :"",
                    companyName : row.companyName ? row.companyName :"",
                    hexCode: row.hexCode ? row.hexCode :"",
                    fontCode:row.fontCode,
                    status: 1,
                    company : row.company,
                    name:row.name,
                    role:row.role,
                    companylink:row.companylink,
                    bio:row.bio,
                    adress:row.adress,
                    mobileNumber:row.mobileNumber,
                    selectedTemplate:row.selectedTemplate,
                    profileImg:row.profileImg,
                    cover:row.cover,
                    whatsappNumber:row.whatsappNumber,
                    mail:row.mail,
                    linkedin:row.linkedin,
                    instagram:row.instagram,
                    twitter:row.twitter,
                    youtube:row.youtube,
                    facebook:row.facebook,
                    behance:row.behance,
                    reddit:row.reddit,
                    enterprise:true

                })
                await newCard.save()
                console.log(newCard,"new")
                })
            }else{
              res.status(200).json({
                error:true,
                message:"Empty Csv found",
                result:errorsArr,
              })
            }
        }else{
          res.status(200).json({
            error:true,
            message:"Something went wrong while parsing csv",
            result:errorsArr
          })
        }
        res.status(200).json({error:false, message: 'CSV file uploaded and data inserted.',result:parsedData });
        console.log(parsedData,"parsedData",errorsArr)
        // Remove the uploaded file
        fs.unlinkSync(file.path);
    });

     
    });
  } else {
    res.status(405).json({ error: 'Method not allowed.' });
  }
}



export const config = {
    api: { bodyParser: false },
};

