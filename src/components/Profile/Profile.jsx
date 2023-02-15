import React from "react"; //паше і без цього
import MyPosts from "./MyPosts/MyPosts";
import cl from "./Profile.module.css";
import ProfileInfo from "./ProfileInfo/ProfileInfo";
const Profile = () => {
  let posts = [
    { id: 1, message: "hi guys", likes: 19 },
    { id: 2, message: "hi friends", likes: 22 },
    { id: 3, message: "<3", likes: 32 },
    { id: 4, message: "hahahahahah", likes: 5 },
    { id: 5, message: "lol", likes: 5 },
  ];
  return (
    <div>
      <div>
        <img
          alt="pic"
          src="https://static.vecteezy.com/system/resources/thumbnails/007/817/674/small_2x/cartoon-mountain-landscape-in-flat-style-design-element-for-poster-card-banner-flyer-illustration-free-vector.jpg"
        />
      </div>
      <ProfileInfo />
      <MyPosts posts={posts} />
    </div>
  );
};

export default Profile;
