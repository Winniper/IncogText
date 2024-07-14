import mongoose, { model, Schema, Model, Document } from 'mongoose';

export interface Message extends Document {
    message: string
    date : Date
}

const MessageSchema: Schema<Message> = new Schema({
    message : {type: String, required: true},
    date: {type: Date, required: true, default: Date.now}
})

interface User extends Document{
    username: string
    email: string
    password: string
    verifyCode: string
    verifyCodeExpiry: Date
    isVerified: boolean
    isAcceptingMessage: boolean
    messages: Message[]
}

const userSchema: Schema<User> = new Schema({
    username: {type: String, required: [true,"Username is required"], unique: true},
    email: {type: String, required: [true,"Email is required"], unique: true, match: [/^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/,"Please enter a valid email"]},
    password: {type: String, required: [true,"Password is required"]},
    verifyCode: {type: String, required: true},
    verifyCodeExpiry: {type: Date, required: true},
    isVerified: {type: Boolean, default: false},
    isAcceptingMessage: {type: Boolean, default: true},
    messages: [MessageSchema],
})

const UserModel = mongoose.models.User as mongoose.Model<User> || mongoose.model<User>('User',userSchema)

export default UserModel