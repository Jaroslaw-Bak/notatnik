import express from 'express'
const app = express()
import config from './config.js'
import apiRouter from './routes/api.js'

//routes
app.use('/', apiRouter)

//server
app.listen(config.port, () => {
    console.log('Serwer słucha... http://localhost:' + config.port)
})