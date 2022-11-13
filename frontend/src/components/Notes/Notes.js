import { useEffect, useState } from 'react';
import './Notes.css';
import Note from './Note/Note';
import NewNote from '../NewNote/NewNote';
import EditNote from '../EditNote/EditNote';
import Modal from 'react-modal';
import axios from '../../axios'

const Notes = () => {

    const [notes, setNotes] = useState([])
    const [showEditModal, setShowEditModal] = useState(false)
    const [editNote, setEditNote] = useState({})

    useEffect(() => {
      fetchNotes()
    },[])

    async function fetchNotes() {
      const response = await axios.get('/notes')
      const notes = response.data
      setNotes(notes)
    } 

    async function deleteNote(id){
        const tempNotes = [...notes]
            .filter(note => note._id !== id);
        await axios.delete(`/notes/${id}`)
        setNotes(tempNotes);
      }
    
    async function addNote(note) {
        const tempNotes = [...notes];
        // add to backend
        const response = await axios.post('/notes', note)
        const NewNote = response.data
        // add to frontend
        tempNotes.push(NewNote);
        setNotes(tempNotes);
      }
    
      async function editNoteFunc(note) {
        //edit backend
        await axios.put(`/notes/${note._id}`, note)
        //edit frontend
        const tempNotes = [...notes];
        const index = tempNotes.findIndex(x => x._id === note._id);
        if (index >= 0) {
          tempNotes[index] = note;
          setNotes(tempNotes);
        } 
        toggleModal();
      }
    
      const toggleModal = () => {
          setShowEditModal(!showEditModal)
      }
    
      const editNoteHandler = (note) => {
        toggleModal();
        setEditNote(note)
      }
    
    return (
        <div>
          <p>Moje notatki:</p>

        <NewNote
            onAdd={note => addNote(note)} 
        />
        
        <Modal
            isOpen={showEditModal}
            contentLabel="Edytuj notatkę"
            ariaHideApp={false} >
            <EditNote
                title={editNote.title}
                body={editNote.body}
                id={editNote._id}
                onEdit={note => editNoteFunc(note)} />
          <button onClick={() => toggleModal()}>Anuluj</button>
        </Modal>
        {notes.map(note => (
            <Note 
            key={note.id}
            title={note.title}
            body={note.body}
            id={note._id}
            onEdit={(note) => editNoteHandler(note)}
            onDelete={(id) => deleteNote(id)} />
        ))}
        </div>
    );
}

export default Notes;