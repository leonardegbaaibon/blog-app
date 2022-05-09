const Bloglist = ({blogs, title, handelDelete}) => {
  return (
    <div>
        <h3>{title}</h3>
      {blogs.map((blog) => (
        <div className="blog-preview" key={blog.id}>
          {blog.title}
          <p>Written by {blog.author}</p>
          <button onClick={() => handelDelete(blog.id)} >Delete</button>
        </div>
      ))}
    </div>
  );
};

export default Bloglist;
