import { BasicForm, SchoolForm, WorkForm } from "./Forms";
import { FormCol, Icon, ExpContainer } from "./SComponents";
import { useState } from "react";

const SchoolExp = [];
const WorkExp = [];
let SchoolExpID = 0;
let WorkExpID = 0;

function Menu() {
  const [btnState, setBtnState] = useState(null);
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
  const [menuIsOpen, setMenuIsOpen] = useState(false);
  const [activeForm, setActiveForm] = useState(null);

  const handleFormAddClick = () => {
    if (activeForm == "SchoolForm") {
      SchoolExpID++;
      SchoolExp.push({
        id: SchoolExpID,
        uniname: output.uniname,
        major: output.major,
        studyYears: output.studyYears,
      });
      setBtnState(SchoolExpID);
    } else if (activeForm == "WorkForm") {
      WorkExpID++;
      WorkExp.push({
        id: WorkExpID,
        company: output.company,
        position: output.position,
        workYears: output.workYears,
      });
      setBtnState(WorkExpID);
    }
  };

  const handleInputChange = (value, name) => {
    setOutput((prevOutput) => ({
      ...prevOutput,
      [name]: value,
    }));
  };

  const handleMenuClick = () => {
    setMenuIsOpen(!menuIsOpen);
  };

  const handleFormToggle = (form) => {
    setActiveForm((prevForm) => (prevForm === form ? null : form));
  };
  const WorkExpTogether = WorkExp.map((exp) => (
    <div
      key={exp.id}
      className="flex flex-row text-black ml-6 text-xs overflow-y-auto max-h-48 max-width-prose"
    >
      <div className="font-bold">{exp.workYears}</div>
      <div className="flex flex-col ml-2">
        <div className="font-bold">{exp.company}</div>
        <div>{exp.position}</div>
      </div>
    </div>
  ));
  const WorkExpEditable = WorkExp.map((exp) => (
    <div
      key={exp.id}
      className="flex flex-row text-black m-5 text-base max-h-48"
    >
      <div className="font-bold">{exp.workYears}</div>
      <div className="flex flex-col ml-2">
        <div className="font-bold">{exp.company}</div>
        <div>{exp.position}</div>
      </div>
      <Icon icon="delete"/>
    </div>
  ));
  return (
    <>
      <div
        id="menu"
        className={`bg-slate-300 rounded text-5xl m-4 items-center justify-center text-center transform-origin transition-all w-20
        menu ${menuIsOpen ? "show-menu" : ""}
        `}
      >
        <button onClick={handleMenuClick}>
          <span
            id="menuIcon"
            className={`material-symbols-outlined text-gray-800 text-5xl cursor-pointer my-4 menuIcon ${
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
        <FormCol>
          <BasicForm onInputChange={handleInputChange} />
        </FormCol>
      )}
      {activeForm === "SchoolForm" && (
        <FormCol>
          <SchoolForm
            onInputChange={handleInputChange}
            onClickHandler={handleFormAddClick}
          />
        </FormCol>
      )}
      {activeForm === "WorkForm" && (
        <FormCol>
          <WorkForm
            onInputChange={handleInputChange}
            onClickHandler={handleFormAddClick}
          />
          <ExpContainer>{WorkExpEditable}</ExpContainer>
        </FormCol>
      )}
      <div className="CV flex flex-row m-4 shadow-black shadow-lg text-white">
        <div className="left-bar bg-gray-800 flex-col h-big w-32">
          <p className="my-6 text-center tracking-widest border-b-2">
            EDUCATION
          </p>
        </div>
        <div className="right-bar flex-col ">
          <div className="h-10"></div>
          <div className="bg-yellow-400 w-96 h-28 text-black tracking-widest leading-3 max-h-32">
            <div className="bg-yellow-400 h-2"></div>
            <p className="ml-6 mt-4 text-3xl">
              <span className="font-bold">{output.name}</span> {output.lastname}
            </p>
            <br />
            <p className="ml-6 text-2xl">{output.desiredpos}</p>
          </div>
          <div className="text-black ml-6 text-sm tracking-widest font-semibold mt-4 border-black border-b-2">
            ABOUT ME
          </div>
          <div className="text-black ml-6 text-xs overflow-y-auto max-h-48 max-width-prose">
            {output.about}
          </div>
          <br />
          <div className="text-black ml-6 text-sm tracking-widest font-semibold mt-4 border-black border-b-2">
            WORK EXPERIENCE
          </div>
          {WorkExpTogether}
        </div>
        <h1>{output.uniname}</h1>
        <h1>{output.major}</h1>
        <h1>{output.studyYears}</h1>
        {/* <h1>{output.company}</h1>
        <h1>{output.position}</h1>
        <h1>{output.workYears}</h1> */}
      </div>
    </>
  );
}

export default Menu;
