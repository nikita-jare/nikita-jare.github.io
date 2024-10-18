import React, { useState } from "react";
import Modal from "react-modal";

// Set the root element for the modal (accessibility)
Modal.setAppElement("#root");

const ResumePopup: React.FC = () => {
  const [modalIsOpen, setModalIsOpen] = useState(false);

  const openModal = () => {
    setModalIsOpen(true);
  };

  const closeModal = () => {
    setModalIsOpen(false);
  };

  return (
    <div>
      <button onClick={openModal} className="btn">
        View Resume
      </button>

      <Modal
        isOpen={modalIsOpen}
        onRequestClose={closeModal}
        contentLabel="Resume PDF Modal"
        className="modal-content" // You can style this in CSS
        overlayClassName="modal-overlay" // Overlay styling
      >
        <button onClick={closeModal} className="btn-close">
          Close
        </button>

        <iframe
          src="/path-to-your-resume.pdf"
          width="100%"
          height="600px"
          title="Resume PDF"
        />
      </Modal>
    </div>
  );
};

export default ResumePopup;
