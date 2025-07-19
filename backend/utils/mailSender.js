const nodemailer = require('nodemailer');

const mailSender = async (email, title, body) => {
    try {
        const transporter = nodemailer.createTransport({
            service: 'gmail',
            auth: {
                user: process.env.MAIL_USER,
                pass: process.env.MAIL_PASS,
            },
        });

        const info = await transporter.sendMail({
            from: 'Learnhub || by phong1608',
            to: email,
            subject: title,
            html: body,
        });

        return info;
    } catch (error) {
        console.log('Using password:', process.env.MAIL_PASS);

        console.log('Error while sending mail (mailSender) - ', error);
    }
};

module.exports = mailSender;
