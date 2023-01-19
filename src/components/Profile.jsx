import React from "react"; //паше і без цього

const Profile = () => {
  return (
    <div className="content">
      <div>
        <img
          alt="pic"
          src="https://static.vecteezy.com/system/resources/thumbnails/007/817/674/small_2x/cartoon-mountain-landscape-in-flat-style-design-element-for-poster-card-banner-flyer-illustration-free-vector.jpg"
        />
      </div>
      <div>
        <img
          alt="logoface"
          src="https://t3.ftcdn.net/jpg/00/67/50/24/360_F_67502479_MkmdxlaWb9fj2Yfv3VAhQWCkDOaZL20X.jpg"
          width="115px"
        />
        ava + descr
      </div>

      <div>My posts</div>

      <div>New post</div>
      <div>
        <div>post 1</div>
        <div>post 2</div>
      </div>
    </div>
  );
};

export default Profile;
