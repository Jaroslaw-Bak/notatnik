import './Notes.css' 
import Note from './Note/Note'
import { useState} from 'react'

const notes1 = [
    {
        id: 1,
        title: 'Wykąpć psa',
        body: 'pamiętaj wykąpać psa'
    },
    {
        id: 2,
        title: 'Zrobić zakupy',
        body: 'kupić mleko, masło, likier'
    },
]

const Notes = () => {
    const [notes, setNotes] = useState(notes1)

    return (
        <div>
            <p>Moje notatki</p>
            {notes.map(note => (
            <Note 
                key={note.id} 
                title={note.title} 
                body={note.body}  />
            ))}
        </div>
    )
}

export default Notes;