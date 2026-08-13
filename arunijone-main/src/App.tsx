import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import HomeDesktop from "./pages/HomeDesktop";
import ContactDesktop from "./pages/ContactDesktop";
import About from "./pages/About";
import Products from "./pages/Products";
import Portfolio1 from "./pages/Portfolio1";
import Portfolio2 from "./pages/Portfolio2";
import Portfolio3 from "./pages/Portfolio3";
import Portfolio4 from "./pages/Portfolio4";
import BlogDesktop from "./pages/Blog";
import FAQ from "./pages/FAQ";
import FAQDetailsDesktop from "./pages/FAQDetails";
import SlideTransition from "./components/SlideTransition";
import BottomNavMobile from "./components/BottomNavMobile";

//HELLO WORLD NOTHING TO SEE HERE
const App = () => {
  return (
    <Router>
      <SlideTransition>
        <Routes>
          <Route path="/" element={<HomeDesktop />} />
          <Route path="/contact" element={<ContactDesktop />} />
          <Route path="/about" element={<About />} />
          <Route path="/products" element={<Products />} />
          <Route path="/portfolio1" element={<Portfolio1 />} />
          <Route path="/portfolio2" element={<Portfolio2 />} />
          <Route path="/portfolio3" element={<Portfolio3 />} />
          <Route path="/portfolio4" element={<Portfolio4 />} />
          <Route path="/blog" element={<BlogDesktop />} />
          <Route path="/faq" element={<FAQ />} />
          <Route path="/faq-details" element={<FAQDetailsDesktop />} />
        </Routes>
      </SlideTransition>
      <BottomNavMobile />
    </Router>
  );
};

export default App;
