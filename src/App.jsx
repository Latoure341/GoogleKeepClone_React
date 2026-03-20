import React, { useState } from "react";
import NavBar from "./components/navbar";
import SideBar from "./components/sidebar";
import Form from "./components/form";
import Notes from "./components/notes"
import Modal from "./components/modal"

//Array of notes
   const NOTES = [//{
  //   id: "",
  //   title: "My title",
  //   text: "My Text"
  // },
  // {
  //   id: "",
  //   title: "My title2",
  //   text: "My Text2"
  // }
]

function App() {

  const [notes, setNotes] = useState(NOTES)
  

  //Adding a note
  const addNote =  (note) => {
    setNotes((prevState)=>{
      return [
        ...prevState, note
      ]
    })
  }
 

  return (
    <>
      <NavBar />
      <SideBar />
     
      <Form addNote = {addNote}/>
      <Notes notes = {notes} />
      <Modal />
    </>
  )
}

export default App
