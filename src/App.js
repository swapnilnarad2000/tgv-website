import './App.css';
import NavbarSection from './Components/NavbarSection'
import About from './Components/About'
import Gallery from './Components/Gallery'
import Location from './Components/Location'
import Review from './Components/Review'
import Footer from './Components/Footer'
import Services from './Components/Services'
import Testimony from './Components/Testimony'
import ImageCrousal from './Components/ImageCarousel'

function App() {

  return (
    <div className="App">
      <NavbarSection />
      <ImageCrousal />
      <About />
      <Services />
      <Testimony /> 
      <Gallery />
      <Location />
      <Review />
      <Footer />
    </div>
  );
}

export default App;
