type IconProps = {
  icon: string;
  clickHandler: () => void;
  isActive: boolean;
  title: string;
};
export default function Icon({
  icon,
  clickHandler,
  isActive,
  title,
}: IconProps) {
  let styledIcon;
  if (icon == "Description" || icon == "School" || icon == "Work") {
    styledIcon =
      "form-icon flex justify-center items-center icons material-symbols-outlined text-5xl cursor-pointer m-4 rounded text-gray-800";
  } else if (icon == "delete") {
    styledIcon =
      "flex justify-center items-center material-symbols-outlined text-4xl cursor-pointer m-4 text-red-700";
  } else {
    styledIcon =
      "flex justify-center items-center material-symbols-outlined text-4xl cursor-pointer ml-2 text-gray-800";
  }
  return (
    <button onClick={clickHandler}>
      <span title={title} className={`${styledIcon} ${isActive ? "open" : ""}`}>
        {icon}
      </span>
    </button>
  );
}
