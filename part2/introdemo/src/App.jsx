
const Note = (nota) => <li key={nota.id}>{nota.content}</li>

const App = ({ notes }) => {
  return (
    <div>
      <h1>Notes</h1>
      <ul>
        {notes.map((note) =>(
          <Note nota={note} />
        ))
        }
      </ul>
    </div>
  )
}

export default App