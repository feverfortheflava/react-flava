import React from "react"; //паше і без цього
import cl from "./Post.module.css";
const Post = (props) => {
  return (
    <div>
      <div className={cl.item}>
        <img src="https://mir-s3-cdn-cf.behance.net/project_modules/disp/ea7a3c32163929.567197ac70bda.png" />
        {props.message}
      </div>
      <div id={cl.likes}>{props.likes}</div>
    </div>
  );
};

export default Post;
