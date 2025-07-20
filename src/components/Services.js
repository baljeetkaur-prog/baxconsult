import React, { useContext, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Themecontext } from './Themecontext';

const servicesData = [
  {
    id: '1',
    number: '01',
    icon: 'fas fa-briefcase',
    title: 'Business Consulting',
    desc: 'Scale operations, streamline systems, and shift from founder-led to professionally managed structures.',
    bg: '#ffccd0',
  },
  {
    id: '2',
    number: '02',
    icon: 'fas fa-coins',
    title: 'Business Finance Solutions',
    desc: 'Unlock capital via invoice financing, asset funding, and strategic investment planning.',
    bg: '#b2f2bb',
  },
  {
    id: '3',
    number: '03',
    icon: 'fas fa-shield-alt',
    title: 'Insurance & Risk Advisory',
    desc: 'Safeguard operations with customized coverage that aligns with your risks and compliance needs.',
    bg: '#cce5ff',
  },
  {
    id: '4',
    number: '04',
    icon: 'fas fa-network-wired',
    title: 'AI & Digital Transformation',
    desc: 'Drive innovation and efficiency through AI integration and smart digital tools.',
    bg: '#ffe8a1',
  },
];

const Services = ({ showBanner = true }) => {
  const { theme } = useContext(Themecontext);
  const isDark = theme === 'dark';

  useEffect(() => {
    document.documentElement.setAttribute('data-theme', theme);
  }, [theme]);

  return (
    <>
      {/* Banner only if showBanner === true */}
      {showBanner && (
        <section className="inner-banner-video py-5">
          <video
            className="bg-video"
            autoPlay
            muted
            loop
            playsInline
            preload="auto"
          >
           <source src="/images/video2.mp4" type="video/mp4" />
            Your browser does not support the video tag.
          </video>

          <div className="w3l-breadcrumb py-lg-5">
            <div className="container pt-5 pb-sm-4 text-white">
              <h4 className="inner-text-title font-weight-bold pt-sm-5 pt-4">Our Services</h4>
              <ul className="breadcrumbs-custom-path list-unstyled d-flex justify-content-center gap-2">
                <li><Link to="/" className="text-white text-decoration-none">Home</Link></li>
                <li className="active text-white"><i className="fas fa-angle-right mx-2"></i>Services</li>
              </ul>
            </div>
          </div>
        </section>
      )}

      {/* Services Section */}
      <section
        className="home-services py-5"
        id="services"
        style={{
          backgroundColor: isDark ? '#1a1a1a' : '#fff',
          color: isDark ? '#e0e0e0' : '#222',
          transition: 'all 0.3s ease',
        }}
      >
        <div className="container py-lg-5 py-md-4 py-2">
          <div
            className="title-main text-center mx-auto mb-md-5 mb-4"
            style={{ maxWidth: '700px' }}
            data-aos="fade-up"
            data-aos-duration="800"
          >
            <h5 className="small-title mb-2 text-uppercase fw-bold" style={{ color: '#f52029' }}>
              BAX Consulting Group
            </h5>
            <h3 className="title-style fw-bold display-6">
              Strategic Growth, Digital Transformation & Operational Excellence
            </h3>
            <p className={`mt-3 ${isDark ? 'text-light' : 'text-muted'}`}>
              We partner with businesses to unlock their full potential through innovative, scalable, and future-proof solutions.
            </p>
          </div>

         <div className="row g-4 justify-content-center">
  {servicesData.map((service) => (
    <div
      className="col-md-6 col-lg-6"
      key={service.id}
      data-aos="zoom-in-up"
      data-aos-delay={service.id * 150}
      data-aos-duration="1000"
      data-aos-easing="ease-in-out"
    >
      <div
        className="box-wrap p-4 rounded-4 shadow-sm h-100 border-0 position-relative service-card"
        style={{
          backgroundColor: service.bg,
          color: isDark ? '#1a1a1a' : '#222',
        }}
      >
        <div
          className="icon mb-3 d-inline-flex align-items-center justify-content-center rounded-circle"
          style={{
            width: '60px',
            height: '60px',
            backgroundColor: 'rgba(255,255,255,0.7)',
            boxShadow: '0 3px 10px rgba(0,0,0,0.05)',
          }}
        >
          <i className={`${service.icon} fa-lg text-dark`}></i>
        </div>
        <h6 className="number text-muted fw-bold mb-1">{service.number}</h6>
        <h4 className="fw-bold mb-2">
          <Link
            to={`/servicedetail/${service.id}`}
            className="text-decoration-none"
            style={{ color: '#000' }}
          >
            {service.title}
          </Link>
        </h4>
        <p className="mb-3" style={{ color: '#444' }}>
          {service.desc}
        </p>
        <Link
          to={`/servicedetail/${service.id}`}
          className="read-more-link fw-semibold"
          style={{ color: '#000' }}
        >
          Read more →
        </Link>
      </div>
    </div>
  ))}
</div>

        </div>
      </section>

      {/* Inline CSS */}
      <style>{`
        .inner-banner {
          display: none !important;
        }

        .inner-banner-video {
          position: relative;
          height: 400px;
          overflow: hidden;
          display: flex;
          align-items: center;
          justify-content: center;
          text-align: center;
          color: white;
          z-index: 0;
        }

        .inner-banner-video video.bg-video {
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          object-fit: cover;
          object-position: center top;
          z-index: -2;
        }

        .inner-banner-video::before {
          content: "";
          position: absolute;
          top: 0;
          left: 0;
          right: 0;
          bottom: 0;
          background: rgba(0, 0, 0, 0.4);
          z-index: -1;
        }

        .service-card {
          transition: all 0.6s ease-in-out;
          transform: translateY(0);
        }

        .service-card:hover {
          transform: translateY(-3px);
          box-shadow: 0 10px 30px rgba(0, 0, 0, 0.15);
        }

        .read-more-link {
          text-decoration: none;
          transition: color 0.3s ease;
        }

        .read-more-link:hover {
          color: #f52029 !important;
        }, 
         @media (max-width: 768px) {
  .inner-banner-video video.bg-video {
    object-position: center center;
  }
      `}</style>
    </>
  );
};

export default Services;
