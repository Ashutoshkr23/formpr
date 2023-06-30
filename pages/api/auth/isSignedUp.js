import { connectToDatabase } from '../../../lib/mongoose'
import { v4 as uuidv4 } from 'uuid';
import UserData from '@/models/UserData';
import crypto from "crypto"
import logger from '@/lib/logger';


export default async function handler(req, res) {
    try {
        await connectToDatabase();
    } catch (error) {
        logger.fatal(`Error connecting to database ,Location:isSignedUp ,error:${error}`);
        return res.json({ error: "Connection Failed...!" });
    }

    if (req.method === "GET") {
        const checkUser = await UserData.find()
        // console.log(checkUser);
        res.status(200).json({
            error: false,
            message: "User Data",
            result: checkUser
        })
    }

    if (req.method === "POST") {
        if (!req.body) return res.status(422).json({ error: "No data received...!" });

        try {


            const { email, name, avatar } = req.body
            if (!email) {
                return res.status(422).json({ error: "Missing required fields." });
            }
            const checkUser = await UserData.find({ email: email })
            if (!checkUser?.length) {
                const uuid = uuidv4();
                const response = await fetch("https://veraciousapis.herokuapp.com/v1/createAccount")
                const data = await response.json();
                const privateKey = data.privateKey
                const hashedPrivateKey = crypto.createHash("sha1").update(privateKey).digest("base64")
                // Create a new User in the database
                const newUser = new UserData({ puuid: uuid, email, name, avatar, totalCards: 0, privateKey: hashedPrivateKey, erc20WalletId: data.address });
                newUser.save()
                logger.info("New user created successfully")
                res.status(201).json({
                    error: false,
                    message: "New user created successfully",
                    result: newUser
                })
            } else {
                res.status(200).json({
                    error: false,
                    message: checkUser.length ? "User is already signedup" : "No user Found",
                    result: checkUser[0]
                })
            }




        } catch (err) {
            logger.fatal(`Error in POST method isSignedUp ,Location:isSignedUp ,error:${err}`);
            res.status(404).json({
                error: true,
                message: err,
            })
        }
    }

}


