import "./App.css";
import Homepage from "./Homepage";
import Navbar from "./Navbar";
function App() {
  const Title = "Welcome back to react Bro";

  return (
    <div className="Header">
      <Navbar />
      <div className="word-div">
        <h1>
          <Homepage />
        </h1>
      </div>
    </div>
  );
}

export default App;
