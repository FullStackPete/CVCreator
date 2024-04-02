import Icon from "../Icon";
import Form from "./Form";
import { useReactToPrint } from "react-to-print";
import { PictureInput } from "./ProfilePicture";

function UtilitiesForm({
  showDeleteOutput,
  handleOutputDelete,
  loadExampleData,
  setImage,
  downloadCV,
}) {
  return (
    <Form>
      <PictureInput setImage={setImage} />

      <div
        onClick={loadExampleData}
        className="text-md m-5 flex items-center justify-center"
      >
        <label
          className="text-center text-white border-2 cursor-pointer rounded w-52 h-10 flex 
        items-center justify-center text-lg bg-blue-400 border-blue-400 hover:bg-blue-200"
        >
          Load exampleData
        </label>
      </div>
      {showDeleteOutput && (
        <>
          <div
            onClick={handleOutputDelete}
            className="text-md m-5 flex items-center justify-center"
          >
            <label
              id="picturelabel"
              htmlFor="profilepic-input"
              className="text-center border-2 cursor-pointer rounded w-52 h-10 flex 
        items-center justify-center text-lg bg-red-400 border-red-400 hover:bg-red-200"
            >
              Delete all data
            </label>
          </div>
        </>
      )}
      <div
        onClick={downloadCV}
        className="text-md m-5 flex items-center justify-center"
      >
        <label
          className="text-center text-white border-2 cursor-pointer rounded w-52 h-10 flex 
        items-center justify-center text-lg bg-green-400 border-green-400 hover:bg-green-200"
        >
          Download CV
        </label>
      </div>
    </Form>
  );
}

export default UtilitiesForm;
