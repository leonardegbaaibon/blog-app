const Bloglist = ({blogs, title}) => {
  return (
    <div>
        <h3>{title}</h3>
      {blogs.map((blog) => (
        <div className="blog-preview" key={blog.id}>
          {blog.title}
          <p>Written by {blog.author}</p>
        </div>
      ))}
    </div>
  );
};

export default Bloglist;
