import express from 'express'
const app = express()
import config from './config.js'
import apiRouter from './routes/api.js'
import bodyParser from 'body-parser'


// db
import './db/mongoose.js'

// parsery 
//Content-type: aplication/json
app.use(bodyParser.json())

// routes
app.use('/api', apiRouter)

//server
app.listen(config.port, () => {
    console.log('Serwer słucha... http://localhost:' + config.port)
})