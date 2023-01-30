import React from "react"; //паше і без цього
import { NavLink } from "react-router-dom";
import cl from "./Navbar.module.css";
const Navbar = () => {
  return (
    <nav className={cl.nav}>
      <div className={cl.item}>
        <NavLink
          to="/profile"
          className={({ isActive }) => (isActive ? cl.active : cl.item)}
        >
          Profile
        </NavLink>
      </div>
      <div className={cl.item}>
        <NavLink
          to="/dialogs"
          className={({ isActive }) => (isActive ? cl.active : cl.item)}
        >
          Messages
        </NavLink>
      </div>
      <div className={cl.item}>
        <a>News</a>
      </div>
      <div className={cl.item}>
        <a>Music</a>
      </div>
      <div className={cl.item}>
        <a>Settings</a>
      </div>
    </nav>
  );
};

export default Navbar;
// якщо кудась треба засунути не 1 а 2 класи наприклад то
// по дефу було: <div className="class1 class2">
// ріакт: <div className= {`${cl.class1} ${cl.class2}`}>
// пробіл не забудь між ними кароче якось так)
