import { MouseEventHandler } from "react";

export type AddButtonType = {
  onClickHandler: MouseEventHandler<HTMLButtonElement>;
};

export default function AddButton({ onClickHandler }: AddButtonType) {
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
