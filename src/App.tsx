import { BrowserRouter, Route, Routes } from "react-router-dom";
import HomePage from "./pages/home";
import BlogPage from "./pages/blog";
import AboutPage from "./pages/about";
import ShopPage from "./pages/shop";
import ContactPage from "./pages/contact";
import Login from "./pages/Login";
import Search from "./pages/Search";
import Heart from "./pages/Heart";
import Shopping from "./pages/Shopping";
import ProductPage from "./pages/product";
import ForgotPassword from "./pages/ForgotPassword";
import HomeLayout from "./layout/homeLayout";
import ProductDetail from "./pages/productDetail";
import AuthLayout from "./layout/aut-layout";
import DashboardLayout from "./layout/dashboard-layout";
import MyProfil from "./pages/MyProfil";
 
function App() {
  return (
    <BrowserRouter>
      
        {/* main */}
        <Routes>
          <Route path="/" element={<HomeLayout/>}> 
              <Route index element={<HomePage/>}/>
              <Route path="/blog" element={<BlogPage/>}/>
              <Route path="/about" element={<AboutPage/>}/>
              <Route path="/shop" element={<ShopPage/>}/>
              <Route path="/contact" element={<ContactPage/>}/>
              <Route path="/home" element={<HomePage/>}/>
              <Route path="/search" element={<Search/>}/>
              <Route path="/heart" element={<Heart/>}/>
              <Route path="/shopping" element={<Shopping/>}/>
              <Route path="/product" element={<ProductPage/>}/>
              <Route path="/product/:id" element={<ProductDetail/>}/>
          </Route>
          <Route path="/auth" element={<AuthLayout/>}>
              <Route path="login" element={<Login/>}/>
              <Route path="forgot-password" element={<ForgotPassword/>}/>
          </Route>
          <Route path="dash" element={<DashboardLayout/>}>
          <Route path="profil" element={<MyProfil/>}/>
          </Route>
        </Routes>
        {/* main */}
        
    </BrowserRouter>
  );
}

export default App;
