import Note from "../../db/models/note.js";

export default {
    homepage: (req, res) => {
        res.send('Strona domowa działa');
    },
    saveNote: (req, res) => {
        const newNote = new Note({
            title: 'Zrobić zakupy',
            body: 'mleko, jaja, woda'
        })
        
        newNote.save().then(() => {
            console.log('Notatka została zapisana')
            
        })
        res.send('zapisana')
    }

}