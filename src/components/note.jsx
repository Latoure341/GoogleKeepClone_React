import React, {  useState } from "react";

const Note = (props) => {
    const [title, setTitle] = useState(props.title);
    const [text, setText] = useState(props.text);

    const handleClick = () => {
      setTitle("Changed Text");
      setText("Changed Text")
    }

    

    return (
        <>
            <div className="notes">
        <div className="note" id="note" onClick={handleClick}>
          <span
            className="material-symbols-outlined check-circle"
            id="check-circle"
          >
            check_circle
          </span>
          <div className="title">{title}</div>
          <div className="text">{text}</div>
          <div className="note-footer">
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
              <span className="material-symbols-outlined hover small-icon archive">
                archive
              </span>
              <span className="tooltip-text archive">Archive</span>
            </div>
            <div className="tooltip">
              <span className="material-symbols-outlined hover small-icon">
                more_vert
              </span>
              <span className="tooltip-text">More</span>
            </div>
          </div>
        </div>
        <span className="tooltip-text">Add Image</span>
    </div>
        </>
    )
}

export default Note;