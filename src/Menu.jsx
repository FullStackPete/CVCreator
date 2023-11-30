import { BasicForm, SchoolForm, WorkForm } from "./Forms";
import { FormCol, Icon, ExpContainer } from "./SComponents";
import { useState } from "react";

let SchoolExpID = 0;
let WorkExpID = 0;

function Menu() {
  const [isEditing, setIsEditing] = useState(false);
  const [schoolExp, setSchoolExp] = useState([]);
  const [workExp, setWorkExp] = useState([]);
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

  const handleExpEdit = (id) => {
    if (activeForm === "SchoolForm") {
      setIsEditing(true);
      const editedSchoolExp = schoolExp.find((exp) => exp.id === id);

      setOutput((prevOutput) => ({
        ...prevOutput,
        studyYears: editedSchoolExp.studyYears,
        uniname: editedSchoolExp.uniname,
        major: editedSchoolExp.major,
      }));
      const updatedSchoolExp = schoolExp.filter((exp) => exp.id !== id);
      setSchoolExp(updatedSchoolExp);
      setBtnState((prevBtnState) => prevBtnState + 1);
    } else if (activeForm === "WorkForm") {
      setIsEditing(true); // only
      const editedWorkExp = workExp.find((exp) => exp.id === id);

      setOutput((prevOutput) => ({
        ...prevOutput,
        workYears: editedWorkExp.workYears,
        company: editedWorkExp.company,
        position: editedWorkExp.position,
      }));

      const updatedWorkExp = workExp.filter((exp) => exp.id !== id);
      setWorkExp(updatedWorkExp);
      setBtnState((prevBtnState) => prevBtnState + 1);
    }
  };

  const handleExpDelete = (id) => {
    if (activeForm == "SchoolForm") {
      const updatedSchoolExp = schoolExp.filter((exp) => exp.id !== id);
      setSchoolExp(updatedSchoolExp);
      setBtnState((prevBtnState) => prevBtnState + 1);
    } else if (activeForm == "WorkForm") {
      const updatedWorkExp = workExp.filter((exp) => exp.id !== id);
      setWorkExp(updatedWorkExp);
      setBtnState(btnState + 1);
    }
  };
  const handleFormAddClick = () => {
    if (activeForm == "SchoolForm") {
      SchoolExpID++;
      setSchoolExp((prevSchoolExp) => [
        ...prevSchoolExp,
        {
          id: SchoolExpID,
          uniname: output.uniname,
          major: output.major,
          studyYears: output.studyYears,
        },
      ]);
      setBtnState((prevBtnState) => prevBtnState + 1);
    } else if (activeForm == "WorkForm") {
      WorkExpID++;
      setWorkExp((prevWorkExp) => [
        ...prevWorkExp,
        {
          id: WorkExpID,
          company: output.company,
          position: output.position,
          workYears: output.workYears,
        },
      ]);
      setBtnState((prevBtnState) => prevBtnState + 1);
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
  const WorkExpViews = workExp.map((exp) => (
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
  const SchoolExpViews = schoolExp.map((exp) => (
    <div key={exp.id} className="flex flex-row text-white m-2 text-xs">
      <div className="font-bold">{exp.studyYears}</div>
      <div className="flex-col ml-2">
        <div className="font-bold">{exp.uniname}</div>
        <div>{exp.major}</div>
      </div>
    </div>
  ));

  const SchoolExpEditable = schoolExp.map((exp) => (
    <div
      key={exp.id}
      className="flex flex-row text-black m-5 text-base max-h-48"
    >
      <div className="font-bold">{exp.studyYears}</div>
      <div className="flex flex-col ml-2">
        <div className="font-bold">{exp.uniname}</div>
        <div>{exp.major}</div>
      </div>
      <div className="flex items-end">
        <Icon clickHandler={() => handleExpDelete(exp.id)} icon="delete" />
        <Icon clickHandler={() => handleExpEdit(exp.id)} icon="edit" />
      </div>
    </div>
  ));
  const WorkExpEditable = workExp.map((exp) => (
    <div
      key={exp.id}
      className="flex flex-row text-black m-5 text-base max-h-48"
    >
      <div className="font-bold">{exp.workYears}</div>
      <div className="flex flex-col ml-2">
        <div className="font-bold">{exp.company}</div>
        <div>{exp.position}</div>
      </div>
      <div className="flex items-end">
        <Icon clickHandler={() => handleExpDelete(exp.id)} icon="delete" />
        <Icon clickHandler={() => handleExpEdit(exp.id)} icon="edit" />
      </div>
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
            isEditing={isEditing}
            output={output}
          />
          <ExpContainer>{SchoolExpEditable}</ExpContainer>
        </FormCol>
      )}
      {activeForm === "WorkForm" && (
        <FormCol>
          <WorkForm
            onInputChange={handleInputChange}
            onClickHandler={handleFormAddClick}
            isEditing={isEditing}
            output={output}
          />
          <ExpContainer>{WorkExpEditable}</ExpContainer>
        </FormCol>
      )}
      <div className="CV flex flex-row m-4 shadow-black shadow-lg text-white">
        <div className="left-bar bg-gray-800 flex-col h-big w-32">
          <p className="my-6 text-center tracking-widest border-b-2">
            EDUCATION
          </p>
          {SchoolExpViews}
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
          <div className="text-black ml-6 text-xs overflow-y-auto max-width-prose">
            {output.about}
          </div>
          <br />
          <div className="text-black ml-6 text-sm tracking-widest font-semibold border-black border-b-2">
            WORK EXPERIENCE
          </div>
          {WorkExpViews}
        </div>
      </div>
    </>
  );
}

export default Menu;
