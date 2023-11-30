import { useState } from "react";
import {Input} from "./SComponents";

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
      <Input key="name" onInputChange={onInputChange} name="name" placeholder="Jonna" />
      <Input
      key="lastname"
        onInputChange={onInputChange}
        name="lastname"
        placeholder="Jinton"
      />
      <Input
      key="desiredpos"
        onInputChange={onInputChange}
        name="desiredpos"
        placeholder="What position are you applying for?"
      />
      <Input
      key="about"
        onInputChange={onInputChange}
        name="about"
        placeholder="About me"
        isTextArea // Ustaw flagę isTextArea dla textarea
      />
    </Form>
  );
}

export function SchoolForm({ onInputChange, onClickHandler, isEditing, output }) {
  return (
    <Form>
      <Input
        onInputChange={onInputChange}
        name="uniname"
        placeholder="University of Opole"
        value={output.uniname} // Ustawienie value dla Input
        isEditing={isEditing}
      />
      <Input
        onInputChange={onInputChange}
        name="major"
        placeholder="Information Technology"
        value={output.major} // Ustawienie value dla Input
        isEditing={isEditing}
      />
      <Input
        onInputChange={onInputChange}
        name="studyYears"
        placeholder="Year 2017-2020"
        value={output.studyYears} // Ustawienie value dla Input
        isEditing={isEditing}
      />
      <AddButton onClickHandler={onClickHandler} />
    </Form>
  );
}

export function WorkForm({ onInputChange, onClickHandler, isEditing, output }) {
  return (
    <Form>
      <Input
      key="company"
        onInputChange={onInputChange}
        name="company"
        placeholder="Google"
        value={output.company}
        isEditing={isEditing}
      />
      <Input
      key="position"
        onInputChange={onInputChange}
        name="position"
        placeholder="Full stack web developer"
        value={output.position}
        isEditing={isEditing}
      />
      <Input
      key="workYears"
        onInputChange={onInputChange}
        name="workYears"
        placeholder="2020-current"
        value={output.workYears}
        isEditing={isEditing}
      />
      <AddButton onClickHandler={onClickHandler} />
    </Form>
  );
}
