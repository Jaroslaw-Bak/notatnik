import mongoose from "mongoose"

const Note = mongoose.model('Note', {
    title: String,
    body: String
})

export default Note;