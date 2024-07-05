const Modal = ({ heading, description, buttonText, setInputErr }) => {
  return (
    <div className="fixed inset-0 z-50 overflow-y-auto flex items-center justify-center bg-gray-500 bg-opacity-75" style={{ zIndex: "400000" }}>
      <div className="relative bg-white rounded-lg shadow-xl sm:w-full sm:max-w-lg">
        <div className="bg-white px-4 pb-4 pt-5 sm:p-6 sm:pb-4">
          <div className="flex items-center justify-center mx-auto h-12 w-12 flex-shrink-0 rounded-full border border-red-500">
            <svg
              className="h-6 w-6 text-red-600"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              aria-hidden="true"
            >
              <path
                d="M12 9v3.75m-9.303 3.376c-.866 1.5.217 3.374 1.948 3.374h14.71c1.73 0 2.813-1.874 1.948-3.374L13.949 3.378c-.866-1.5-3.032-1.5-3.898 0L2.697 16.126zM12 15.75h.007v.008H12v-.008z"
              />
            </svg>
          </div>
          <div className="mt-3 text-center">
            <h3 className="text-base font-semibold leading-6 text-gray-900" id="modal-title">
              {heading || ""}
            </h3>
            <div className="mt-2">
              <p className="text-sm text-gray-500">{description || ""}</p>
            </div>
          </div>
        </div>
        <div className="bg-gray-50 px-4 py-3 sm:flex sm:flex-row-reverse sm:px-6">
          <button
            type="button"
            className="w-full py-2 px-3 bg-white hover:bg-black active:bg-white text-red-500 hover:text-red-500 border border-red-500 hover:border hover:border-black active:border-red-500 rounded-md"
            onClick={() => setInputErr(false)}
          >
            {buttonText || "Okay"}
          </button>
        </div>
      </div>
    </div>
  );
};

export default Modal;
