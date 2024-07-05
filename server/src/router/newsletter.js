const express=require('express');
const router=express.Router();
const transporter=require('./config/nodemailer');
const User=require('./models/User');

//Route to send newsletter
router.post('./admin/newsletter',async(req,res)=>{
    try {
        const {subject,body}=req.body;

        //Fetching all users who have subscribes newsletter 
        const SubscribedUsers=await User.find({newsletterIsSubscribed: true});
        if (!SubscribedUsers || SubscribedUsers.length==0){
            return res.status(404).json({message: 'No subscribed user found'});
        }

        //Extract email-id
        const recipients= SubscribedUsers.map(user=>user.email);

        //Send email
        await transporter.sendMail({
            from: process.env.EMAIL_USER,
            to: recipients.join(' '),
            subject: subject,
            text: body,
        });

        res.status(200).json({message: 'Newsletter sent successfully!'});
    }
    catch(error){
        console.error('Error sending newsletter: ',error);
        res.status(500).json({message:'Failed to send newsletter.'});
    }
});

module.exports=router;