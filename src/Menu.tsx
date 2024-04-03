import { useRef, useState } from "react";
import ExpContainer from "./components/ExpContainer";
import BasicForm from "./components/Forms/BasicForm";
import FormCol from "./components/Forms/FormCol";
import SchoolForm from "./components/Forms/SchoolForm";
import WorkForm from "./components/Forms/WorkForm";
import Icon from "./components/Icon";
import UtilitiesForm from "./components/Forms/UtilitiesForm";
import CV from "./components/CV/CV";
import { useReactToPrint } from "react-to-print";
import { exampleData } from "./constants";
import { formType, schoolExpType, setImageType, workExpType } from "./types";

let SchoolExpId: number = 0;
let WorkExpId: number = 0;

function Menu() {
  const [isEditing, setIsEditing] = useState(false);
  const [btnState, setBtnState] = useState(0);
  const [image, setImage] = useState<File | null>(null);
  const [schoolExp, setSchoolExp] = useState<schoolExpType[]>([]);
  const [workExp, setWorkExp] = useState<workExpType[]>([]);
  const [showDeleteOutput, setShowDeleteOutput] = useState(false);
  const CVComponent = useRef(null);
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
  const [activeForm, setActiveForm] = useState<formType>(null);

  const handleOutputDelete = () => {
    setOutput({
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
      email: "",
      phone: "",
    });
    setWorkExp([]);
    setSchoolExp([]);
    setShowDeleteOutput(false);
    console.log(image);
  };

  const loadExampleData = () => {
    setShowDeleteOutput(true);
    setOutput(exampleData);
    SchoolExpId++;
    setSchoolExp((prevSchoolExp) => [
      ...prevSchoolExp,
      {
        id: SchoolExpId,
        uniname: "University of Opole",
        major: "Information Technology",
        studyYears: "2022-current",
      },
    ]);
    WorkExpId++;
    setWorkExp((prevWorkExp) => [
      ...prevWorkExp,
      {
        id: WorkExpId,
        company: "Example company",
        position: "Full-stack web developer",
        workYears: "2023-current",
      },
    ]);
  };

  const handleExpEdit = (id: number) => {
    if (activeForm === "SchoolForm") {
      setIsEditing(true);
      const editedSchoolExp = schoolExp.find((exp) => exp.id === id);
      if (editedSchoolExp) {
        setOutput((prevOutput) => ({
          ...prevOutput,
          studyYears: editedSchoolExp.studyYears,
          uniname: editedSchoolExp.uniname,
          major: editedSchoolExp.major,
        }));
      }
      const updatedSchoolExp = schoolExp.filter((exp) => exp.id !== id);
      setSchoolExp(updatedSchoolExp);
      setBtnState((prevBtnState) => prevBtnState + 1);
    } else if (activeForm === "WorkForm") {
      setIsEditing(true); // only
      const editedWorkExp = workExp.find((exp) => exp.id === id);

      if (editedWorkExp) {
        setOutput((prevOutput) => ({
          ...prevOutput,
          workYears: editedWorkExp.workYears,
          company: editedWorkExp.company,
          position: editedWorkExp.position,
        }));
      }

      const updatedWorkExp = workExp.filter((exp) => exp.id !== id);
      setWorkExp(updatedWorkExp);
      setBtnState((prevBtnState) => prevBtnState + 1);
    }
  };

  const handleExpDelete = (id: number) => {
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
      SchoolExpId++;
      setSchoolExp((prevSchoolExp) => [
        ...prevSchoolExp,
        {
          id: SchoolExpId,
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
      WorkExpId++;
      setWorkExp((prevWorkExp) => [
        ...prevWorkExp,
        {
          id: WorkExpId,
          company: output.company,
          position: output.position,
          workYears: output.workYears,
        },
      ]);
      setBtnState((prevBtnState) => prevBtnState + 1);
    }
  };

  const handleInputChange = (value: string, name: string) => {
    setOutput((prevOutput) => ({
      ...prevOutput,
      [name]: value,
    }));
  };

  const handleMenuClick = () => {
    setMenuIsOpen(!menuIsOpen);
  };

  const handleFormToggle = (form: formType) => {
    setActiveForm((prevForm) => (prevForm === form ? null : form));
  };
  const handlePrint = useReactToPrint({
    content: () => CVComponent.current || null,
  });

  const WorkExpViews = workExp.map((exp) => (
    <div
      key={exp.id}
      className="flex flex-row text-black ml-6 text-xs max-h-48"
    >
      <div className="font-bold">{exp.workYears}</div>
      <div className="flex flex-col ml-2">
        <div className="font-bold">{exp.company}</div>
        <div>{exp.position}</div>
      </div>
    </div>
  ));
  const SchoolExpViews = schoolExp.map((exp) => (
    <div key={exp.id} className="flex flex-row text-white m-2  text-xs">
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
        <Icon
          clickHandler={() => handleExpDelete(exp.id)}
          icon="delete"
          isActive={false}
          title={""}
        />
        <Icon
          clickHandler={() => handleExpEdit(exp.id)}
          icon="edit"
          isActive={false}
          title={""}
        />
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
        <Icon
          clickHandler={() => handleExpDelete(exp.id)}
          icon="delete"
          isActive={false}
          title={""}
        />
        <Icon
          clickHandler={() => handleExpEdit(exp.id)}
          icon="edit"
          isActive={false}
          title={""}
        />
      </div>
    </div>
  ));
  return (
    <>
      <div
        id="menu"
        className={`flex lg:flex-col flex-row mb-4 lg:mr-2 bg-slate-300 rounded m-2 items-center text-center transform-origin transform-origin transition-all h-20 w-20 
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
          isActive={activeForm === "UtilitiesForm"}
          icon="Home"
          clickHandler={() => handleFormToggle("UtilitiesForm")}
          title={""}
        />
        <Icon
          clickHandler={() => handleFormToggle("BasicForm")}
          icon="Description"
          isActive={activeForm === "BasicForm"}
          title={""}
        />
        <Icon
          clickHandler={() => handleFormToggle("SchoolForm")}
          icon="School"
          isActive={activeForm === "SchoolForm"}
          title={""}
        />
        <Icon
          clickHandler={() => handleFormToggle("WorkForm")}
          icon="Work"
          isActive={activeForm === "WorkForm"}
          title={""}
        />
      </div>
      <FormCol isFormActive={activeForm}>
        {activeForm === "UtilitiesForm" && (
          <UtilitiesForm
            showDeleteOutput={showDeleteOutput}
            handleOutputDelete={handleOutputDelete}
            loadExampleData={loadExampleData}
            setImage={setImage}
            downloadCV={handlePrint}
          />
        )}
        {activeForm === "BasicForm" && (
          <>
            <BasicForm onInputChange={handleInputChange} />
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
      <CV
        reference={CVComponent}
        schoolExp={schoolExp}
        image={image}
        SchoolExpViews={SchoolExpViews}
        output={output}
        workExp={workExp}
        WorkExpViews={WorkExpViews}
      />
    </>
  );
}

export default Menu;
