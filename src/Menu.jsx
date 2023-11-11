import { useState } from "react";

function Icon({ icon }) {
  const styledIcon =
    "icons material-symbols-outlined text-5xl cursor-pointer my-4 rounded";

  return (
    <button>
      <span className={styledIcon}>{icon}</span>
    </button>
  );
}

function Menu() {
  const [menuIsOpen, setMenuIsOpen] = useState(false);
  const handleMenuClick = () => {
    setMenuIsOpen(!menuIsOpen);
  };
  return (
    <>
      <div
        id="menu"
        className={`bg-slate-300 rounded text-5xl m-4 w-20 items-center justify-center text-center transform-origin transition-all
        menu ${menuIsOpen ? "show-menu" : ""}
        `}
      >
        <button onClick={handleMenuClick}>
          <span
            id="menuIcon"
            className={`material-symbols-outlined text-5xl cursor-pointer my-4 menuIcon ${
              menuIsOpen ? "open" : ""
            }`}
          >
            {!menuIsOpen ? "menu" : "close"}
          </span>
        </button>

        <Icon icon="Description"></Icon>
        <Icon icon="School"></Icon>
        <Icon icon="Work"></Icon>
      </div>
    </>
  );
}

export default Menu;
