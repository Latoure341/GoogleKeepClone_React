import "./component_styles/notes.css";
import Note from "./note"

function Notes({ noting }) {

  return (
    <>
    <div className="notes">
        <Note title={noting[0].title} text={noting[0].text}/>
        <Note title={noting[1].title} text={noting[1].text}/>
      </div>
        
    </>
  );
}

export default Notes;
