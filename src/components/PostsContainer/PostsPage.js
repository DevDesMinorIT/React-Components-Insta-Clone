//Complete the necessary code in this file
// import useState
import React , { useState } from "react";
import Post from "./Post";
import data from "../../dummy-data"
import "./Posts.css";
// import data 

const PostsPage = () => {
  // set up state for your data
  return (
    <div className="posts-container-wrapper">
      {/* map through data here to return a Post and pass data as props to Post */}
      {data.map(postData => <Post  post={postData}/>)}
    </div>
  );
};

export default PostsPage;

