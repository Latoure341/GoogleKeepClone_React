import React, { useState } from 'react';
import './component_styles/modal.css'
import Form from './form';

function modal(props) {
  const [hasCursor, setCursor] = useState(false)
  const { isModalOpen, selectedNote, toggleModal, editNote} = props
  
  const handleClick = ()=>{
    !hasCursor && toggleModal();
  }
  const mouseOverHandle = ()=>setCursor(true);
  const mouseOutHandle = ()=>setCursor(false);

  return (
    <>
      <div className={`modal ${isModalOpen ? "open-modal" : ""}`} onClick={handleClick}>
        <div className="modal-content" onMouseOver={mouseOverHandle} onMouseOut={mouseOutHandle}>
            <Form edit={true} selectedNote={selectedNote} toggleModal={toggleModal} editNote={editNote}/>
        </div>
      </div>
    </>
  );
}

export default modal;
