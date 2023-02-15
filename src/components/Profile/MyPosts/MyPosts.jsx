import React from "react"; //паше і без цього
import cl from "./MyPosts.module.css";
import Post from "./Post/Post";
const MyPosts = (props) => {
  let postsElements = props.posts.map((p) => (
    <Post message={p.message} likes={p.likes} />
  ));
  return (
    <div>
      <div>My posts</div>
      <div className={cl.posts}>{postsElements}</div>
    </div>
  );
};
export default MyPosts;
