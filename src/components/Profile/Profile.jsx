import React from "react"; //паше і без цього
import MyPosts from "./MyPosts/MyPosts";
import cl from "./Profile.module.css";
const Profile = () => {
  return (
    <div className={cl.content}>
      <div>
        <img
          alt="pic"
          src="https://static.vecteezy.com/system/resources/thumbnails/007/817/674/small_2x/cartoon-mountain-landscape-in-flat-style-design-element-for-poster-card-banner-flyer-illustration-free-vector.jpg"
        />
      </div>
      <div>
        <img
          className={cl.logoface}
          alt="logoface"
          src="https://t3.ftcdn.net/jpg/00/67/50/24/360_F_67502479_MkmdxlaWb9fj2Yfv3VAhQWCkDOaZL20X.jpg"
          width="115px"
        />
        ava + descr
      </div>
      <MyPosts />
    </div>
  );
};

export default Profile;
