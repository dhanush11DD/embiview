import { Route, Routes } from "react-router-dom";
import "./App.css";
import {
  AboutScreen,
  AutomationScreen,
  CareerScreen,
  ContactScreen,
  HomeScreen,
  IVIScreen,
  ProductScreen,
} from "./Screens";
import { Footer } from "./components/common";
import ScrollToTop from "./utils/ScrollToTop";
import { useEffect, useRef } from "react";
import Lenis from "@studio-freight/lenis";

function App() {
  const lenisRef = useRef(null);

  useEffect(() => {
    lenisRef.current = new Lenis({
      duration: 1.5,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      smooth: true,
    });

    const lenis = lenisRef.current;
    function raf(time) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }

    requestAnimationFrame(raf);

    return () => {
      lenis.destroy();
    };
  }, []);

  return (
    <>
      <ScrollToTop>
        <Routes>
          <Route path="/" element={<HomeScreen />} />
          <Route path="/automation" element={<AutomationScreen />} />
          <Route path="/products" element={<ProductScreen />} />
          <Route path="/about" element={<AboutScreen />} />
          <Route path="/career" element={<CareerScreen />} />
          <Route path="/ivi" element={<IVIScreen />} />
          <Route path="/contact" element={<ContactScreen />} />
        </Routes>
        <Footer />
      </ScrollToTop>
    </>
  );
}

export default App;
