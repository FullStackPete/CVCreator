import { BasicForm, SchoolForm, WorkForm } from "./Forms";
import { useState } from "react";

function Icon({ icon, clickHandler }) {
  const styledIcon =
    "icons material-symbols-outlined text-5xl cursor-pointer my-4 rounded";

  return (
    <button onClick={clickHandler}>
      <span className={styledIcon}>{icon}</span>
    </button>
  );
}

function Menu() {
  const [output, setOutput] = useState({
    name: "",
    lastname: "",
    desiredpos: "",
    about: "",
    uniname: "",
    major: "",
    studyYears: "",
    company: "",
    position: "",
    workYears: "",
  });

  const handleInputChange = (value, name) => {
    setOutput((prevOutput) => ({
      ...prevOutput,
      [name]: value,
    }));
  };
  const [menuIsOpen, setMenuIsOpen] = useState(false);
  const [activeForm, setActiveForm] = useState(null);

  const handleMenuClick = () => {
    setMenuIsOpen(!menuIsOpen);
  };

  const handleFormToggle = (form) => {
    setActiveForm((prevForm) => (prevForm === form ? null : form));
  };

  return (
    <>
      <div
        id="menu"
        className={`bg-slate-300 rounded text-5xl m-4 w-20 items-center justify-center text-center transform-origin transition-all
        menu ${menuIsOpen ? "show-menu" : ""}
        `}
      >
        <button onClick={handleMenuClick}>
          <span
            id="menuIcon"
            className={`material-symbols-outlined text-5xl cursor-pointer my-4 menuIcon ${
              menuIsOpen ? "open" : ""
            }`}
          >
            {!menuIsOpen ? "menu" : "close"}
          </span>
        </button>

        <Icon
          clickHandler={() => handleFormToggle("BasicForm")}
          icon="Description"
        ></Icon>
        <Icon
          clickHandler={() => handleFormToggle("SchoolForm")}
          icon="School"
        ></Icon>
        <Icon
          clickHandler={() => handleFormToggle("WorkForm")}
          icon="Work"
        ></Icon>
      </div>

      {activeForm === "BasicForm" && (
        <BasicForm onInputChange={handleInputChange} />
      )}
      {activeForm === "SchoolForm" && (
        <SchoolForm onInputChange={handleInputChange} />
      )}
      {activeForm === "WorkForm" && (
        <WorkForm onInputChange={handleInputChange} />
      )}
      <div className="CV flex flex-row m-4 shadow-black shadow-lg text-white">
        <div className="left-bar bg-gray-800 flex-col h-big w-32">
          <p className="my-6 text-center tracking-widest border-b-2">
            EDUCATION
          </p>
        </div>
        <div className="right-bar flex-col">
          <div className="h-10"></div>
          <div className="bg-yellow-400 w-96 h-32 text-black tracking-widest leading-3 overflow-y-auto max-h-32">
            <div className="bg-yellow-400 h-2"></div>
            <p className="ml-6 mt-4 text-4xl">
              <span className="font-bold">{output.name}</span> {output.lastname}
            </p>
            <br />
            <p className="ml-6 text-2xl">{output.desiredpos}</p>
          </div>
          <div className="text-black ml-6 text-base tracking-widest font-semibold mt-4 border-black border-b-2">
            ABOUT ME
          </div>
          <div className="text-black ml-6 text-sm overflow-y-auto max-h-48 max-width-prose">
            {output.about}
          </div>
          <br />
          <div className="text-black ml-6 text-base tracking-widest font-semibold mt-4 border-black border-b-2">
            WORK EXPERIENCE
          </div>
        </div>
        <h1>{output.uniname}</h1>
        <h1>{output.major}</h1>
        <h1>{output.studyYears}</h1>
        <h1>{output.company}</h1>
        <h1>{output.position}</h1>
        <h1>{output.workYears}</h1>
      </div>
    </>
  );
}

export default Menu;
