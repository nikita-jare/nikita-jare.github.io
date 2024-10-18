import React, { useState } from "react";

const Resume: React.FC = () => {
  const [modalIsOpen, setModalIsOpen] = useState(false);

  const openModal = () => {
    setModalIsOpen(true);
  };

  const closeModal = () => {
    setModalIsOpen(false);
  };

  // Close the modal when clicked outside the content
  const handleOverlayClick = (e: React.MouseEvent) => {
    if (e.target === e.currentTarget) {
      closeModal();
    }
  };

  return (
    <div className="text-center">
      {/* Button to Open Resume Modal */}
      <button
        onClick={openModal}
        className="px-4 py-2 underline text-sm sm:text-base md:text-lg hover:text-blue-600 transition duration-300"
      >
        Hiring? Checkout my Resume!
      </button>

      {/* Fullscreen Transparent Modal */}
      {modalIsOpen && (
        <div
          className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50"
          onClick={handleOverlayClick}
        >
          <div className="relative w-11/12 sm:w-3/4 md:w-2/3 lg:w-1/2 h-5/6 bg-white rounded-lg shadow-lg overflow-hidden">
            {/* Close Button */}
            <button
              onClick={closeModal}
              className="absolute top-3 right-3 text-black rounded-full w-8 h-8 flex items-center justify-center hover:bg-gray-300 transition duration-300 z-50"
            >
              &times;
            </button>

            {/* PDF Viewer without preview UI */}
            <embed
              src="/Resume/NikitaJareResume.pdf#toolbar=0&navpanes=0&scrollbar=0"
              className="w-full h-full"
              type="application/pdf"
            />
          </div>
        </div>
      )}
    </div>
  );
};

export default Resume;
