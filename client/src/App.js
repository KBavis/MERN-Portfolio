import "./App.css";
import "bootstrap/dist/css/bootstrap.css";
import Navbar from "../src/components/Navbar";
import Home from "../src/components/Home";
import About from "../src/components/About";
import Projects from "../src/components/Projects";
import Contact from "../src/components/Contact";
import Footer from "../src/components/Footer";

function App() {
  return (
    <div className="App">
      <Navbar></Navbar>
      <Home></Home>
      <About></About>
      <Projects></Projects>
      <Contact></Contact>
      <Footer></Footer>
    </div>
  );
}

export default App;
