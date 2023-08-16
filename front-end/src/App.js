import logo from './logo.svg';
import './App.css';
import Header from './components/headers/Header';
import Hero from './components/Hero/Hero';
import Slider from './components/Slider/Slider';
import Virtual from './components/Virtual/Virtual';
import Products from './components/Products/Products';
import Testimonials from './components/Testimonial/Testimonials';
import Footer from './components/Footer/Footer';

function App() {
  return (
    <>
      <Header/>
      <Hero/>
      <Slider/>
      <Virtual/>
      <Products/>
      <Testimonials/>
      <Footer/>
    </>
  );
}

export default App;
