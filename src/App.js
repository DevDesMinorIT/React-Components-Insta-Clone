/* 
Start here and then work through the 
PostsContainer components and the CommentSection Components. 
Not all files need code added. 
Look at each file to see where you need to pass props or add code 
*/
import React, { useState } from "react";
import "./App.css";
import  PostPage from "./components/PostsContainer/PostsPage"
import SearchBar from "./components/SearchBar/SearchBarContainer"
import CommentSection from "./components/CommentSection/CommentSectionContainer"
// import the PostsPage and SearchBar and add them to the App


const App = () => {
    //set value to useState 
 const [stateValue, setStateValue ] = useState(); 

  return (
    <div className="App">
      {/* Add imported components here to render them */}
    <SearchBar />
    <PostPage />

    </div>
  );
};

export default App;
