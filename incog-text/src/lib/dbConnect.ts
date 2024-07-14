import mongoose from "mongoose"

type ConnectionObject = {
    isConnected?:number
}

const connection : ConnectionObject = {}

async function dbConnect() : Promise<void> {
    if (connection.isConnected){
        console.log("Connection is already established")
        return 
    }

    try {
        const db = await mongoose.connect(process.env.MONGO_URI || "")

        connection.isConnected = db.connections[0].readyState

        console.log("DB Connection establised")
    } catch (error) {
        console.log("Connection Failed", error)

        process.exit(1)
    }
}

export default dbConnect