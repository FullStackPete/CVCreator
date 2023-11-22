function FormCol({ children }) {
  return <div className="flex flex-col w-4/12">{children}</div>;
}

function Icon({ icon, clickHandler }) {
  let styledIcon;
  if (icon == "Description" || icon == "School" || icon=="Work") {
    styledIcon =
      "flex justify-center items-center icons material-symbols-outlined text-5xl cursor-pointer my-4 rounded text-gray-800";
  } else {
    styledIcon =
      "flex justify-center items-center material-symbols-outlined text-4xl cursor-pointer ml-2 text-gray-800";
  }

  return (
    <button onClick={clickHandler}>
      <span className={styledIcon}>{icon}</span>
    </button>
  );
}

function ExpContainer({ children }) {
  return <div className="bg-slate-300 w-fit rounded m-4 h-fit">{children}</div>;
}

export { FormCol, Icon, ExpContainer };
