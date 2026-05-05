import { BrowserRouter, Route, Routes } from "react-router-dom";
import SectionHero from "./components/section-Hero";
import HomePage from "./pages/home";
import BlogPage from "./pages/blog";
 
function App() {
  return (
    <BrowserRouter>
       {/* Header */}
        <SectionHero />
        <Routes>
          <Route path="/" element={<HomePage/>}/>
          <Route path="/blog" element={<BlogPage/>}/>

        </Routes>
    </BrowserRouter>
  );
}

export default App;
