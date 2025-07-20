// components/ServicesMain.js
import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import Services from './Services';
import Whatwedo from './Whatwedo';
import { Themecontext } from './Themecontext';

const Servicemain = () => {
  const { theme } = useContext(Themecontext);
  const isDark = theme === 'dark';

  return (
    <>
      {/* Inner Banner for Services Page */}
      <section className="inner-banner py-5" style={{ backgroundColor: isDark ? '#111' : '#f8f9fa' }}>
        <div className="w3l-breadcrumb py-lg-5">
          <div className="container pt-5 pb-sm-4">
            <h4
              className="inner-text-title font-weight-bold pt-sm-5 pt-4"
              style={{ color: '#fff'  }}
            >
              Services
            </h4>
            <ul className="breadcrumbs-custom-path">
              <li>
                <Link to="/" style={{ color: '#fff' }}>Home</Link>
              </li>
              <li className="active" style={{ color: '#fff' }}>
                <i className="fas fa-angle-right mx-2"></i>Services
              </li>
            </ul>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <Services />

      {/* Content Block Section */}
      <section
        className="w3l-content1 py-5"
        style={{ backgroundColor: isDark ? '#222' : '#f52029' }}
      >
        <div className="container py-md-5 py-sm-4 py-2">
          <div className="row py-4">
            <div className="col-lg-7">
              <h3 className="title-style" style={{ color: '#fff' }}>
                Empowering Business Transformation
              </h3>
              <p className="mt-4" style={{ color: '#eee' }}>
                At BAX Consulting Group, we specialize in doubling business turnover in less than three years through 
                strategic growth, digital transformation, operational excellence, and AI implementation. With over 28 years of 
                cross-sector experience, we guide ambitious SMEs through their most critical growth phases.
              </p>
              <button
                onClick={() => window.open('https://bit.ly/BookingWithBax', '_blank')}
                className="btn btn-style mt-md-5 mt-4"
              >
                Book a Free Discovery Call
              </button>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Servicemain;
