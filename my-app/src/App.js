import './App.css';
import HeroSection from './components/HeroSection';
import Header from './components/Header';
import CategorySection from './components/CategorySection';
import DealSection from './components/DealSection';
import CategoryBannerSection from './components/CategoryBannerSection';

function App() {
  return (
    <div className="App">
      <Header />
      <HeroSection />
      <CategorySection />
      <DealSection />
      <CategoryBannerSection />

    </div>
  );
}

export default App;
