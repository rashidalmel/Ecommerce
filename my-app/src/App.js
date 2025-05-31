import './App.css';
import HeroSection from './components/HeroSection';
import Header from './components/Header';
import CategorySection from './components/CategorySection';
import DealSection from './components/DealSection';

function App() {
  return (
    <div className="App">
      <Header />
      <HeroSection />
      <CategorySection />
      <DealSection />
    </div>
  );
}

export default App;
