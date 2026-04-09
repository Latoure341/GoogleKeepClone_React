import React, { useRef } from 'react';
import './component_styles/modal.css';
import Form from './form';

function Modal(props) {
  const { isModalOpen, selectedNote, toggleModal, editNote } = props;
  const formRef = useRef(null);

  const handleClick = (event) => {
    if (event.target === event.currentTarget) {
      if (formRef.current?.save) {
        formRef.current.save();
      } else {
        toggleModal();
      }
    }
  };

  return (
    <>
      <div className={`modal ${isModalOpen ? 'open-modal' : ''}`} onClick={handleClick}>
        <div className="modal-content">
          <Form
            ref={formRef}
            edit={true}
            selectedNote={selectedNote}
            toggleModal={toggleModal}
            editNote={editNote}
          />
        </div>
      </div>
    </>
  );
}

export default Modal;
