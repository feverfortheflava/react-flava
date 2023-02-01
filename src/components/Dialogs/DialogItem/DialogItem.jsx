import React from "react";
import { NavLink } from "react-router-dom";
import cl from "./DialogItem.module.css";

const DialogItem = (props) => {
  return (
    <div className={cl.dialog}>
      <NavLink to={"/dialogs/" + props.id}> {props.name} </NavLink>
    </div>
  );
};
export default DialogItem;
