import React, { useContext, useEffect } from 'react';
import Heroslider from './Heroslider';
import Services from './Services';
import Whychooseus from './Whychooseus';
// import Features from './Features';
// import Whatwedo from './Whatwedo';
import Progresssection from './Progresssection';
import Testimonials from './Testimonials';
import Blogsection from './Blogsection';
import { Themecontext } from './Themecontext'; // ✅ Theme context import

const Home = () => {
  const { theme } = useContext(Themecontext); // ✅ Access current theme

  useEffect(() => {
    // Apply theme to <html> whenever Home loads or theme changes
    document.documentElement.setAttribute('data-theme', theme);
  }, [theme]);

  return (
   <>
  <div data-aos="fade-in">
    <Heroslider />
  </div>

  <div data-aos="fade-up" data-aos-delay="100">
    <Services showBanner={false} />
  </div>

  <div data-aos="fade-up" data-aos-delay="200">
    <Whychooseus />
  </div>

  <div data-aos="fade-up" data-aos-delay="300">
    <Progresssection />
  </div>

  <div data-aos="fade-up" data-aos-delay="400">
    <Testimonials />
  </div>

  <div data-aos="fade-up" data-aos-delay="500">
    <Blogsection />
  </div>
</>

  );
};

export default Home;
