"use server"

// import { Resend } from "resend";

// const resend = new Resend(process.env.RESEND_API_KEY);
// const resend = null;

export const sendTwoFactorTokenEmail = async (
  email: string,
  token: string
) => {
  // await resend.emails.send({
  //   from: "onboarding@resend.dev",
  //   to: email,
  //   subject: "2FA Code",
  //   html: `<p>Your 2FA Code: ${token}</p>`
  // })
  console.log("2FA Code would be sent to:", email, "Token:", token);
}

export const sendPasswordResetEmail = async (email: string, token: string) => {
  // const resetLink = `${process.env.NEXT_PUBLIC_APP_URL}/auth/new-password?token=${token}`;

  // await resend.emails.send({
  //   from: "onboarding@resend.dev",
  //   to: email,
  //   subject: "Reset Your Password",
  //   html: `<p>Click <a href=${resetLink}>here</a> to reset your password.</p>`,
  // });
  console.log("Password reset email would be sent to:", email, "Token:", token);
};

export const sendVerificationEmail = async (email: string, token: string) => {
  // const confirmLink = `${process.env.NEXT_PUBLIC_APP_URL}/auth/new-verification?token=${token}`;

  // await resend.emails.send({
  //   from: "onboarding@resend.dev",
  //   to: email,
  //   subject: "Confirm your email",
  //   html: `<p>Click <a href=${confirmLink}>here</a> to confirm email.</p>`,
  // });
  console.log("Verification email would be sent to:", email, "Token:", token);
};
