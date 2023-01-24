import React from "react"; //паше і без цього
import cl from "./Header.module.css";
const Header = () => {
  return (
    <header className={cl.header}>
      <img
        alt="logo"
        src="https://t3.ftcdn.net/jpg/04/51/60/90/360_F_451609096_PratSuItHI19P1jqkn2MdK2dEyFr2EH1.jpg"
      />
    </header>
  );
};

export default Header;
