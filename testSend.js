const nodemailer = require('nodemailer');
require('dotenv').config();

async function testSend() {
  let transporter = nodemailer.createTransport({
    host: process.env.SMTP_HOST,
    port: Number(process.env.SMTP_PORT),
    secure: true,
    auth: {
      user: process.env.SMTP_USER,
      pass: process.env.SMTP_PASS,
    },
  });

  try {
    let info = await transporter.sendMail({
      from: `"Test" <${process.env.SMTP_USER}>`,
      to: process.env.SMTP_USER,
      subject: "Prueba nodemailer",
      text: "Hola, este es un mensaje de prueba",
    });
    console.log("✅ Mensaje enviado:", info.messageId);
  } catch (error) {
    console.error("❌ Error al enviar:", error);
  }
}

testSend();
