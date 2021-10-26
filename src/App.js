import About from "./about/About";
import Blog from "./blog/Blog";
import Footer from "./footer/Footer";
import Home from "./home/Home";
import Project from "./project/Project";
import Service from "./service/Servive";

import "./App.css";

function App() {
  return (
    <div className="App">
      <Home />
      <Project />
      <Service />
      <About />
      <Blog />
      <Footer />
    </div>
  );
}

export default App;