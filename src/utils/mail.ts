import nodemailer from "nodemailer";

interface VerificationMailOptions {
  link: string;
  to: string;
}

const transport = nodemailer.createTransport({
  host: "sandbox.smtp.mailtrap.io",
  port: 2525,
  auth: {
    user: process.env.MAILTRAP_TEST_USER,
    pass: process.env.MAILTRAP_TEST_PASS,
  },
});

const mail = {
  async sendVerificationMail(option: VerificationMailOptions) {
    transport.sendMail({
      to: option.to,
      from: process.env.VERIFICATION_MAIL,
      subject: "Auth Verification",
      html: `
                <div>
                    <p> Please click on <a href="${option.link}">this link</a> to verify your account.</p>
                </div>
                `,
    });
  },
};

export default mail;
