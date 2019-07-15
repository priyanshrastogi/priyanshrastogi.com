const nodemailer = require('nodemailer');
const templates = require('./emailTemplate');

exports.sendMail = (data) => new Promise(async (resolve, reject) => {
  try {
    const transporter = nodemailer.createTransport({
      host: process.env.SMTP_HOST,
      port: process.env.SMTP_PORT,
      auth: {
        user: process.env.MAILER_EMAIL,
        pass: process.env.MAILER_PASSWORD
      }
    });
    const mail = {
      from: '"Priyansh Rastogi" <hello@priyanshrastogi.com>',
      to: data.email,
      subject: data.subject,
      html: templates.getNewsletterEmailTemplate(data.subject, data.postDescription, data.postTitle, data.postUrl)
    }
    const info = await transporter.sendMail(mail);
    console.log(info);
    resolve(info)
  }
  catch(err) {
    console.log(err);
    reject(err);
  }
});