import multiparty from 'multiparty';
import { PutObjectCommand, S3Client } from '@aws-sdk/client-s3';
import fs from 'fs';
import mime from 'mime-types';

// S3 Bucket Config
const client = new S3Client({
    region: process.env.AWS_REGION,
    credentials: {
        accessKeyId: process.env.ACCESS_KEY_AWS,
        secretAccessKey: process.env.SECRET_KEY_AWS,
    },
});

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
    if (req.method === 'POST') {
        try {
            const form = new multiparty.Form();
            const { fields, files } = await new Promise((resolve, reject) => {
                form.parse(req, (err, fields, files) => {
                    if (err) reject(err);
                    resolve({ fields, files });
                });
            });

            // console.log('Fields:', fields);
            // console.log('Files:', files);

            const requestData = transformFormData(fields);

            // Get the file data from the appropriate field
            let fileData;
            let fieldName;

            if (files.companyLogo) {
                fileData = files.companyLogo;
                fieldName = 'companyLogo';
            } else if (files.coverImage) {
                fileData = files.coverImage;
                fieldName = 'coverImage';
            } else if (files.profileImage) {
                fileData = files.profileImage;
                fieldName = 'profileImage';
            }

            // console.log('File Data:', fileData);
            // console.log('Field Name:', fieldName);

            const file = fileData[0];

            const { puuid } = requestData;

            // console.log('Request Data:', requestData);

            // AWS code for uploading an image
            const Time = Date.now();
            const ext = file.originalFilename.split('.').pop();
            const newFilename = `${puuid}_${Time}.${ext}`;
            const upload = await client.send(
                new PutObjectCommand({
                    Bucket: bucketName,
                    Key: newFilename,
                    Body: fs.readFileSync(file.path),
                    ContentType: mime.lookup(file.path),
                })
            );
            const link = `https://${bucketName}.s3.amazonaws.com/${newFilename}`;

            // console.log('Upload Result:', upload);
            // console.log('Image Link:', link);

            return res
                .status(200)
                .json({ error: false, message: 'Successfully updated', result: link });
        } catch (error) {
            console.error('Error:', error);
            return res.status(500).json({ message: 'Unable to manage cards', error });
        }
    } else {
        res.status(400).json({
            error: true,
            message: 'This type of request is not allowed',
        });
    }
}

export const config = {
    api: { bodyParser: false },
};
