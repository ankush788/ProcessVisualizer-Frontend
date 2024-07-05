const LabelAndInput = ({ label, description, placeholder, value, onChange, inputType, showErr }) => {
  return (
    <div className="flex flex-col md:flex-row lg:flex-col mx-auto p-1">
      <div className="flex-1 items-center p-2 text-base md:text-md">
        <details className="rounded-lg cursor-pointer">
          <summary>
            <span className="w-full text-sm md:text-base">{label}</span>
          </summary>
          <div className="mt-1 text-sm">
            <p>{description}</p>
          </div>
        </details>
      </div>
      <div className="flex-1 p-1">
        <input
          type={inputType || "text"}
          className={`inputStyles w-full ${showErr && "border-red-500"} `}
          placeholder={placeholder}
          value={value}
          onChange={onChange}
        />
      </div>
    </div>
  );
};

export default LabelAndInput;
