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
                    const LogoImg = files.logo[0]
                    console.log(LogoImg.originalFilename, "filename")
                    let userId = "durg"
                    // Aws code for uploading a Image 
                    const Time = Date.now()
                    // Getting File Extension
                    const ext = LogoImg.originalFilename.split('.').pop();

                    // Generating New File Name
                    const newFilename = userId + "_" + Time + '.' + ext;

                    // Sending Image To S3
                    await client.send(new PutObjectCommand({
                        Bucket: bucketName,
                        Key: newFilename,
                        Body: fs.readFileSync(LogoImg.path),
                        // ACL: 'public-read',
                        ContentType: mime.lookup(LogoImg.path),
                    }))

                    // Getting Link For Image/Images And Storing Inside An Array
                    const link = `https://${bucketName}.s3.amazonaws.com/${newFilename}`
                    return res.status(200).json({ error: false, message: "sucess", link: link })


                    // const links = [];
                    // for (const file of files.file) {
                    //     console.log(file.path, "path")
                    //     // Getting File Extension
                    //     const ext = file.originalFilename.split('.').pop();

                    //     // Generating New File Name
                    //     const newFilename = Date.now() + '.' + ext;

                    //     // Sending Image To S3
                    //     await client.send(new PutObjectCommand({
                    //         Bucket: bucketName,
                    //         Key: newFilename,
                    //         Body: fs.readFileSync(file.path),
                    //         ACL: 'public-read',
                    //         ContentType: mime.lookup(file.path),
                    //     }))

                    //     // Getting Link For Image/Images And Storing Inside An Array
                    //     const link = `https://${bucketName}.s3.amazonaws.com/${newFilename}`
                    //     links.push(link);
                    // }

                    // return res.json({ links });
                })
            })
            //   const {cuuid,puuid,themeId,firstName,lastName,bio,companyName,profilePicture,email,designation}

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