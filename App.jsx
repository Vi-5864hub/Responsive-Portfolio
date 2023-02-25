import Navbar from "./components/Navbar";
import Projects from "./components/Projects";
import Services from "./components/Services";
import Home from "./components/Home";
import Blog from "./components/Blog";
import Testimonials from "./components/Testimonials";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
function App() {

  return (
    <div className="font-Poppins bg-ghostWhite">
  <Navbar/>
    <Home/> 
    <Projects/>
    <Services/>
    <Blog/>
    <Testimonials/>
<Contact/>
<Footer/>
    </div>
  )
}

export default App;
