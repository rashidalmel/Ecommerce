import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import HeroSection from './components/HeroSection';
import Header from './components/Header';
import CategorySection from './components/CategorySection';
import DealSection from './components/DealSection';
import CategoryBannerSection from './components/CategoryBannerSection';
import DealSection2 from './components/DealSection2';
import DealSection3 from './components/DealSection3';
import WhyUsSection from './components/WhyUsSection';
import Footer from './components/Footer';
import Registration from './components/Registration';
import Login from './components/Login';

function App() {
  return (
    <Router>
      <div className="App">
        <Header />        <Routes>
          <Route path="/register" element={<Registration />} />
          <Route path="/login" element={<Login />} />
          <Route path="/" element={
            <>
              <HeroSection />
              <CategorySection />      
              <DealSection />
              <CategoryBannerSection />
              <DealSection2 />
              <DealSection3 />
              <WhyUsSection />
            </>
          } />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
