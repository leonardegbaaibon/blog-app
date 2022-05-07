import React, { useState } from "react";

import "./App.css";

const Homepage = () => {
  const [blogs, setBlog] = useState([
    {
      title: "My Frontend Project",
      body: "lorem ipsum...",
      author: "Leonard",
      id: 1,
    },
    { title: "My Jaystore", body: "lorem ipsum...", author: "John", id: 2 },
    {
      title: "My Backend Project",
      body: "lorem ipsum...",
      author: "Chris",
      id: 3,
    },
  ]);
  //   const [myName, setMyname] = useState("John");
  //   const [myAge, setMyage] = useState(20);

  const handleClick = () => {
    
    // setMyname("Leonard");
    // setMyage(18);
  };

  return (
    <div className="Home">
      {blogs.map((blog) => (
        <div className="blog-preview" key={blog.id}>
          {blog.title}
          <p>Written by {blog.author}</p>
        </div>
      ))}

    </div>
  );
};

{
  /* My name is {myName} and I'm {myAge} years old. */
}
export default Homepage;
