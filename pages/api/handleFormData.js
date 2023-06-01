import multiparty from "multiparty";
import { PutObjectCommand, S3Client } from '@aws-sdk/client-s3';
import fs from 'fs';
import mime from 'mime-types'
import { connectToDatabase } from "@/lib/mongoose";

import card from "@/models/card";
// Photo Upload Feature


// S3 Bucket Config
const client = new S3Client({
    region: process.env.AWS_REGION,
    credentials: {
        accessKeyId: process.env.ACCESS_KEY_AWS,
        secretAccessKey: process.env.SECRET_KEY_AWS
    }
})
console.log(process.env.ACCESS_KEY_AWS)

// Bucket Name
const bucketName = process.env.BUCKET_NAME_AWS;

function transformFormData(data) {
    const result = {};

    for (const key in data) {
        if (data.hasOwnProperty(key)) {
            result[key] = data[key][0].trim();
        }
    }

    return result;
}

export default async function handle(req, res) {
    try {
        await connectToDatabase();
    } catch (err) {

        return res.status(500).json({ message: 'Connection failed...!', error });

    }
    if (req.method === 'POST') {
        try {
            const form = new multiparty.Form();
            const { fields, file } = await new Promise((resolve, reject) => {
                form.parse(req, async (err, fields, files) => {
                    console.log(err, fields, files, "files")
                    if (err) reject(err)
                    resolve(fields, files);
                    let requestObj = await transformFormData(fields)
                    console.log(requestObj)
                    requestObj.profilePicture = ""
                    requestObj.companyLogo = ""
                    requestObj.contactUrl = `https://loopcard.club/details/${requestObj.cuuid}`
                    for (let i = 0; i < 2; i++) {
                        console.log(i, "i")
                        // if i is 0 profile picture is uploded to aws else company logo
                        const ImgData = i == 0 ? files.profilePicture[0] : files.companyLogo[0]
                        let userId = requestObj.puuid
                        // Aws code for uploading a Image 
                        const Time = Date.now()
                        // Getting File Extension
                        const ext = ImgData.originalFilename.split('.').pop();
                        console.log(ext, "extension")
                        // Generating New File Name
                        const newFilename = userId + "_" + Time + '.' + ext;
                        console.log("aws started")
                        // Sending Image To S3
                        const upload = await client.send(new PutObjectCommand({
                            Bucket: bucketName,
                            Key: newFilename,
                            Body: fs.readFileSync(ImgData.path),
                            // ACL: 'public-read',
                            ContentType: mime.lookup(ImgData.path),
                        }))
                        console.log(upload, "uploaded successfully")
                        // Getting Link For Image/Images And Storing Inside An Array
                        const link = `https://${bucketName}.s3.amazonaws.com/${newFilename}`
                        if (i == 0) {
                            requestObj.profilePicture = link

                        } else {
                            requestObj.companyLogo = link
                        }
                    }

                    const filter = {
                        cuuid: requestObj.cuuid,
                        puuid: requestObj.puuid
                    }
                    const updateOperation = { $set: { ...requestObj } };
                    const updateCard = await card.updateOne(filter, updateOperation)

                    return res.status(200).json({ error: false, message: "successfully updated", result: updateCard })



                })
            })

        } catch (error) {
            console.log(error, "error")
            return res.status(500).json({ message: 'Unable to manage cards', error });
        }
    } else {
        res.status(400).json({
            error: true,
            message: "This type of request is not allowed"
        })
    }
}

export const config = {
    api: { bodyParser: false }
}