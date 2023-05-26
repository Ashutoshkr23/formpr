import { connectToDatabase } from '../../../lib/mongoose'
import { v4 as uuidv4 } from 'uuid';
import UserData from '@/models/UserData';


export default async function handler(req, res) {
    try {
        await connectToDatabase();
    } catch (error) {
        // console.log(error, "Err")
        return res.json({ error: "Connection Failed...!" });
    }
    if (req.method === "GET") {
        const checkUser = await UserData.find()
        console.log(checkUser, "check")
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
            console.log(checkUser, "check")
            if (!checkUser?.length) {
                const uuid = uuidv4();

                // Create a new User in the database
                const newUser = new UserData({ puuid: uuid, email, name, avatar, totalCards: 0 });
                newUser.save()
                // console.log(newUser)
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
            // console.log(checkUser, "checkUser")




        } catch (err) {
            res.status(404).json({
                error: true,
                message: err,
            })
            console.log(err, "error occured on post method")
        }
    }

}


