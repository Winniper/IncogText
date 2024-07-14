import { Resend } from 'resend';
import VerifyEmailTemplate from '../../emails/emailTemplate';
import { ApiResponse } from '@/types/ApiResponse';

export const resend = new Resend(process.env.RESEND_API_KEY);

export async function sendVerificationMail (email: string, username: string, verifcationCode: string) : Promise<ApiResponse> {
    try {
        const {error} =await resend.emails.send({
            from: 'Acme <onboarding@resend.dev>',
            to: email,
            subject: 'Verify Your Account | IncogText',
            react: VerifyEmailTemplate({username : username, verificationCode : verifcationCode}),
          })

          if (error) {
            return {success: false, message: "Failed to send message"}
          }

          return {success: true, message: "Email succesfully send"}
        
    } catch (error) {
        return {success: false, message: "Failed to send message"}
    }
}
