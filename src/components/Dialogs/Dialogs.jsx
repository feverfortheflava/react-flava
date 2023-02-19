import React from "react";
import { NavLink } from "react-router-dom";
import DialogItem from "./DialogItem/DialogItem";
import cl from "./Dialogs.module.css";
import Message from "./Message/Message";
let love = "<3";

const Dialogs = (props) => {
  let dialogsElements = props.state.dialogs.map((d) => (
    <DialogItem name={d.name} id={d.id} />
  ));
  let messagesElements = props.state.messages.map((m) => (
    <Message message={m.message} />
  ));
  return (
    <div className={cl.dialogs}>
      <div className={cl.dialogs_items}>{dialogsElements}</div>
      <div className={cl.messages}>{messagesElements}</div>
    </div>
  );
};
export default Dialogs;
