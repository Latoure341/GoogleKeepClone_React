import "./component_styles/notes.css";
import Note from "./note"

function Notes(props) {

  return (
    <>
    <div className="notes">
        {props.notes.length === 0 && <p>Notes appear here</p>}
        {props.notes.length !== 0 && props.notes.map((note, index) => <Note key = {index} title={note.title} text={note.text}/>)}
      </div>
        
    </>
  );
}

export default Notes;
