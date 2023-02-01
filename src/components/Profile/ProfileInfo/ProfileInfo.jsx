import React from "react"; //паше і без цього
import cl from "./ProfileInfo.module.css";
const ProfileInfo = () => {
  return (
    <div>
      <img
        className={cl.logoface}
        alt="logoface"
        src="https://t3.ftcdn.net/jpg/00/67/50/24/360_F_67502479_MkmdxlaWb9fj2Yfv3VAhQWCkDOaZL20X.jpg"
        width="115px"
      />
      ava + descr
    </div>
  );
};
export default ProfileInfo;
