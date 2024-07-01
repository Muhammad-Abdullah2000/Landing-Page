import { createTransport } from 'nodemailer';
import nodemailer from 'nodemailer';

// trasnporter created
const transporter = nodemailer.createTransport({
    service: process.env.SMTP_HOST,
    port: process.env.SMTP_PORT,
    secure: true,
    auth:{
            user: process.env.SMPT_MAIL , 
            pass: process.env.SMPT_PASS,
        } 
    });


exports.sendMail = async (req, res) => {

    //get data from form
    const {name, email, number, content} = req.body;

    //create email message
    const mailOptions = {
        from:`${email}`,
        to:'Support@logowithweb.com',
        subjec:'Support Required',
        text:`Name : ${name}\nEmail:${email}\nNumber:${number}\nMessage:${content}`,
    };


    //send the mail
    try{
        const info = await transporter.sendMail(mailOptions);
        console.log('Email Sent', info.response);
        res.status(500).send('Email sent successfully');
    }catch(error){
        console.error('Error sending Enail', error);
        res.status(500).send('Error send mail');
    }

}

