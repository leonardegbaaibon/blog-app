import React, { useState, useEffect } from "react";

import "./App.css";
import Bloglist from "./Bloglist";

const Homepage = () => {
  const [blogs, setBlog] = useState([
    {
      title: "My Frontend Project",
      body: "lorem ipsum...",
      author: "Leonard",
      id: 1,
    },
    {
      title: "My Jaystore",
      body: "lorem ipsum...",
      author: "John",
      id: 2,
    },
    {
      title: "My Backend Project",
      body: "lorem ipsum...",
      author: "Chris",
      id: 3,
    },
    {
      title: "My React project" ,
      body: "lorem ipsum...",
      author: "Leonard",
      id: 4,
    },
  ]);

  const handelDelete = (id) => {
      const newBlog = blogs.filter(blog => blog.id !== id);
      setBlog(newBlog);
  }
  useEffect(() => {
      console.log('use effect ran');
      console.log(blogs)
  })

  const title = "All blogs!";
  //   const [myName, setMyname] = useState("John");
  //   const [myAge, setMyage] = useState(20);

  const handleClick = () => {
    // setMyname("Leonard");
    // setMyage(18);
  };

  return (
    <div className="Home">
      <Bloglist blogs={blogs} title={title} handelDelete={handelDelete} />
      {/* <Bloglist blogs={blogs.filter((blog) => blog.author === "Leonard")} title= "Leonard's Blog!"/> */}
    </div>
  );
};

{
  /* My name is {myName} and I'm {myAge} years old. */
}
export default Homepage;
