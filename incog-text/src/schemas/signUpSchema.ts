import {z} from "zod"

export const signUpSchema = z.object({
    username: z.string().min(2,"Username should be atleat 2 characters").max(20,"Only 20 characters are allowed").regex(/^[a-zA-Z0-9_]+$/,"Your username should to contain any special character"),
    email: z.string().email({message: "Please enter a valid email"}),
    password: z.string().min(8,{message:"Your password should be atleast 8 character long"}).regex(/^(?=.*[A-Z])(?=.*[!@#$%^&*()_+=-{};:"<>,./?]).{8,}$/,{message:"Password must contain a mix of uppercase letters, lowercase letters, and special characters"})
})