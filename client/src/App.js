// styles
import "./styles/App.css";
import "./styles/About.css";
import "./styles/Contact.css";
import "./styles/Footer.css";
import "./styles/TopNavbar.css";
import "./styles/Home.css";
import "./styles/MySidebar.css";
import "./styles/Projects.css";
import "bootstrap/dist/css/bootstrap.css";
// components
import MyNavbar from "../src/components/MyNavbar";
import Home from "../src/components/Home";
import About from "../src/components/About";
import Projects from "../src/components/Projects";
import Contact from "../src/components/Contact";
import Footer from "../src/components/Footer";

function App() {
  return (
    <div className="App">
      <MyNavbar></MyNavbar>
      <Home></Home>
      <About></About>
      <Projects></Projects>
      <Contact></Contact>
      <Footer></Footer>
    </div>
  );
}

export default App;
