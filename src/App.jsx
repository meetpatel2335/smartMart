import Navbar from './components/Navbar';
import SubNavbar from './components/SubNavbar';
import HomeSection from './components/HomeSection';
import TrendzShowcase from './components/TrendsShowcase';
import CategoryShowcase from './components/CategoryShowcase';
import BrandShowcase from './components/BrandShowcase';
import GoldShowCase from './components/GoldShowCase';
import ProductGrid from './components/ProductGrid';
import Footer from './components/Footer';
import InvestorRelations from './components/InvestorRelations';
import { Routes, Route } from 'react-router-dom';

export default function App() {
  return (
    <Routes>
      <Route path="/investor-relations" element={<InvestorRelations />} />
      <Route path="*" element={
        <>
          <Navbar />
          <SubNavbar />
          <HomeSection />
          <TrendzShowcase />
          <CategoryShowcase />
          <BrandShowcase />
          <GoldShowCase />
          <ProductGrid />
          <Footer />
        </>
      } />
    </Routes>
  );
}
