import {
    Body,
    Container,
    Head,
    Heading,
    Hr,
    Html,
    Img,
    Link,
    Preview,
    Section,
    Text,
  } from "@react-email/components";
  import * as React from "react";
  
  interface VerificationMailTemplate {
    username: string,
    verificationCode: string
  }
  
  const baseUrl = process.env.VERCEL_URL
    ? `https://${process.env.VERCEL_URL}`
    : "";
  
  export default function VerifyEmailTemplate({username, verificationCode} : VerificationMailTemplate) {
    return (
      <html lang="en">
      <head>
        <meta charSet="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta http-equiv="X-UA-Compatible" content="ie=edge" />
        <title>Static Template</title>

        <link
          href="https://fonts.googleapis.com/css2?family=Poppins:wght@300;400;500;600&display=swap"
          rel="stylesheet"
        />
      </head>
      <body
        style={{
          margin: 0,
          fontFamily: 'Poppins, sans-serif',
          background: '#ffffff',
          fontSize: 14,
        }}
      >
        <div
          style={{
            maxWidth: 680,
            margin: '0 auto',
            padding: '45px 30px 60px',
            background: '#f4f7ff',
            backgroundImage: 'url(https://img.freepik.com/free-vector/dark-red-background-with-polygonal-shapes_1055-1883.jpg?t=st=1720809861~exp=1720813461~hmac=b4cf5c04588ef718d155e9d38f608a5ece8dc65f5205009ec05902ba2d8b32b7&w=740)',
            backgroundRepeat: 'no-repeat',
            backgroundSize: '800px 452px',
            backgroundPosition: 'top center',
            fontSize: 14,
            color: '#434343',
          }}
        >
          <main>
            <div
              style={{
                margin: 0,
                marginTop: 70,
                padding: '92px 30px 115px',
                background: '#ffffff',
                borderRadius: 30,
                textAlign: 'center',
              }}
            >
              <div style={{ width: '100%', maxWidth: 489, margin: '0 auto' }}>
                <span
                  style={{
                    fontWeight: 'bold',
                    color: '#a00000',
                    fontSize: 30,
                    paddingBottom: '1rem',
                  }}
                >
                  IncogText
                </span>
                <h1
                  style={{
                    margin: 0,
                    fontSize: 24,
                    fontWeight: 500,
                    color: '#1f1f1f',
                  }}
                >
                  Your OTP
                </h1>
                <p
                  style={{
                    margin: 0,
                    marginTop: 17,
                    fontSize: 16,
                    fontWeight: 500,
                  }}
                >
                  Hey {username},
                </p>
                <p
                  style={{
                    margin: 0,
                    marginTop: 17,
                    fontWeight: 500,
                    letterSpacing: 0.56,
                  }}
                >
                  Thank you for choosing Archisketch Company. Use the following OTP
                  to complete the procedure to change your email address. OTP is
                  valid for{' '}
                  <span style={{ fontWeight: 600, color: '#1f1f1f' }}>
                    5 minutes
                  </span>
                 . Do not share this code with others, including Archisketch
                  employees.
                </p>
                <p
                  style={{
                    margin: 0,
                    marginTop: 60,
                    fontSize: 40,
                    fontWeight: 600,
                    letterSpacing: 25,
                    color: '#ba3d4f',
                  }}
                >
                  {verificationCode}
                </p>
              </div>
            </div>
          </main>
        </div>
      </body>
    </html>
    );
  }
  
  const main = {
    backgroundColor: "#fff",
    color: "#212121",
  };
  
  const container = {
    padding: "20px",
    margin: "0 auto",
    backgroundColor: "#eee",
  };
  
  const h1 = {
    color: "#333",
    fontFamily:
      "-apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen', 'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue', sans-serif",
    fontSize: "20px",
    fontWeight: "bold",
    marginBottom: "15px",
  };
  
  const link = {
    color: "#2754C5",
    fontFamily:
      "-apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen', 'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue', sans-serif",
    fontSize: "14px",
    textDecoration: "underline",
  };
  
  const text = {
    color: "#333",
    fontFamily:
      "-apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen', 'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue', sans-serif",
    fontSize: "14px",
    margin: "24px 0",
  };
  
  const imageSection = {
    backgroundColor: "#252f3d",
    display: "flex",
    padding: "20px 0",
    alignItems: "center",
    justifyContent: "center",
  };
  
  const coverSection = { backgroundColor: "#fff" };
  
  const upperSection = { padding: "25px 35px" };
  
  const lowerSection = { padding: "25px 35px" };
  
  const footerText = {
    ...text,
    fontSize: "12px",
    padding: "0 20px",
  };
  
  const verifyText = {
    ...text,
    margin: 0,
    fontWeight: "bold",
    textAlign: "center" as const,
  };
  
  const codeText = {
    ...text,
    fontWeight: "bold",
    fontSize: "36px",
    margin: "10px 0",
    textAlign: "center" as const,
  };
  
  const validityText = {
    ...text,
    margin: "0px",
    textAlign: "center" as const,
  };
  
  const verificationSection = {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  };
  
  const mainText = { ...text, marginBottom: "14px" };
  
  const cautionText = { ...text, margin: "0px" };
  