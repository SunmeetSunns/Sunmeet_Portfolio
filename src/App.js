import { useContext } from 'react';
import './App.css'
import Contact from './Components/Contact/Contact.jsx';
import Experiencs from './Components/Experience/Experiencs.jsx';
import Footer from './Components/Footer/Footer.jsx';
import Intro from './Components/Intro/Intro.jsx';
import Navbar from "./Components/Navbar";
import Portfolio from './Components/Portfolio/Portfolio.jsx';
import Services from './Components/Services/Services.jsx';
import Testimonials from './Components/Testmonials/Testimonials.jsx';
import Work from './Components/Works/Work.jsx';
import { themeContext } from './Context.js';

function App() {
  const theme=useContext(themeContext)
  const darkMode=theme.state.darkMode
  return (
    <div 
    className={`App ${darkMode ? 'dark-mode-swiper-main' : 'light-mode-swiper-main'}`}
    style={{background:darkMode?'black':'',color:darkMode?'white':''}}>
    <Navbar/>
    <Intro/>
    <Services/>
    <Experiencs/>
    <Work/>
    <Portfolio/>
    <Testimonials/>
    <Contact/>
    <Footer/>
    </div>
  );
}


export default App;
