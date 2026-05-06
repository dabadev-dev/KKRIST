import { BrowserRouter, Route, Routes } from "react-router-dom";
import SectionHero from "./components/section-Hero";
import HomePage from "./pages/home";
import BlogPage from "./pages/blog";
import SectionFooter from "./components/Section-Footer";
import AboutPage from "./pages/about";
import ShopPage from "./pages/shop";
import ContactPage from "./pages/contact";
import Login from "./pages/Login";
import Search from "./pages/Search";
import Heart from "./pages/Heart";
import Shopping from "./pages/Shopping";
import ProductPage from "./pages/product";
 
function App() {
  return (
    <BrowserRouter>
       {/* Header */}
        <SectionHero />
        {/* main */}
        <Routes>
          <Route path="/" element={<HomePage/>}/>
          <Route path="/blog" element={<BlogPage/>}/>
          <Route path="/about" element={<AboutPage/>}/>
          <Route path="/shop" element={<ShopPage/>}/>
          <Route path="/contact" element={<ContactPage/>}/>
          <Route path="/home" element={<HomePage/>}/>
          <Route path="/login" element={<Login/>}/>
          <Route path="/search" element={<Search/>}/>
          <Route path="/heart" element={<Heart/>}/>
          <Route path="/shopping" element={<Shopping/>}/>
          <Route path="/product" element={<ProductPage/>}/>
        </Routes>
        {/* main */}
        {/* Footer */}
        <SectionFooter />
    </BrowserRouter>
  );
}

export default App;
