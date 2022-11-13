import { useState } from "react";

const NewNote = (props) => {

    const [showForm, setShowForm] = useState(false)
    const [title, setTitle] = useState('')
    const [desc, setDesc] = useState('')

    const addNote = () => {
        const note = {
            title: title,
            body: desc
        };
        props.onAdd(note)
        setTitle('')
        setDesc('')
        setShowForm(false)
    }

    return (
        showForm ? (
            <div className="note">
                <label>Tytuł notatki: </label>
                <input 
                    type="text"
                    value={title}
                    onChange={(e) => setTitle(e.target.value)} />
                <label>Opis notatki: </label>
                <input 
                    type="text"
                    value={desc}
                    onChange={(e) => setDesc(e.target.value)} />
                <button onClick={() => addNote()}>Dodaj notatkę</button>
            </div>
        ) : (
            <button onClick={() => setShowForm(true)}>Dodaj notatkę</button>
        )
    )
}

export default NewNote;