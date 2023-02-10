import React from "react";
import { NavLink } from "react-router-dom";
import DialogItem from "./DialogItem/DialogItem";
import cl from "./Dialogs.module.css";
import Message from "./Message/Message";
let love = "<3";

const Dialogs = () => {
  let dialogs = [
    { id: 1, name: "Mamba" },
    { id: 2, name: "Jessy" },
    { id: 3, name: "Ally" },
    { id: 4, name: "Delpan" },
    { id: 5, name: "Jane" },
  ];
  let messages = [
    { id: 1, message: "Hi!" },
    { id: 2, message: "How are you?" },
    { id: 3, message: "Are you here?" },
    { id: 4, message: "hahahahahah" },
    { id: 5, message: love },
  ];
  let dialogsElements = dialogs.map((d) => (
    <DialogItem name={d.name} id={d.id} />
  ));
  let messagesElements = messages.map((m) => <Message message={m.message} />);
  return (
    <div className={cl.dialogs}>
      <div className={cl.dialogs_items}>{dialogsElements}</div>
      <div className={cl.messages}>{messagesElements}</div>
    </div>
  );
};
export default Dialogs;
