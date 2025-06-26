import nodemailer from 'nodemailer';

export async function POST(req: Request) {
  try {
    const { name, email, message } = await req.json();

    if (!name || !email || !message) {
      return new Response(JSON.stringify({ error: 'Faltan datos' }), { status: 400 });
    }

    const transporter = nodemailer.createTransport({
      host: process.env.SMTP_HOST,
      port: Number(process.env.SMTP_PORT),
      secure: true,
      auth: {
        user: process.env.SMTP_USER,
        pass: process.env.SMTP_PASS,
      },
    });

    await transporter.sendMail({
      from: `"${name}" <${email}>`,
      to: process.env.SMTP_USER,
      subject: `Nuevo mensaje de contacto de ${name}`,
      text: message,
      html: `<p>${message}</p><p>Correo de contacto: ${email}</p>`,
    });

    return new Response(JSON.stringify({ message: 'Mensaje enviado' }), { status: 200 });
  } catch (error) {
    console.error('Error al enviar correo:', error);
    return new Response(JSON.stringify({ error: 'Error al enviar el mensaje' }), { status: 500 });
  }
}
