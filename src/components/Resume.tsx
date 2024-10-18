// // import React, { useState } from "react";

// // const ResumePopup: React.FC = () => {
// //   const [modalIsOpen, setModalIsOpen] = useState(false);

// //   const openModal = () => {
// //     setModalIsOpen(true);
// //   };

// //   const closeModal = () => {
// //     setModalIsOpen(false);
// //   };

// //   return (
// //     <div className="flex flex-col items-center justify-center min-h-screen bg-gray-50">
// //       <button
// //         onClick={openModal}
// //         className="px-6 py-2 bg-blue-500 text-white font-semibold rounded-lg shadow-md hover:bg-blue-600 transition duration-300"
// //       >
// //         View Resume
// //       </button>

// //       {/* Modal */}
// //       {modalIsOpen && (
// //         <div className="fixed inset-0 bg-gray-900 bg-opacity-75 flex items-center justify-center z-50">
// //           <div className="relative bg-white w-11/12 md:w-3/4 lg:w-1/2 xl:w-1/3 shadow-lg rounded-lg overflow-hidden">
// //             {/* Close Button */}
// //             <button
// //               onClick={closeModal}
// //               className="absolute top-3 right-3 bg-red-500 text-white rounded-full w-8 h-8 flex items-center justify-center hover:bg-red-600 transition duration-300"
// //             >
// //               &times;
// //             </button>

// //             {/* PDF Content */}
// //             <iframe
// //               src="/Resume/NikitaJareResume.pdf"
// //               className="w-full h-[500px]"
// //               title="Resume PDF"
// //             />
// //           </div>
// //         </div>
// //       )}
// //     </div>
// //   );
// // };

// // export default ResumePopup;
// import React, { useState } from "react";

// const Resume: React.FC = () => {
//   const [modalIsOpen, setModalIsOpen] = useState(false);

//   const openModal = () => {
//     setModalIsOpen(true);
//   };

//   const closeModal = () => {
//     setModalIsOpen(false);
//   };

//   return (
//     <div>
//       {/* Button to Open Resume Modal */}
//       <button
//         onClick={openModal}
//         className="px-4 py-2 bg-blue-500 text-white font-semibold rounded-lg hover:bg-blue-600 transition duration-300"
//       >
//         View Resume
//       </button>

//       {/* Fullscreen Modal */}
//       {modalIsOpen && (
//         <div className="fixed inset-0 bg-gray-900 bg-opacity-90 flex items-center justify-center z-50">
//           <div className="relative w-full h-full">
//             {/* Close Button */}
//             <button
//               onClick={closeModal}
//               className="absolute top-4 right-4 bg-red-500 text-white rounded-full w-10 h-10 flex items-center justify-center hover:bg-red-600 transition duration-300 z-50"
//             >
//               &times;
//             </button>

//             {/* PDF Viewer */}
//             <iframe
//               src="/Resume/NikitaJareResume.pdf"
//               className="w-full h-full border-none"
//               title="Resume PDF"
//             />
//           </div>
//         </div>
//       )}
//     </div>
//   );
// };

// export default Resume;

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
    <div>
      {/* Button to Open Resume Modal */}
      <button onClick={openModal} className="px-4 py-2 underline">
        Hiring? Checkout my Resume!
      </button>

      {/* Fullscreen Transparent Modal */}
      {modalIsOpen && (
        <div
          className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50"
          onClick={handleOverlayClick}
        >
          <div className="relative w-11/12 h-5/6 bg-white rounded-lg shadow-lg overflow-hidden">
            {/* Close Button */}
            <button
              onClick={closeModal}
              className="absolute top-3 right-3 bg-red-500 text-white rounded-full w-8 h-8 flex items-center justify-center hover:bg-red-600 transition duration-300 z-50"
            >
              &times;
            </button>

            {/* PDF Viewer */}
            <iframe
              src="/Resume/NikitaJareResume.pdf"
              className="w-full h-full border-none"
              title="Resume PDF"
            />
          </div>
        </div>
      )}
    </div>
  );
};

export default Resume;
