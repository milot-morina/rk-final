
import './App.css';
import About from './components/About/About.js';
import ContactForm from './components/ContactForm/ContactForm.js';
import Footer from './components/Footer/Footer.js';
import Header from './components/Header/Header';
import Quote from './components/Quote/Quote.js';
import SkewedSplitview from './components/Slider/Slider.js';



function App() {
  return (

    <div>
      
      <Header/>
      <SkewedSplitview/>
      
      <About/>
      <Quote/>
      
      <ContactForm/>
      <Footer/>
      

    </div>
   
  );
}

export default App;
