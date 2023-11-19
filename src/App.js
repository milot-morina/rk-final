
import './App.css';
import About from './components/About/About.js';
import ContactForm from './components/ContactForm/ContactForm.js';
import Footer from './components/Footer/Footer.js';
import GrowWithUs from './components/Grow/GrowWithUs.js';
import Header from './components/Header/Header';
import Quote from './components/Quote/Quote.js';
import SkewedSplitview from './components/Slider/Slider.js';
import Timeline from './components/Timeline/Timeline.js';




function App() {
  return (

    <div>
      
      <Header/>
      <SkewedSplitview/>
      
      <About/>
      <GrowWithUs/>
      <Timeline/>
    
      <Quote/>
      
      <ContactForm/>
      <Footer/>
      
      

    </div>
   
  );
}

export default App;
