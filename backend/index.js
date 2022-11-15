import express from 'express'
const app = express()
import config from './app/config.js'
import apiRouter from './app/routes/api.js'
import bodyParser from 'body-parser'
import cors from 'cors'


// db
import './app/db/mongoose.js'

// parsery 
//Content-type: aplication/json
app.use(bodyParser.json())

//fix cors
app.use(cors())

// routes
app.use('/api', apiRouter)

//server
app.listen(config.port, () => {
    console.log('Serwer słucha... http://localhost:' + config.port)
})