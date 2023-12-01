import { useState, useEffect } from "react";

function FormCol({ children, isFormActive }) {
  return <div className={`form-col flex flex-col ${isFormActive ? "w-4/12" : "w-0"}`}>{children}</div>;
}

function Icon({ icon, clickHandler, isActive }) {
  let styledIcon;
  if (icon == "Description" || icon == "School" || icon == "Work") {
    styledIcon =
      "form-icon flex justify-center items-center icons material-symbols-outlined text-5xl cursor-pointer my-4 rounded text-gray-800";
  } else {
    styledIcon =
      "flex justify-center items-center material-symbols-outlined text-4xl cursor-pointer ml-2 text-gray-800";
  }

  return (
    <button onClick={clickHandler}>
      <span className={`${styledIcon} ${isActive ? "open" : ""}`}>{icon}</span>
    </button>
  );
}

function ExpContainer({ children }) {
  return (
    <div className="bg-slate-300 max-w-fit break-words whitespace-normal rounded m-4 h-fit">
      {children}
    </div>
  );
}

function Input({
  className = "m-5 p-2 rounded",
  placeholder,
  name,
  onInputChange,
  isTextArea,
  value,
  isEditing, // Dodano prop isEditing
}) {
  const [inputValue, setInputValue] = useState("");

  useEffect(() => {
    // Ustaw wartość początkową dla inputa na wartość przekazaną przez prop, gdy isEditing jest true
    if (isEditing && value !== undefined) {
      setInputValue(value);
    }
  }, [isEditing, value]);

  const handleChange = (e) => {
    const newValue = e.target.value;
    setInputValue(newValue);
    onInputChange && onInputChange(newValue, name);
  };

  if (isTextArea) {
    return (
      <textarea
        onChange={handleChange}
        name={name}
        placeholder={placeholder}
        className={className}
        value={inputValue}
      />
    );
  }

  return (
    <input
      onChange={handleChange}
      name={name}
      placeholder={placeholder}
      className={className}
      value={inputValue}
    />
  );
}

export { FormCol, Icon, ExpContainer, Input };
