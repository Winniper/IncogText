import {z} from "zod"

export const verifySchema = z.object({
    code: z.string().length(8,{message:"Code should be atleat 8 digits"})
})