import React from "react";
import cl from "./Dialogs.module.css";
let love = "<3";
const Dialogs = () => {
  return (
    <div className={cl.dialogs}>
      <div className={cl.dialogs_items}>
        <div className={cl.dialog}>Mamba</div>
        <div className={cl.dialog}>Jessy</div>
        <div className={cl.dialog}>Ally</div>
        <div className={cl.dialog}>Delpan</div>
        <div className={cl.dialog}>Jane</div>
      </div>
      <div className={cl.messages}>
        <div className={cl.message}>Hi!</div>
        <div className={cl.message}>How are you?</div>
        <div className={cl.message}>Are you here?</div>
        <div className={cl.message}>hahahhaa</div>
        <div className={cl.message}>{love}</div>
      </div>
    </div>
  );
};
export default Dialogs;
