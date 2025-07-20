import React, { useEffect, useContext } from 'react';
import { useParams, Link } from 'react-router-dom';
import serviceData from './Servicedata';
import { Themecontext } from './Themecontext';

const serviceColors = ['#fce3e3', '#e3f5fc', '#fff3cd'];

const Servicedetail = () => {
  const { id } = useParams();
  const { theme } = useContext(Themecontext);
  const isDark = theme === 'dark';

  const service = serviceData.find((item) => item.id === id);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  if (!service) {
    return (
      <section className="py-5">
        <div className="container">
          <h3 className="text-center">Service not found.</h3>
        </div>
      </section>
    );
  }

  const otherServices = serviceData.filter((item) => item.id !== id);

  return (
    <div data-theme={theme}>
      {/* ✅ Inner Banner with Video */}
      <section className="inner-banner-video">
        <video className="bg-video" autoPlay muted loop playsInline>
          <source src="/images/video2.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>
        <div className="container text-white">
          <h4 className="inner-text-title font-weight-bold mb-3">{service.title}</h4>
          <ul className="breadcrumbs-custom-path list-unstyled d-flex justify-content-center mb-0">
            <li>
              <Link to="/" className="text-white text-decoration-none">Home</Link>
            </li>
            <li className="mx-2">
              <i className="fas fa-angle-right text-white"></i>
            </li>
            <li>
              <Link to="/#services" className="text-white text-decoration-none">Services</Link>
            </li>
            <li className="mx-2">
              <i className="fas fa-angle-right text-white"></i>
            </li>
            <li className="text-white">{service.title}</li>
          </ul>
        </div>
      </section>

      {/* ✅ Service Detail Content + Sidebar */}
<section className={`service-detail py-5 ${isDark ? 'bg-black text-light' : 'bg-light'}`}>
  <div className="container py-md-5 py-sm-4 py-2">
    <div className="row g-4">
      {/* Main Content */}
      <div className="col-lg-8" data-aos="fade-up" data-aos-duration="1000">
        <div
          className="text11-content p-5 shadow rounded-4"
          style={{
            background: isDark ? '#1c1c1c' : '#ffffff',
            borderLeft: '6px solid #f52029',
            color: isDark ? '#f1f1f1' : '#333',
            transition: 'all 0.3s ease-in-out',
            fontSize: '1.05rem',
            lineHeight: '1.75',
          }}
        >
          <div className="d-flex align-items-center mb-4">
            <span
              className="me-3"
              style={{
                backgroundColor: '#f52029',
                color: '#fff',
                borderRadius: '50%',
                width: '48px',
                height: '48px',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                fontSize: '1.25rem',
              }}
            >
              <i className="fas fa-thumbs-up"></i>
            </span>
            <h3 className="mb-0 fw-bold" style={{ fontSize: '1.5rem' }}>{service.title}</h3>
          </div>

          <hr className="my-4" style={{ borderColor: isDark ? '#444' : '#ccc' }} />

          {/* Blog content with li styling */}
          <div
            className="blog-content"
            style={{
              fontSize: '1.05rem',
              lineHeight: '1.75',
            }}
            dangerouslySetInnerHTML={{
              __html: `
                <style>
                  .blog-content ul {
                    padding-left: 1.2rem;
                    margin-bottom: 1rem;
                  }
                  .blog-content li {
                    margin-bottom: 0.5rem;
                    font-size: 1.05rem;
                    line-height: 1.75;
                    position: relative;
                    padding-left: 1.2rem;
                  }
                  .blog-content li::before {
                    content: "•";
                    position: absolute;
                    left: 0;
                    color: #f52029;
                    font-weight: bold;
                  }, 
                   @media (max-width: 768px) {
  .inner-banner-video video.bg-video {
    object-position: center center;
  }
                  
                </style>
                ${service.description}
              `,
            }}
          />
        </div>
      </div>

      {/* Sidebar - Other Services */}
      <div className="col-lg-4" data-aos="fade-left" data-aos-delay="300">
        <div
          className="sidebar-box p-4 shadow rounded-4"
          style={{
            background: isDark ? '#212529' : '#ffffff',
            color: isDark ? '#f8f9fa' : '#343a40',
            border: isDark ? '1px solid #343a40' : '1px solid #dee2e6',
            transition: 'all 0.3s ease',
            fontSize: '1.05rem',
          }}
        >
          <h4 className="mb-4 fw-bold text-center">Explore More Services</h4>
          {otherServices.map((item, index) => (
            <Link
              key={item.id}
              to={`/servicedetail/${item.id}`}
              className="d-block mb-3 p-3 text-decoration-none explore-card"
              style={{
                backgroundColor: serviceColors[index % serviceColors.length],
                borderRadius: '10px',
                boxShadow: '0 3px 8px rgba(0,0,0,0.05)',
                color: '#212529',
                transition: 'all 0.3s ease-in-out',
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.transform = 'translateY(-2px)';
                e.currentTarget.style.boxShadow = '0 6px 15px rgba(0, 0, 0, 0.1)';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.transform = 'translateY(0)';
                e.currentTarget.style.boxShadow = '0 3px 8px rgba(0,0,0,0.05)';
              }}
              data-aos="zoom-in"
              data-aos-delay={`${400 + index * 100}`}
            >
              <div className="d-flex justify-content-between align-items-start">
                <div>
                 <h6 className="mb-1 fw-semibold" style={{ fontSize: '1.05rem', color: '#000' }}>{item.title}</h6>

                  <small className="text-muted">Learn more →</small>
                </div>
                <i className="fas fa-arrow-right fa-lg text-dark mt-1"></i>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  </div>
</section>





      {/* ✅ CTA Section */}
      <section className="w3l-content1 py-5" style={{ backgroundColor: '#f52029' }}>
        <div className="container py-md-5 py-sm-4 py-2">
          <div className="row py-4">
            <div className="col-lg-7">
              <h3 className="title-style text-white">Empowering Business Transformation</h3>
              <p className="mt-4 text-light">
                At BAX Consulting Group, we specialize in doubling business turnover in less than three years through 
                strategic growth, digital transformation, operational excellence, and AI implementation...
              </p>
              <button
                onClick={() => window.open('https://bit.ly/BookingWithBax', '_blank')}
                className="btn btn-style mt-md-5 mt-4"
              >
                Book a Free Strategy Call
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* ✅ Scoped CSS for Banner */}
      <style>{`
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

        .explore-card {
          transition: all 0.3s ease;
        }

        .explore-card:hover {
          transform: translateY(-3px);
          box-shadow: 0 4px 12px rgba(0, 0, 0, 0.15);
        }
      `}</style>
    </div>
  );
};

export default Servicedetail;
