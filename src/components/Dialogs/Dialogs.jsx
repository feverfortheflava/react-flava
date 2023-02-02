import React from "react";
import { NavLink } from "react-router-dom";
import DialogItem from "./DialogItem/DialogItem";
import cl from "./Dialogs.module.css";
import Message from "./Message/Message";
let love = "<3";

const Dialogs = () => {
  let dialogsData = [
    { id: 1, name: "Mamba" },
    { id: 2, name: "Jessy" },
    { id: 3, name: "Ally" },
    { id: 4, name: "Delpan" },
    { id: 5, name: "Jane" },
  ];
  let messagesData = [
    { id: 1, message: "Hi!" },
    { id: 2, message: "How are you?" },
    { id: 3, message: "Are you here?" },
    { id: 4, message: "hahahahahah" },
    { id: 5, message: love },
  ];
  return (
    <div className={cl.dialogs}>
      <div className={cl.dialogs_items}>
        <DialogItem name={dialogsData[0].name} id={dialogsData[0].id} />
        <DialogItem name={dialogsData[1].name} id={dialogsData[1].id} />
        <DialogItem name={dialogsData[2].name} id={dialogsData[2].id} />
        <DialogItem name={dialogsData[3].name} id={dialogsData[3].id} />
        <DialogItem name={dialogsData[4].name} id={dialogsData[4].id} />
      </div>
      <div className={cl.messages}>
        <Message message={messagesData[0].message} />
        <Message message={messagesData[1].message} />
        <Message message={messagesData[2].message} />
        <Message message={messagesData[3].message} />
        <Message message={messagesData[4].message} />
      </div>
    </div>
  );
};
export default Dialogs;
