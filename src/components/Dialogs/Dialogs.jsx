import React from "react";
import { NavLink } from "react-router-dom";
import DialogItem from "./DialogItem/DialogItem";
import cl from "./Dialogs.module.css";
import Message from "./Message/Message";
let love = "<3";

const Dialogs = () => {
  return (
    <div className={cl.dialogs}>
      <div className={cl.dialogs_items}>
        <DialogItem name="Mamba" id="1" />
        <DialogItem name="Jessy" id="2" />
        <DialogItem name="Ally" id="3" />
        <DialogItem name="Delpan" id="4" />
        <DialogItem name="Jane" id="5" />
      </div>
      <div className={cl.messages}>
        <Message message="Hi!" />
        <Message message="How are you?" />
        <Message message="Are you here?" />
        <Message message="hahahahahah" />
        <Message message={love} />
      </div>
    </div>
  );
};
export default Dialogs;
