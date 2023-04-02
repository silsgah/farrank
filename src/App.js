import "./App.css";
// importing components from react-router-dom package
import {
  BrowserRouter as Router,
  Route,
  Routes,
  Redirect,
} from "react-router-dom";
//import { BrowserRouter as Router, Switch, Route, Redirect} from "react-router-dom";

// import Home component
import Home from "./components/Home";
// import About component
import AboutUs from "./components/AboutUs";
// import ContactUs component
import Contact from "./components/Contact";
// import Sermon component
import Sermons from "./components/Sermons";

function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route exact path="/Home" element={<Home />} />
          <Route exact path="/AboutUs" element={<AboutUs />} />
          <Route exact path="/Sermons" element={<Sermons />} />
          <Route exact path="/Contact" element={<Contact />} />
          <Route path="*" element={<Home />} />
        </Routes>
      </Router>
      {/* This is the alias of BrowserRouter i.e. Router */}
    </>
  );
}

export default App;
