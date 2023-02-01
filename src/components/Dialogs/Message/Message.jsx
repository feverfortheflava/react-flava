import React from "react";
import { NavLink } from "react-router-dom";
import cl from "./Message.module.css";

const Message = (props) => {
  return <div className={cl.message}>{props.message}</div>;
};
export default Message;
