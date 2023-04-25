import NextAuth from 'next-auth';
import GoogleProvider from "next-auth/providers/google"
import EmailProvider from "next-auth/providers/email";
import clientPromise from '../../../lib/mongodb';
import { MongoDBAdapter } from "@next-auth/mongodb-adapter"


export default NextAuth({

    adapter: MongoDBAdapter(clientPromise),

    providers: [
        // Google Provider
        GoogleProvider({
            clientId: process.env.GOOGLE_ID,
            clientSecret: process.env.GOOGLE_SECRET
        }),
        EmailProvider({
            server: {
                host: process.env.NEXT_PUBLIC_EMAIL_SERVER_HOST,
                port: process.env.NEXT_PUBLIC_EMAIL_SERVER_PORT,
                auth: {
                    user: process.env.NEXT_PUBLIC_EMAIL_SERVER_USER,
                    pass: process.env.NEXT_PUBLIC_EMAIL_SERVER_PASS
                }
            },
            from: process.env.NEXT_PUBLIC_EMAIL_FROM
        }),
    ],
    secret: process.env.NEXTAUTH_SECRET,
    session: {
        strategy: 'jwt',
    }
})