import "./App.css";
import Homepage from "./Homepage";
import Navbar from "./Navbar";
import {BrowserRouter as Router,Route, Switch} from 'react-router-dom';
import Create from "./create";

function App() {

  return (
    <Router>
    <div className="Header">
      <Navbar />
      <div className="word-div">
        <h1>
        <Switch>
          <Route exact path="/">
               <Homepage />
          </Route>
          <Route path="/create">
               <Create />
          </Route>
          
        </Switch>
        </h1>
      </div>
    </div>
    </Router>
  );
}

export default App;
