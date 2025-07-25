/* eslint-disable no-console */
import { Server } from "http"
import mongoose from "mongoose"
import app from "./app"
import { envVars } from "./app/config/env"

let server: Server


const startServer = async () => {
    try {
        await mongoose.connect(envVars.DB_URL)
        console.log("Connect Mongodb !!")
        server = app.listen(5000, () => {
            console.log("Server listening port 5000")
        })
    } catch (error) {
        console.log(error)
    }
}

startServer()

process.on("unhandledRejection", () => {
    console.log("unhandled Rejaction..")
    if (server) {
        server.close(() => {
            process.exit(1)
        })
    }
    process.exit(1)
})
process.on("SIGTERM", (error) => {
    console.log("uncaughtException..", error)
    if (server) {
        server.close(() => {
            process.exit(1)
        })
    }
    process.exit(1)
})
process.on("SIGINT", (error) => {
    console.log("uncaughtException..", error)
    if (server) {
        server.close(() => {
            process.exit(1)
        })
    }
    process.exit(1)
})
process.on("uncaughtException", (error) => {
    console.log("uncaughtException..", error)
    if (server) {
        server.close(() => {
            process.exit(1)
        })
    }
    process.exit(1)
})