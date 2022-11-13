import { useState } from "react"

const EditNote = (props) => {

    const [title, setTitle] = useState(props.title)
    const [desc, setDesc] = useState(props.body)
     
    const editNote = () => {
        const note = {
          title: title,
          body: desc,
          _id: props.id
        };
        props.onEdit(note);
      }

    return (
        <div className="note">
            <label>Tytuł:</label>
            <input type="text" 
                value={title} 
                onChange={e => setTitle(e.target.value)} />

            <label>Opis:</label>
            <input type="text" 
                value={desc}
                onChange={e => setDesc(e.target.value)} />

            <button onClick={() => editNote()}>Zapisz</button>
        </div>
    )
}

export default EditNote;