import "./component_styles/notes.css";
import Note from "./note"

function Notes(props) {
  const { notes, deleteNote, toggleModal } = props

  return (
    <>
    <div className="notes">
        {notes.length === 0 && <p>Notes appear here</p>}
        {notes.length !== 0 && notes.map((note, index) => <Note key={index} id={note.id} title={note.title} text={note.text} deleteNote={deleteNote} toggleModal={toggleModal}/>)}
      </div>
        
    </>
  );
}

export default Notes;
