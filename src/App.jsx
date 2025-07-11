import Navbar from './components/Navbar';
import SubNavbar from './components/SubNavbar';
import HomeSection from './components/HomeSection';
import TrendzShowcase from './components/TrendsShowcase';
import CategoryShowcase from './components/CategoryShowcase';
import BrandShowcase from './components/BrandShowcase';
import GoldShowCase from './components/GoldShowCase';
import ProductGrid from './components/ProductGrid';

export default function App() {
  return (
    <> 
      <Navbar />
      <SubNavbar />
      <HomeSection />
      <TrendzShowcase />
      <CategoryShowcase />
      <BrandShowcase />
      <GoldShowCase />
      <ProductGrid />
    </>
  );
}
