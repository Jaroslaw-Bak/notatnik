import Note from "../../db/models/note.js";

class noteActions {
    homepage(req, res){
        res.send('Strona domowa działa');
    }

    saveNote(req, res){
        const title = req.body.title;
        const body = req.body.body;
        const note = new Note({
            title,
            body
        })
        note.save((err) => {
            err ? res.status(422).json({message: err.message}): 
            res.status(201).json(note)
        })
    }

    // można przerobić na asnc / await
    getAllNotes(req, res){
        Note.find({}, (err, data) => {
            if (err) {
                return res.status(500).json({message: err.message})
            } else
            res.status(200).json(data)
        })  
    }

    getNote(req, res){
        // pobieranie notatki
        const id = req.params.id
        Note.findOne({_id: id}, (err, data) => {
            if (err) {
                return res.status(500).json({message: err.message})
            } else
            res.status(200).json(data)
        })
     }

     updateNote(req, res){
        const id = req.params.id
        const title = req.body.title;
        const body = req.body.body;
        Note.findOne({_id: id}, (err, note) => {
            err ? console.log(err) :
                note.title = title,
                note.body = body
            note.save();
            res.status(201).json(note)
        } )
        // aktualizowanie notatki
         
     }

     deleteNote(req, res){
        // usuwanie notatki
        const id = req.params.id
        Note.deleteOne({_id: id}, () => {
            res.sendStatus(204)
        })
        
     }
}

export default new noteActions();