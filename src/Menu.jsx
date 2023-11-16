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
    birthdate: "",
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
      <div className="CV flex flex-row">
        <div className="left-bar bg-gray-800 flex-col h-big"><h1>{output.name} {output.lastname}</h1></div>
        <div className="right-bar flex-col">
          <div className="bg-yellow-400 mt-6 w-96 h-32"></div>
        </div>
      
        
        <h1>{output.birthdate}</h1>
        <h1>{output.about}</h1>
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
