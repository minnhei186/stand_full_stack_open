import { useState, useEffect } from 'react'
import axios from 'axios'
import Note from "./components/Note"
import noteService from './services/notes'

const App = () => {
  const [notes, setNotes] = useState([])
  const [newNote, setNewNote] = useState('')
  const [showAll, setShowAll] = useState(true)

  useEffect(() => {
    console.log('effect')
    noteService
      .getAll()
      .then(response => {
        setNotes(response.data)
      })
    }, [])

  const handleNoteChange = (event) => {
    console.log(event.target.value)
    setNewNote(event.target.value)
  }

  const addNote = (event) => {
    event.preventDefault()
    const noteObject = {
      content: newNote,
      important: Math.random() <0.5,
    }
    noteService
     .create(noteObject)
     .then(response => {
      setNotes(notes.concat(response.data))
      setNewNote('')
     })
    }

  const changeShow = () => {
    setShowAll(!showAll)
  }

  const toggleImportanceOf = (id) => {
    const url = `http://localhost:3001/notes/${id}`
    const note = notes.find(n => n.id === id)
    const changedNote = { ...note, important: !note.important}

    noteService
    .update(id, changedNote)
    .then(response => {
      setNotes(notes.map(note => note.id === id ? response.data : note))
    })
    console.log(`importance of ${id} needs to be toggled`)
  }

  const notesToshow = showAll ? notes : notes.filter(note => note.important === true)

  return (
    <div>
      <h1>Notes</h1>
      <ul>
        {notesToshow.map((note) =>(
          <Note
          key={note.id}
          note={note}
          toggleImportance={()=> toggleImportanceOf(note.id)}
          />
        ))
        }
      </ul>
      <form onSubmit={addNote}>
        <input value={newNote} onChange={handleNoteChange}/>
        <button type="submit">save</button>
      </form>
      <button onClick={changeShow}>
        show {showAll ? 'important' : 'all'}
      </button>
    </div>
  )
}

export default App