// Siteroutes.js
import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Home from './Home';
import Aboutus from './Aboutus';
import Servicemain from './Servicemain';
import Blog from './Blog';
import Blogdetail from './Blogdetail';
import Contactus from './Contactus';
import Notfoundpage from './Notfoundpage';
import Servicedetail from './Servicedetail';
// import other components/pages as needed
// import About from './About';
// import ServicesPage from './ServicesPage';

const Siteroutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/about" element={<Aboutus />} />
      <Route path="/services" element={<Servicemain />} />
      <Route path="/blog" element={<Blog/>}/>
      <Route path="/blogdetail/:id" element={<Blogdetail/>}/>
      <Route path="/contact" element={<Contactus/>}/>
      <Route path="/servicedetail/:id" element={<Servicedetail/>}/>
      <Route path="*" element={<Notfoundpage/>}/>
    </Routes>
  );
};

export default Siteroutes;
