// src/App.jsx
import './App.css';
import './components/Floatingbutton.css';
import { useEffect } from "react";
import Header from './components/Header';
import Footer from './components/Footer';
import Siteroutes from './components/Siteroutes';
import Scrolltotop from './components/Scrolltotop';

// AOS Imports
import AOS from 'aos';
import 'aos/dist/aos.css';

function App() {
  useEffect(() => {
    // Initialize AOS
    AOS.init({
      duration: 1000,
      once: true,
      offset: 100,
      easing: 'ease-in-out'
    });

    // Scroll button logic
    const movetop = document.getElementById("movetop");
    const onScroll = () => {
      if (window.scrollY > 20) {
        movetop.style.display = "block";
      } else {
        movetop.style.display = "none";
      }
    };
    window.addEventListener("scroll", onScroll);

    // Theme toggle logic
    const checkbox = document.getElementById("checkbox");
    const toggleTheme = () => {
      if (checkbox?.checked) {
        document.documentElement.setAttribute("data-theme", "dark");
      } else {
        document.documentElement.setAttribute("data-theme", "light");
      }
    };
    checkbox?.addEventListener("change", toggleTheme);
    document.documentElement.setAttribute("data-theme", "light");

    // Cleanup
    return () => {
      window.removeEventListener("scroll", onScroll);
      checkbox?.removeEventListener("change", toggleTheme);
    };
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <>
      <Scrolltotop />
      <Header />
      <Siteroutes />
      <Footer />

      {/* ✅ Floating Strategy Call Button */}
      <a
        href="https://bit.ly/BookingWithBax"
        className="floating-strategy-btn"
        target="_blank"
        rel="noopener noreferrer"
      >
        Book a Discovery Call
      </a>

      {/* ✅ Scroll to top button */}
      <button
        onClick={scrollToTop}
        id="movetop"
        title="Go to top"
        style={{ display: 'none' }}
      >
        <span className="fas fa-level-up-alt" aria-hidden="true"></span>
      </button>
    </>
  );
}

export default App;
