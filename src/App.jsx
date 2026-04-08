import React, { useEffect, useState } from "react";

import NavBar from "./components/navbar";
import SideBar from "./components/sidebar";
import Form from "./components/form";
import Notes from "./components/notes";
import Modal from "./components/modal";

const STORAGE_KEY = "keep_clone_notes";

function App() {
  let [notes, setNotes] = useState(() => {
    const storedNotes = localStorage.getItem(STORAGE_KEY);
    return storedNotes ? JSON.parse(storedNotes) : [];
  });
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedNote, setSelectedNote] = useState({});
  const [isMiniSidebar, setIsMiniSidebar] = useState(true);

  useEffect(() => {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(notes));
  }, [notes]);

  //Adding a note
  const addNote = (note) => {
    setNotes((prevState) => {
      return [...prevState, note];
    });
  };

  //Delete a note
  const deleteNote = (id) => {
    setNotes((prevState) => {
      return prevState.filter((note) => note.id != id);
    });
  };

  //Edit the note
  const editNote = (editedNote) => {
    setNotes((prevState) => {
      const newArray = prevState.map((note) => {
        if (note.id === editedNote.id) {
          note.title = editedNote.title;
          note.text = editedNote.text;
        }
        return note;
      });
      return newArray;
    });
  };

  // Update reminder date/time for a note
  const updateReminder = (id, reminder) => {
    setNotes((prevState) =>
      prevState.map((note) =>
        note.id === id
          ? {
              ...note,
              reminder,
            }
          : note
      )
    );
  };

  // Reorder notes and persist the new order
  const reorderNotes = (activeId, overId) => {
    if (!overId || activeId === overId) return;

    setNotes((prevNotes) => {
      const oldIndex = prevNotes.findIndex((note) => note.id === activeId);
      const newIndex = prevNotes.findIndex((note) => note.id === overId);

      if (oldIndex < 0 || newIndex < 0) return prevNotes;

      const newNotes = [...prevNotes];
      const [movedNote] = newNotes.splice(oldIndex, 1);
      newNotes.splice(newIndex, 0, movedNote);
      return newNotes;
    });
  };

  //open/close the modal
  const toggleModal = () => {
    setIsModalOpen((prevState) => {
      return prevState ? (prevState = false) : (prevState = true);
    });
  };

  return (
    <>
      <NavBar setIsMiniSidebar={setIsMiniSidebar} />
      <SideBar isMiniSidebar={isMiniSidebar} />
      <Form addNote={addNote}  isMiniSidebar={isMiniSidebar}/>
      <Notes
        notes={notes}
        deleteNote={deleteNote}
        toggleModal={toggleModal}
        setSelectedNote={setSelectedNote}
        isMiniSidebar={isMiniSidebar}
        updateReminder={updateReminder}
        reorderNotes={reorderNotes}
      />
      {isModalOpen && (
        <Modal
          isModalOpen={isModalOpen}
          selectedNote={selectedNote}
          toggleModal={toggleModal}
          editNote={editNote}
        />
      )}
    </>
  );
}

export default App;
