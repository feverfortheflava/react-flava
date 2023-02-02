import React from "react"; //паше і без цього
import cl from "./MyPosts.module.css";
import Post from "./Post/Post";
const MyPosts = () => {
  let postData = [
    { id: 1, message: "hi guys", likes: 19 },
    { id: 2, message: "hi friends", likes: 22 },
    { id: 3, message: "<3", likes: 32 },
    { id: 4, message: "hahahahahah", likes: 5 },
    { id: 5, message: "", likes: 5 },
  ];
  return (
    <div>
      <div>My posts</div>
      <div className={cl.posts}>
        <Post message={postData[0].message} likes={postData[0].likes} />
        <Post message={postData[1].message} likes={postData[1].likes} />
        <Post />
        <Post />
        <Post />
      </div>
    </div>
  );
};
export default MyPosts;
