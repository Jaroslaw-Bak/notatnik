import dotenv from 'dotenv'
dotenv.config()

const config =  { 
    port:  process.env.PORT || 3001,
    database: process.env.DATABASE || 'mongodb://127.0.0.1:27017/notes-app'
}


export default config;