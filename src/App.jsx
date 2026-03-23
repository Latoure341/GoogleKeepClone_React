import React, { useState } from "react";

import NavBar from "./components/navbar";
import SideBar from "./components/sidebar";
import Form from "./components/form";
import Notes from "./components/notes"
import Modal from "./components/modal"

//Array of notes
   const NOTES = []

function App() {

  let [notes, setNotes] = useState(NOTES)
  const [isModalOpen, setIsModalOpen] = useState(false)
  

  //Adding a note
  const addNote =  (note) => {
    setNotes((prevState)=>{
      return [
        ...prevState, note
      ]
    })
  }

  //Delete a note
  const deleteNote = (id) => {
        setNotes((prevState)=>{
          return prevState.filter(note => note.id != id)
        })
    }

  //open/close the modal
  const toggleModal = () => {
    setIsModalOpen((prevState)=>{
      return (prevState ? prevState = false : prevState = true)
    })
  }  

  return (
    <>
      <NavBar />
      <SideBar />
     
      <Form addNote={addNote} />
      <Notes notes={notes} deleteNote={deleteNote} toggleModal={toggleModal}/>
      <Modal isModalOpen={isModalOpen}/>
    </>
  )
}

export default App
