import './App.css';
import MyCarousel from './components/Carousel';
import Navbar from './components/Navbar';
import WhyGive from './components/WhyGive';
import StatsSection from './components/StatsSection';

function App() {
  return (
    <div className="App">
      <header>
        <Navbar />
        <MyCarousel />
        <WhyGive />
        <hr className=' border-[1.5px] mx-12 my-24'/>
        <StatsSection />
      </header>
    </div>
  );
}

export default App;
