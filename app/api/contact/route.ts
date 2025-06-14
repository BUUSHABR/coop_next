import { NextRequest, NextResponse } from "next/server";
import nodemailer from "nodemailer";

export async function POST(request: NextRequest) {
  console.log("check function");
  try {
    const { name, email, message } = await request.json();
    const transporter = nodemailer.createTransport({
      host: "smtp.gmail.com",
      port: 587,
      secure: false,
      auth: {
        user: "skaterhari101@gmail.com",
        pass: "nual tove vdng elvv",
      },
    });

    const htmlContent = `
    <p><strong>Name:</strong> ${name}</p>
    <p><strong>Email:</strong> ${email}</p>
    <p><strong>Message:</strong></p>
    <p>${message}</p>
  `;

    const mailOptions = {
      from: "skaterhari101@gmail.com",
      to: ["info@coopgames.in"],
      subject: "Service Enquiry",
      html: htmlContent,
    };

    await transporter.sendMail(mailOptions);
    return NextResponse.json(
      { message: "Email sent successfully" },
      { status: 200 }
    );
  } catch {
    return NextResponse.json(
      { message: "Failed to send email" },
      { status: 500 }
    );
  }
}
