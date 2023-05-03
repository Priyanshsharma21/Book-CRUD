import app from './app.js'
import mongoose from 'mongoose'
import * as dotenv from 'dotenv'

dotenv.config()

const { PORT, MONGOOSE_URL } = process.env


const startServer = async()=>{
    try {
        await mongoose.connect(MONGOOSE_URL)
        console.log("Database Connected")

        app.listen(PORT, ()=>{
            console.log(`Running Up The Hill At ${PORT}km/hr`)
        })
    } catch (error) {
        console.log(error)
    }
}
startServer()