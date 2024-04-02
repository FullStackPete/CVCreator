import { ChangeEvent, useEffect, useState } from "react";

type InputProps = {
  className?: string;
  placeholder: string;
  name: string;
  onInputChange: (arg1: string, arg2: string) => void;
  isTextArea?: boolean;
  value?: string;
  isEditing?: boolean;
};

function Input({
  className = "m-5 p-2 rounded",
  placeholder,
  name,
  onInputChange,
  isTextArea, // Dodaj nową właściwość do oznaczania, czy to ma być textarea
  value,
  isEditing,
}: InputProps) {
  const [inputValue, setInputValue] = useState("");

  useEffect(() => {
    // Ustaw wartość początkową dla inputa na wartość przekazaną przez prop, gdy isEditing jest true
    if (isEditing && value !== undefined) {
      setInputValue(value);
    }
  }, [isEditing, value]);

  const handleChange = (
    e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
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
export default Input;
