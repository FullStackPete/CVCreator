import { useState } from "react";

function Input({
  className = "m-5 p-2 rounded",
  placeholder,
  name,
  onInputChange,
}) {
  const [output, setOutput] = useState("");
  const handleChange = (e) => {
    const value = e.target.value;
    setOutput(value);
    onInputChange && onInputChange(value, name);
  };
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
    <div className="flex flex-col forms-container bg-slate-300 w-4/12 rounded m-4 max-h-80">
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
        name="birthdate"
        placeholder="Date of birth"
      />
      <Input
        onInputChange={onInputChange}
        name="about"
        placeholder="About me"
      />
    </Form>
  );
}

export function SchoolForm({ onInputChange }) {
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
    </Form>
  );
}

export function WorkForm({ onInputChange }) {
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
    </Form>
  );
}
