import useFetch from "./useFetch";
import "./App.css";
import Bloglist from "./Bloglist";

const Homepage = () => {
  const {data: blogs,isLoading, isError} = useFetch('http://localhost:8000/blogs')


 
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
