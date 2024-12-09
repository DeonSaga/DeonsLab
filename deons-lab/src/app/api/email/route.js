import { NextRequest, NextResponse } from "next/server";
import nodemailer from "nodemailer";
import Mail from "nodemailer/lib/mailer";

export async function POST(req) {
  const { data } = await req.json();
  const transport = nodemailer.createTransport({
    host: "smtp.office365.com",
    port: 587,
    secure: false,
    tls: {
      ciphers: "SSLv3",
      rejectUnauthorized: false,
    },
    auth: {
      user: process.env.CONTACT_EMAIL,
      pass: process.env.CONTACT_PASSWORD,
    },
  });

  const mailOptions = {
    from: process.env.CONTACT_EMAIL,
    to: "giddycoker@gmail.com",
    // cc: email, (uncomment this line if you want to send a copy to the sender)
    subject: `New Inquery from  ${data.firstName} ${data.lastName}, (${data.email})`,
    text: data.message,
  };
  const sendMailPromise = () =>
    //console.log(process.env.CONTACT_EMAIL, "Sending email...");
    new Promise((resolve, reject) => {
      transport.sendMail(mailOptions, function (err) {
        if (!err) {
          resolve("Email sent");
        } else {
          reject(err.message);
        }
      });
    });

  try {
    await sendMailPromise();
    return NextResponse.json({ message: "Email sent" }, { status: 200 });
  } catch (err) {
    return NextResponse.json({ error: err }, { status: 500 });
  }
}
