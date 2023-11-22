import { useState } from "react";

function AddButton({ onClickHandler }) {
  return (
    <div className="flex justify-end">
      <button
        onClick={onClickHandler}
        className="bg-slate-300 rounded-md text-gray-800 m-4 hover:text-white transition"
      >
        <span className="material-symbols-outlined text-4xl">add_circle</span>
      </button>
    </div>
  );
}



function Input({
  className = "m-5 p-2 rounded",
  placeholder,
  name,
  onInputChange,
  isTextArea, // Dodaj nową właściwość do oznaczania, czy to ma być textarea
}) {
  const [output, setOutput] = useState("");
  const handleChange = (e) => {
    const value = e.target.value;
    setOutput(value);
    onInputChange && onInputChange(value, name);
  };

  if (isTextArea) {
    return (
      <>
        <textarea
          onChange={handleChange}
          name={name}
          placeholder={placeholder}
          className={className}
          value={output}
        />
      </>
    );
  }

  return (
    <>
      <input
        onChange={handleChange}
        name={name}
        placeholder={placeholder}
        className={className}
        value={output}
      />
    </>
  );
}

function Form({ children }) {
  return (
    <div className="flex flex-col forms-container bg-slate-300 rounded m-4 h-fit">
      <div className="flex basic-form flex-col">{children}</div>
    </div>
  );
}
export function BasicForm({ onInputChange }) {
  return (
    <Form>
      <Input onInputChange={onInputChange} name="name" placeholder="Jonna" />
      <Input
        onInputChange={onInputChange}
        name="lastname"
        placeholder="Jinton"
      />
      <Input
        onInputChange={onInputChange}
        name="desiredpos"
        placeholder="What position are you applying for?"
      />
      <Input
        onInputChange={onInputChange}
        name="about"
        placeholder="About me"
        isTextArea // Ustaw flagę isTextArea dla textarea
      />
    </Form>
  );
}

export function SchoolForm({ onInputChange, onClickHandler }) {
  return (
    <Form>
      <Input
        onInputChange={onInputChange}
        name="uniname"
        placeholder="University of Opole"
      />
      <Input
        onInputChange={onInputChange}
        name="major"
        placeholder="Information Technology"
      />
      <Input
        onInputChange={onInputChange}
        name="studyYears"
        placeholder="Year 2017-2020"
      />
      <AddButton onClickHandler={onClickHandler} />
    </Form>
  );
}

export function WorkForm({ onInputChange, onClickHandler }) {
  return (
    <Form>
      <Input
        onInputChange={onInputChange}
        name="company"
        placeholder="Google"
      />
      <Input
        onInputChange={onInputChange}
        name="position"
        placeholder="Full stack web developer"
      />
      <Input
        onInputChange={onInputChange}
        name="workYears"
        placeholder="2020-current"
      />
      <AddButton onClickHandler={onClickHandler} />
    </Form>
  );
}
