import {z} from "zod"

export const signInSchema = z.object({
    username : z.string(),
    passsword: z.string()
})