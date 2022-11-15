import mongoose from "mongoose";
import config from '../config.js'

mongoose.connect(config.database, {
    useNewUrlParser: true,
    useUnifiedTopology: true
})

