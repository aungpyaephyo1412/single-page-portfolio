import {BrowserRouter} from "react-router-dom";
import Navbar from "./components/Navbar.jsx";
import Hero from "./components/Hero.jsx";
import About from "./components/About.jsx";
import Projects from "./components/Projects.jsx";
import Footer from "./components/Footer.jsx";
import Services from "./components/Services.jsx";
import Contact from "./components/Contact.jsx";

const App = () => {
   return (
       <BrowserRouter>
           <Navbar/>
           <Hero/>
           <About/>
           <Projects/>
           <Services/>
           <Contact/>
           <Footer/>
       </BrowserRouter>
   )
}
export default App