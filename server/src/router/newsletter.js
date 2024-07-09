import express from 'express';
const router=express.Router();
import transporter from '../config/nodemailer.js'; 
import User from '../model/user.js';

//Route to send newsletter
router.post('/newsletter',async(req,res)=>{
    try {
        const {subject,body}=req.body;

        //Fetching all users who have subscribes newsletter 
        const SubscribedUsers=await User.find({newsletterIsSubscribed: true});
        /* if (!SubscribedUsers || SubscribedUsers.length==0){
            return res.status(404).json({message: 'No subscribed user found'});
        }
 */
        //Extract email-id
        //const recipients= SubscribedUsers.map(user=>user.email);

        //Send email
        await transporter.sendMail({
            from: process.env.EMAIL_USER,
            to: 'goelnancy14@gmail.com',
            subject: "Newsletter by technobyte",
            text: "This email is generated to check the feature of sending newsletter to all the subscribed users!",
        });

        res.status(200).json({message: 'Newsletter sent successfully!'});
    }
    catch(error){
        console.error('Error sending newsletter: ',error);
        res.status(500).json({message:'Failed to send newsletter.'});
    }
});

export default router;