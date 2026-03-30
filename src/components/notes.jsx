import "./component_styles/notes.css";
import Note from "./note"
import EmptyNotesList from "./EmptyNotesList";

function Notes(props) {
  const { notes, deleteNote, toggleModal, setSelectedNote } = props

  return (
    <>
    <div className="notes">
        {notes.length === 0 && <EmptyNotesList />}
        {notes.length !== 0 && notes.map((note, index) => <Note key={index} note={note} deleteNote={deleteNote} toggleModal={toggleModal} setSelectedNote={setSelectedNote}/>)}
      </div>
        
    </>
  );
}

export default Notes;
