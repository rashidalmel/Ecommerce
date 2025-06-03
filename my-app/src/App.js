import './App.css';
import HeroSection from './components/HeroSection';
import Header from './components/Header';
import CategorySection from './components/CategorySection';
import DealSection from './components/DealSection';
import CategoryBannerSection from './components/CategoryBannerSection';
import DealSection2 from './components/DealSection2';
import DealSection3 from './components/DealSection3';
import WhyUsSection from './components/WhyUsSection';
import Footer from './components/Footer';

function App() {
  return (
    <div className="App">
      <Header />
      <HeroSection />
      <CategorySection />      
      <DealSection />
      <CategoryBannerSection />
      <DealSection2 />
      <DealSection3 />
      <WhyUsSection />
      <Footer />
    </div>
  );
}

export default App;
