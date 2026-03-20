import NavBar from "./components/navbar";
import SideBar from "./components/sidebar";
import Form from "./components/form";
import Notes from "./components/notes"
import Modal from "./components/modal"
function App() {
  //Array of notes
  let notes = [{
    id: "",
    title: "My title",
    text: "My Text"
  }]

  //Adding a note
  const addNote =  (note) => {
    notes.push(note);
    console.log(notes);
  }
 

  return (
    <>
      <NavBar />
      <SideBar />
      // eslint-disable-next-line react-hooks/immutability, react-hooks/immutability
      <Form addNote = {addNote}/>
      <Notes />
      <Modal />
    </>
  )
}

export default App
