// app/api/send-email/route.js
import nodemailer from "nodemailer";
import { NextResponse } from "next/server";

export async function POST(req) {
  try {
    const { name, phone, email, subject, message } = await req.json();

    // 1. Basic Input Validation
    if (!name || !phone || !email || !subject || !message) {
      return NextResponse.json(
        { error: "All fields are required" },
        { status: 400 }
      );
    }

    // 2. Configure Nodemailer Transporter
    const transporter = nodemailer.createTransport({
      host: "smtp.gmail.com",
      port: 587,
      secure: false, // TLS
      auth: {
        user: process.env.GMAIL_USER,
        pass: process.env.GMAIL_APP_PASSWORD,
      },
      tls: {
        ciphers: "SSLv3",
      },
    });

    // 3. Define Email Options
    const mailOptions = {
      from: process.env.GMAIL_USER,
      to: process.env.YOUR_RECEIVING_EMAIL,
      subject: `Website Contact: ${subject} (from ${name})`,
      html: `
        <p>You have a new message from your website contact form:</p>
        <ul>
          <li><strong>Name:</strong> ${name}</li>
          <li><strong>Email:</strong> ${email}</li>
          <li><strong>Phone:</strong> ${phone}</li>
          <li><strong>Subject:</strong> ${subject}</li>
        </ul>
        <h3>Message:</h3>
        <p>${message}</p>
        <br>
        <p>---</p>
        <p>This message was sent from your website by ${name} (${email}).</p>
      `,
      replyTo: email,
    };

    // 4. Send the Email
    await transporter.sendMail(mailOptions);

    console.log(
      `Email successfully sent from ${mailOptions.from} to ${mailOptions.to}`
    );
    return NextResponse.json(
      { message: "Email sent successfully!" },
      { status: 200 }
    );
  } catch (error) {
    console.error("Error sending email:", error);

    // Nodemailer-specific error message
    if (error.response) {
      return NextResponse.json(
        { error: `Email sending failed: ${error.response}` },
        { status: 500 }
      );
    }

    return NextResponse.json(
      { error: "Failed to send email" },
      { status: 500 }
    );
  }
}
