import Navbar from "./Components/Navbar/Navbar.jsx";
import Header from "./Components/Header/Header.jsx";
import Title from "./Components/Title/Title.jsx";
import Programs from "./Components/Programs/Programs.jsx";
import About from "./Components/About/About.jsx";
import Campus from "./Components/Campus/Campus.jsx";
import Testimony from "./Components/Testimonials/Testimony.jsx";
import Contact from "./Components/Contacts/Contact.jsx";
import Footer from "./Components/Footer/Footer.jsx";
import Video from "./Components/Video/Video.jsx";
import { useState } from "react";
function App() {
  const [playState, setPlay] = useState(false);
  return(
    <>
    <Navbar/>
    <Header/>
    <div className="container">
    <Title subtitle='Our Program' title='What We Offer'/>
    <Programs/>
    <About setPlay={setPlay}/>
    <Title subtitle='Gallery' title='Campus Photos'/>
    <Campus/>
    <Title subtitle='TESTIMONIALS' title='What Students Say'/>
    <Testimony/>
    <Title subtitle='Contact us' title='Get In Touch'/>
    <Contact/>
    <Footer/>
    </div>
    <Video setPlay={setPlay} play={playState}/>
  
    </>


  );
  
}

export default App
