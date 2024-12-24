import mailSender from './mailSender.js'
import User from '../model/user.js'
import dotenv from 'dotenv';
dotenv.config();

export const mailer = async (req, res) => {
    try {
        console.log('Fetching users subscribed to the newsletter...');
        const users = await User.find({ newsletterIsSubscribed: true }); // this is an array of objects
        console.log(`Found ${users.length} users subscribed to the newsletter.`);

        const mails = users.map(user => user.email); // this is an array of emails
        console.log('Emails to send:', mails);

        const subject = req.body.subject;
        const HTML = req.body.html_body;
        console.log('Email subject:', subject);
        console.log('Email HTML body:', HTML);

        await mailSender(mails, subject, HTML);
        console.log('Emails sent successfully.');

        res.json({ message: 'Mail sent successfully' });
    } catch (error) {
        console.error('Error sending emails:', error);
        res.status(500).json({ message: 'Failed to send mail' });
    }
}
