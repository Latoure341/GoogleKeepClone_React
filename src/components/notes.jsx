import "./component_styles/notes.css";
import Note from "./note"

function Notes(props) {
  const { notes, deleteNote, toggleModal, setSelectedNote } = props

  return (
    <>
    <div className="notes">
        {notes.length === 0 && <p>Notes appear here</p>}
        {notes.length !== 0 && notes.map((note, index) => <Note key={index} note={note} deleteNote={deleteNote} toggleModal={toggleModal} setSelectedNote={setSelectedNote}/>)}
      </div>
        
    </>
  );
}

export default Notes;
