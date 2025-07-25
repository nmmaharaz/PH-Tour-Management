import dotenv from "dotenv"

dotenv.config()

interface EnvConfig {
    PORT: string,
    DB_URL: string,
    NODE_URL: "development" | "production"
}

const loadEnvVariables = (): EnvConfig => {
    const requiredEnvVaribles: string[] = ["PORT", "DB_URL", "NODE_URL"]
    requiredEnvVaribles.forEach(key => {
        if (!process.env[key]) {
            throw new Error(`Missing require enviroment variable ${key}`)
        }
    })
    return {
        PORT: process.env.PORT as string,
        DB_URL: process.env.DB_URL as string,
        NODE_URL: process.env.NODE_URL as "development" | "production"
    }
}

export const envVars = loadEnvVariables()
