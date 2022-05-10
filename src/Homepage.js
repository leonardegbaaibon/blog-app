import React, { useState, useEffect } from "react";

import "./App.css";
import Bloglist from "./Bloglist";

const Homepage = () => {
  const [blogs, setBlog] = useState(null);
  const [isLoading, setisLoading] = useState(true)
  const [isError, setisError] = useState(null)

  useEffect(() => {
        setTimeout(() => {
            fetch('http://localhost:8000/blogs')
            .then(res => {
                console.log(res)
                if(!res.ok){
                   throw Error('Could not find the source boss');
                }
                return res.json()
            })
            .then(data => {
                setBlog(data);
                setisLoading(false);
                setisError(null)
            })
            .catch(err => {
                // console.log(err.message)
                setisLoading(false);
                setisError(err.message)
            })
        }, 1000);
    //   console.log('use effect ran');
  },[])

  const title = "All blogs!";
  //   const [myName, setMyname] = useState("John");
  //   const [myAge, setMyage] = useState(20);


  return (
    <div className="Home">
     {isError && <div>{isError}</div>}
     {isLoading && <div>Loading</div>}
     {blogs && <Bloglist blogs={blogs} title={title} />}
      {/* <Bloglist blogs={blogs.filter((blog) => blog.author === "Leonard")} title= "Leonard's Blog!"/> */}
    </div>
  );
};

{
  /* My name is {myName} and I'm {myAge} years old. */
}
export default Homepage;
