import React from "react"; //паше і без цього
import MyPosts from "./MyPosts/MyPosts";
import cl from "./Profile.module.css";
import ProfileInfo from "./ProfileInfo/ProfileInfo";
const Profile = (props) => {
  return (
    <div>
      <div>
        <img
          alt="pic"
          src="https://static.vecteezy.com/system/resources/thumbnails/007/817/674/small_2x/cartoon-mountain-landscape-in-flat-style-design-element-for-poster-card-banner-flyer-illustration-free-vector.jpg"
        />
      </div>
      <ProfileInfo />
      <MyPosts
        posts={props.profilePage.posts}
        addPost={props.addPost}
        newPostText={props.profilePage.newPostText}
        updateNewPostText={props.updateNewPostText}
      />
    </div>
  );
};

export default Profile;
