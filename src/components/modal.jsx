import './component_styles/modal.css'
import Form from './form';

function modal(props) {
  
  const { isModalOpen } = props
  return (
    <>
      <div className={`modal ${isModalOpen ? "open-modal" : ""}`}>
        <div className="modal-content">
            <Form edit={true}/>
        </div>
      </div>
    </>
  );
}

export default modal;
