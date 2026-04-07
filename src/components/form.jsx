import React, { useState } from "react";
import cuid from "cuid";

import "./component_styles/form.css";

const Form = (props) => {
  const { edit, selectedNote, addNote, toggleModal, editNote, isMiniSidebar } = props;
  const [title, setTitle] = useState((edit && selectedNote.title) || "");
  const [text, setText] = useState((edit && selectedNote.text) || "");
  const [isActiveForm, setActiveForm] = useState(edit);

  const titleHandleOnChange = (event) => setTitle(event.target.value);
  const textHandleOnChange = (event) => {
    setText(event.target.value);
    setActiveForm(true);
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    if (!edit) {
      setActiveForm(false);

      //Create a note
      const note = {
        id: cuid(),
        title,
        text,
      };
      text !== "" ? addNote(note) : console.log("Enter the text and title");
    } else {
      editNote({
        id: selectedNote.id,
        title, 
        text
      })
      toggleModal()
    };
    setTitle("");
    setText("");
  };

  const handlerClickFrom = () => {
    setActiveForm(true);
  };
  return (
    <>
      <div className="form-container active-form" onClick={handlerClickFrom} style={isMiniSidebar ? {} : { marginLeft: "450px", width: '65%' }} >
        <form
          onSubmit={handleSubmit}
          className={isActiveForm ? "form" : ""}
          id="form"
        >
          {isActiveForm && (
            <input
              onChange={titleHandleOnChange}
              value={title}
              type="text"
              className="note-title"
              placeholder="Title"
            />
          )}

          <input
            onChange={textHandleOnChange}
            value={text}
            type="text"
            className="note-text"
            id="note-text"
            placeholder="Take a note..."
          />
          {isActiveForm ? (
            <div className="form-actions">
              <div className="icons">
                <div className="tooltip">
                  <span className="material-symbols-outlined hover small-icon">
                    add_alert
                  </span>
                  <span className="tooltip-text">Remind me</span>
                </div>
                <div className="tooltip">
                  <span className="material-symbols-outlined hover small-icon">
                    person_add
                  </span>
                  <span className="tooltip-text">Collaborator</span>
                </div>
                <div className="tooltip">
                  <span className="material-symbols-outlined hover small-icon">
                    palette
                  </span>
                  <span className="tooltip-text">Change Color</span>
                </div>
                <div className="tooltip">
                  <span className="material-symbols-outlined hover small-icon">
                    image
                  </span>
                  <span className="tooltip-text">Add Image</span>
                </div>
                <div className="tooltip">
                  <span className="material-symbols-outlined hover small-icon">
                    archive
                  </span>
                  <span className="tooltip-text">Archive</span>
                </div>
                <div className="tooltip">
                  <span className="material-symbols-outlined hover small-icon">
                    more_vert
                  </span>
                  <span className="tooltip-text">More</span>
                </div>
                <div className="tooltip">
                  <span className="material-symbols-outlined hover small-icon">
                    undo
                  </span>
                  <span className="tooltip-text">Undo</span>
                </div>
                <div className="tooltip">
                  <span className="material-symbols-outlined hover small-icon">
                    redo
                  </span>
                  <span className="tooltip-text">Redo</span>
                </div>
              </div>
              <button className="close-btn">close</button>
            </div>
          ) : (
            <div className="form-actions">
              <div className="tooltip">
                <span className="material-symbols-outlined hover">
                  check_box
                </span>
                <span className="tooltip-text">New List</span>
              </div>
              <div className="tooltip">
                <span className="material-symbols-outlined hover">brush</span>
                <span className="tooltip-text">New Drawing</span>
              </div>
              <div className="tooltip">
                <span className="material-symbols-outlined hover">image</span>
                <span className="tooltip-text">New Image</span>
              </div>
            </div>
          )}
        </form>
      </div>
    </>
  );
};

export default Form;
