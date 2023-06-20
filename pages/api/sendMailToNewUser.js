import { connectToDatabase } from '../../lib/mongoose'
import User from '../../models/User'
import UserSchema from '../../models/UserData'
const sgMail = require('@sendgrid/mail');
sgMail.setApiKey(process.env.SENDGRID_API_KEY);

export default async function handler(req, res) {

    if (req.method === 'POST') {

        // Connecting To MongoDB
        await connectToDatabase();

        const { userEmail } = req.body;

        // Here We Have To Use User Email, Currently No Idea From Where It's Getting Fetched, So It's Hardcoded For Now
        const getUserRemainders1 = await User.findOne({ email: userEmail });
        const getUserRemainders2 = await UserSchema.findOne({ email: userEmail });

        async function sendMailToNewUser() {
            const message = {
                to: getUserRemainders1.email,
                from: process.env.SENDGRID_EMAIL_ID,
                subject: 'Welcome To Loop Family',
                text: 'Get Ready For New Experience',
                html: `
                <html>
                    <body>
                     <p>Hello ${getUserRemainders1.email},</p>
                          
                    <p>Welcome to Loop! Get ready to transform your networking with a digital visiting card that leaves a lasting impression.</p>
                          
                    <p>Here's how you can make the most of your Loop experience:</p>
                          
                    <ul>
                       <li>Explore Loop Card Club: Discover captivating design templates to personalize your digital visiting card effortlessly.</li>
                       <li>Manage Your Loop Profile: Update your contact info, add social media links, and showcase achievements in one central hub.</li>
                       <li>Loop Maven - Experience the power of Loop Maven, a virtual secretary that tracks your connections and sends reminders for follow-ups, helping you cultivate valuable business relationships.</li>
                       <li>Leverage Analytics: Gain valuable insights into your card's performance and engagement to boost your networking strategy.</li>
                       <li>Connect with Ease: Share your unique Loop link for seamless digital card exchanges, anytime, anywhere.</li>
                    </ul>
                          
                    <p>Get started now at <a href="https://www.loopcard.club/">HERE</a> and redefine your networking experience with Loop.</p>
                          
                    <p>For any questions or assistance, reach out to our dedicated support team at <a href="mailto:support@loopcard.club">support@loopcard.club</a>.</p>
                          
                    <p>We're excited to be a part of your journey into the Loop of networking.</p>
                          
                    <p>With Love,</p>
                          
                    <p>Team Loop</p>
                    </body>
                </html>
                 `
            };

            try {
                await sgMail.send(message);
                // console.log('Notification email sent successfully');
            } catch (error) {
                console.error('Error sending notification email:', error);
            }
        }

        if (getUserRemainders2 === null) {
            sendMailToNewUser()
        } else if (getUserRemainders2 !== null) {
            // console.log("User Already Exist.");
        }
        res.json({
            success: true
        })
    }
}