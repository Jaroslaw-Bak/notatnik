import Note from "../../db/models/note.js";

class noteActions {
    homepage(req, res){
        res.send('Strona domowa działa');
    }

    saveNote(req, res){
        // const newNote = new Note({
        //     title: 'Zrobić zakupy',
        //     body: 'mleko, jaja, woda'
        // })
        
        // newNote.save().then(() => {
        //     console.log('Notatka została stworzona')
        // })
        const title = req.body.title;
        const body = req.body.body;
        res.send('Notatka została stworzona. Tytuł: ' + title + 'treść: ' + body)
    }

    getAllNotes(req, res){
       // pobbieranie notatek
        res.send('pobieranie notatek')
    }

    getNote(req, res){
        // pobieranie notatki
         res.send('pobieranie notatki')
     }

     updateNote(req, res){
        // aktualizowanie notatki
         res.send('aktualizowanie notatki')
     }

     deleteNote(req, res){
        // usuwanie notatki
        const id = req.params.id
         res.send('usuwanie notatki ID: ' + id)
     }
}

export default new noteActions();