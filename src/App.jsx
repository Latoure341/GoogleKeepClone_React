import NavBar from "./components/navbar";
import SideBar from "./components/sidebar";
import Form from "./components/form";
import Notes from "./components/notes"
import Modal from "./components/modal"
function App() {
  const note = [
    {id:1, title: "My title", text: "My Text"}, {id: 2, title: "Second Title", text: "Second Text"}
  ]

  return (
    <>
      <NavBar />
      <SideBar />
      <Form />
      <Notes noting={note}/>
      <Modal />
    </>
  )
}

export default App
