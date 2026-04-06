//import Masonry from "react-masonry-css";
import "./component_styles/notes.css";
import Note from "./note";
import EmptyNotesList from "./EmptyNotesList";

// const breakpointColumnsObj = {
//   default: 4,
//   1100: 3,
//   800: 2,
//   500: 1,
// };

function Notes(props) {
  const { notes, deleteNote, toggleModal, setSelectedNote } = props;

  return (
    <div className="notes">
      {notes.length === 0 && <EmptyNotesList />}
      {notes.length !== 0 && (
        // <Masonry
        //   breakpointCols={breakpointColumnsObj}
        //   className="notes-masonry"
        //   columnClassName="notes-masonry_column"
        // >
          notes.map((note) => (
            <Note
              key={note.id}
              note={note}
              deleteNote={deleteNote}
              toggleModal={toggleModal}
              setSelectedNote={setSelectedNote}
            />
          ))
        // </Masonry>
      )}
    </div>
  );
}

export default Notes;
