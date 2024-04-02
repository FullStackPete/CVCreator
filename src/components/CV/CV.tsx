import { PictureImage } from "../Forms/ProfilePicture";

function CV({
  schoolExp,
  image,
  SchoolExpViews,
  output,
  workExp,
  WorkExpViews,
  reference,
}) {
  return (
    <div
      ref={reference}
      className="CV flex flex-row shadow-black shadow-lg text-white min-w-[640px] max-w-[640px] min-h-[900px] max-h-[900px];"
    >
      <div className="left-bar bg-gray-800 flex-col max-w-[30%] min-w-[30%]">
        <PictureImage image={image} />

        {schoolExp.length > 0 && (
          <p className="my-6 text-center tracking-widest border-b-2">
            EDUCATION
          </p>
        )}
        {SchoolExpViews}
        <div className="flex flex-col mt-10 text-xs ">
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
      <div className="right-bar flex-col max-w-[70%] min-w-[70%]">
        <div className="h-10"></div>
        <div className="bg-yellow-400 w-full h-28 text-black tracking-widest leading-3 max-h-32">
          <div className="bg-yellow-400 h-2"></div>
          <p className="ml-6 mt-4 text-3xl">
            <span className="font-bold">{output.name}</span> {output.lastname}
          </p>
          <br />
          <p className="ml-6 text-2xl ">{output.desiredpos}</p>
        </div>
        {output.about && (
          <div className="text-black ml-6 text-sm  tracking-widest font-semibold mt-4 border-black border-b-2">
            ABOUT ME
          </div>
        )}
        <div className="text-black ml-6 text-xs overflow-y-auto">
          {output.about}
        </div>
        <br />

        {workExp.length > 0 && (
          <div className="text-black ml-6  text-sm tracking-widest font-semibold border-black border-b-2">
            WORK EXPERIENCE
          </div>
        )}
        {WorkExpViews}
      </div>
    </div>
  );
}

export default CV;
