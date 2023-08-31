import './App.css';
import Navbar from './Components/Navbar/navbar.js';
import Footer from './Components/Footer/footer';
import Banner from './Components/Banner/banner';
import Swiper from './Components/ProductSwiper/swiper.js';
function App() {
  return (
    <div className="App">
      <Navbar />
      <Banner/>
      <Swiper/>
      <Footer/>
    </div>
  );
}

export default App;
