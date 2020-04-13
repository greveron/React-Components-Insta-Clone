//Complete the necessary code in this file
// import useState
import React, { useState } from "react";
import Post from "./Post";
import "./Posts.css";
// import data 
//import { dummy} from "./dummy"
import dummyData from "../../dummy-data";


const PostsPage = () => {

  // set up state for your data

   const [data, setData] = useState(dummyData)

  return (

    <div className="posts-container-wrapper">
      {/* <dummyData dummyData={dummyData} /> */}

      {/* map through data here to return a Post and pass data as props to Post */}

      {dummyData.map((post) => {
        return <Post post={post} />
      })}
    </div>
  );

};

export default PostsPage;

