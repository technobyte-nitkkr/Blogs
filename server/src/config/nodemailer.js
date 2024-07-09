import nodemailer from 'nodemailer';
const transporter=nodemailer.createTransport({
    service: 'gmail',
    host:"smtp.gmail.com",
    secure:'true',
    port: 465,
    auth: {
        user: 'goelnancyclg@gmail.com', //sender's email id
        pass: 'oexbcgzfsbswueck',
    },
});

export default transporter;
