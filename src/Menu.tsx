import { useState } from "react";
import ExpContainer from "./components/ExpContainer";
import BasicForm from "./components/Forms/BasicForm";
import FormCol from "./components/Forms/FormCol";
import SchoolForm from "./components/Forms/SchoolForm";
import WorkForm from "./components/Forms/WorkForm";
import Icon from "./components/Icon";
import { PictureInput, PictureImage } from "./components/Forms/ProfilePicture";

type SchoolExpType = {
  id: number;
  uniname: string;
  major: string;
  studyYears: string;
};
type WorkExpType = {
  id: number;
  company: string;
  position: string;
  workYears: string;
};

let SchoolExpId: number = 0;
let WorkExpId: number = 0;

function Menu() {
  const [isEditing, setIsEditing] = useState(false);
  const [btnState, setBtnState] = useState(0);
  const [image, setImage] = useState(null);
  const [schoolExp, setSchoolExp] = useState([]);
  const [workExp, setWorkExp] = useState([]);
  const [showDeleteOutput, setShowDeleteOutput] = useState(false);
  const [output, setOutput] = useState({
    name: "",
    lastname: "",
    desiredpos: "",
    about: "",
    uniname: "",
    major: "",
    phone: "",
    email: "",
    studyYears: "",
    company: "",
    position: "",
    workYears: "",
  });
  const [menuIsOpen, setMenuIsOpen] = useState(false);
  const [activeForm, setActiveForm] = useState<string | null>(null);

  const loadExampleData = () => {
    setShowDeleteOutput(true);
    setOutput({
      name: "John",
      lastname: "Doe",
      desiredpos: "Full-stack web developer",
      about:
        "Hi! I am a junior full-stack web developer mainly working in NodeJS and React. Lately I also decided to learn C# and I found it very pleasant. My github profile is github.com/FullStackPete - please visit to see my other projects!",
      phone: "+48 987654321",
      email: "example@mail.com",
    });
    SchoolExpID++;
    setSchoolExp((prevSchoolExp) => [
      ...prevSchoolExp,
      {
        id: SchoolExpID,
        uniname: "University of Opole",
        major: "Information Technology",
        studyYears: "2022-current",
      },
    ]);
    WorkExpID++;
    setWorkExp((prevWorkExp) => [
      ...prevWorkExp,
      {
        id: WorkExpID,
        company: "Example company",
        position: "Full-stack web developer",
        workYears: "2023-current",
      },
    ]);
  };

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
    if (
      activeForm == "SchoolForm" &&
      output.uniname != "" &&
      output.major != "" &&
      output.studyYears != ""
    ) {
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
    } else if (
      activeForm == "WorkForm" &&
      output.company != "" &&
      output.position != "" &&
      output.workYears != ""
    ) {
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
      <div className="flex">
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
      <div className="flex">
        <Icon clickHandler={() => handleExpDelete(exp.id)} icon="delete" />
        <Icon clickHandler={() => handleExpEdit(exp.id)} icon="edit" />
      </div>
    </div>
  ));
  return (
    <>
      <div
        id="menu"
        className={`flex md:flex-col flex-row  bg-slate-300 rounded m-4 items-center text-center transform-origin transform-origin transition-all h-20 w-20 
        menu ${menuIsOpen ? "show-menu" : ""}
        `}
      >
        <button onClick={handleMenuClick}>
          <span
            id="menuIcon"
            className={`material-symbols-outlined text-gray-800 text-5xl cursor-pointer m-4 menuIcon ${
              menuIsOpen ? "open" : ""
            }`}
          >
            {!menuIsOpen ? "menu" : "close"}
          </span>
        </button>

        <Icon
          clickHandler={() => handleFormToggle("BasicForm")}
          icon="Description"
          isActive={activeForm === "BasicForm"}
        ></Icon>
        <Icon
          clickHandler={() => handleFormToggle("SchoolForm")}
          icon="School"
          isActive={activeForm === "SchoolForm"}
        ></Icon>
        <Icon
          clickHandler={() => handleFormToggle("WorkForm")}
          icon="Work"
          isActive={activeForm === "WorkForm"}
        ></Icon>
      </div>
      <FormCol isFormActive={activeForm}>
        {activeForm === "BasicForm" && (
          <>
            <BasicForm onInputChange={handleInputChange} />
            <PictureInput setImage={setImage} />

            <button onClick={loadExampleData}>Load example data</button>
            {showDeleteOutput && (
              <Icon
                icon="delete"
                title="Delete example data"
                clickHandler={() => handleOutputDelete()}
              ></Icon>
            )}
          </>
        )}
        {activeForm === "SchoolForm" && (
          <>
            <SchoolForm
              onInputChange={handleInputChange}
              onClickHandler={handleFormAddClick}
              isEditing={isEditing}
              output={output}
            />
            <ExpContainer>{SchoolExpEditable}</ExpContainer>
          </>
        )}
        {activeForm === "WorkForm" && (
          <>
            <WorkForm
              onInputChange={handleInputChange}
              onClickHandler={handleFormAddClick}
              isEditing={isEditing}
              output={output}
            />
            <ExpContainer>{WorkExpEditable}</ExpContainer>
          </>
        )}
      </FormCol>

      <div className="CV flex flex-row m-2 h-big shadow-black shadow-lg text-white">
        <div className="left-bar bg-gray-800 flex-col min-w-[8rem]">
          <PictureImage image={image} />

          {schoolExp.length > 0 && (
            <p className="my-6 text-center tracking-widest border-b-2">
              EDUCATION
            </p>
          )}
          {SchoolExpViews}
          <div className="flex flex-col mt-10 text-xs">
            {output.phone && (
              <div className="flex flex-row bg-gray-700">
                <span className=" bg-yellow-400 w-10 h-4"></span>
                <p className="ml-2">Phone</p>
              </div>
            )}
            <div className="ml-12">{output.phone}</div>
            <br />

            {output.email && (
              <div className="flex flex-row bg-gray-700">
                <span className=" bg-yellow-400 w-10 h-4"></span>
                <p className="ml-2">Email</p>
              </div>
            )}
            <div className="ml-12">{output.email}</div>
          </div>
        </div>
        <div className="flex-col w-full">
          <div className="h-10"></div>
          <div className="bg-yellow-400  w-full h-28 text-black tracking-widest leading-3 max-h-32">
            <div className="bg-yellow-400 h-2"></div>
            <p className="ml-6 mt-4 text-3xl">
              <span className="font-bold">{output.name}</span> {output.lastname}
            </p>
            <br />
            <p className="ml-6 text-2xl">{output.desiredpos}</p>
          </div>
          {output.about && (
            <div className="text-black ml-6 text-sm tracking-widest font-semibold mt-4 border-black border-b-2">
              ABOUT ME
            </div>
          )}
          <div className="text-black ml-6 text-xs overflow-y-auto max-width-prose">
            {output.about}
          </div>
          <br />

          {workExp.length > 0 && (
            <div className="text-black ml-6 text-sm tracking-widest font-semibold border-black border-b-2">
              WORK EXPERIENCE
            </div>
          )}
          {WorkExpViews}
        </div>
      </div>
    </>
  );
}

export default Menu;
