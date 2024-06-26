import { useState, useEffect, ChangeEvent } from "react";
type PictureInputType = {
  setImage: React.Dispatch<React.SetStateAction<File | null>>;
};
export function PictureInput({ setImage }: PictureInputType) {
  const handlePicChange = (e: ChangeEvent<HTMLInputElement>) => {
    e.target.files && setImage!(e.target.files[0]);
  };
  return (
    <>
      <div className="text-md m-5 flex items-center justify-center">
        <label
          id="picturelabel"
          htmlFor="profilepic-input"
          className="text-center border-2 cursor-pointer rounded w-52 h-10 flex 
        items-center justify-center text-lg bg-yellow-300 border-yellow-300 hover:bg-yellow-200"
        >
          Upload your picture
        </label>
        <input
          onChange={(e: ChangeEvent<HTMLInputElement>) => handlePicChange(e)}
          type="file"
          name="profilepic-input"
          id="profilepic-input"
          accept="image/png, image/jpeg, image/jpg"
        />
      </div>
    </>
  );
}
type imagePropType = {
  image: Blob;
};
export function PictureImage({ image }: imagePropType) {
  const [view, setView] = useState<string[]>([]);

  useEffect(() => {
    if (image == null) {
      setView([]);
    }
    if (image) {
      const objectUrl = URL.createObjectURL(image);
      setView([objectUrl]);
    }

    // Warto również zwolnić zasoby po zamontowaniu komponentu.
    return () => {
      if (view.length) {
        URL.revokeObjectURL(view[0]);
      }
    };
  }, [image]);

  return (
    <>
      {view.map((pic, index) => (
        <img
          id="pictureImg"
          key={index}
          src={pic}
          alt={`Uploaded pic ${index}`}
          className="flex items-center justify-center m-2 w-[175px] h-[175px]"
        />
      ))}
    </>
  );
}
