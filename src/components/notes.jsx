import "./component_styles/notes.css";
import Note from "./note";
import EmptyNotesList from "./EmptyNotesList";
import { DndContext, PointerSensor, closestCenter, useSensor, useSensors } from "@dnd-kit/core";
import { SortableContext, rectSortingStrategy } from "@dnd-kit/sortable";

// const breakpointColumnsObj = {
//   default: 4,
//   1100: 3,
//   800: 2,
//   500: 1,
// };

function Notes(props) {
  const {
    notes,
    deleteNote,
    toggleModal,
    setSelectedNote,
    isMiniSidebar,
    updateReminder,
    reorderNotes,
  } = props;

  const sensors = useSensors(
    useSensor(PointerSensor, {
      activationConstraint: {
        distance: 8,
      },
    })
  );

  const handleDragEnd = (event) => {
    const { active, over } = event;
    reorderNotes(active.id, over?.id);
  };

  const screenSize = ()=>{
    if((window.innerWidth<1025) && (window.innerWidth>680) && !isMiniSidebar){
      return { marginLeft: '250px', width: '55%' }
    }
    
  }

  return (
    <div className="notes" style={screenSize()}>
      {notes.length === 0 && <EmptyNotesList />}
      {notes.length !== 0 && (
        <DndContext sensors={sensors} collisionDetection={closestCenter} onDragEnd={handleDragEnd}>
          <SortableContext items={notes.map((note) => note.id)} strategy={rectSortingStrategy}>
            {notes.map((note) => (
            <Note
              key={note.id}
              note={note}
              deleteNote={deleteNote}
              toggleModal={toggleModal}
              setSelectedNote={setSelectedNote}
              updateReminder={updateReminder}
            />
            ))}
          </SortableContext>
        </DndContext>
      )}
    </div>
  );
}

export default Notes;
