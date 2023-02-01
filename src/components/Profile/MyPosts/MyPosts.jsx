import React from "react"; //паше і без цього
import cl from "./MyPosts.module.css";
import Post from "./Post/Post";
const MyPosts = () => {
  return (
    <div>
      <div>My posts</div>
      <div className={cl.posts}>
        <Post message="hi guys" likes="16" />
        <Post message="hi freinds" likes="25" />
        <Post />
        <Post />
        <Post />
      </div>
    </div>
  );
};
export default MyPosts;
