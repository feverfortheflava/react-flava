import React from "react"; //паше і без цього
import cl from "./MyPosts.module.css";
import Post from "./Post/Post";
const MyPosts = () => {
  let posts = [
    { id: 1, message: "hi guys", likes: 19 },
    { id: 2, message: "hi friends", likes: 22 },
    { id: 3, message: "<3", likes: 32 },
    { id: 4, message: "hahahahahah", likes: 5 },
    { id: 5, message: "lol", likes: 5 },
  ];
  let postsElements = posts.map((p) => (
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
