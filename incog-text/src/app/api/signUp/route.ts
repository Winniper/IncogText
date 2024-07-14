import { resend } from "@/lib/resend";
import { sendVerificationMail } from "@/lib/resend";
import dbConnect from "@/lib/dbConnect";
import UserModel from "@/model/User";
import bcrypt from "bcryptjs"

export async function POST (request : Request) {
    await dbConnect()

    try {
        
    } catch (error) {
        
    }
}