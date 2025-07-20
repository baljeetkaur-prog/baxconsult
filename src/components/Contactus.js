import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { ToastContainer, toast } from 'react-toastify';
import { Themecontext } from './Themecontext';
import 'react-toastify/dist/ReactToastify.css';

const Contactus = () => {
  const { theme } = useContext(Themecontext);

  const openCalendly = () => {
    window.open('https://bit.ly/BookingWithBax', '_blank');
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const form = e.target;
    const formData = new FormData(form);

    try {
      const response = await fetch('https://formspree.io/f/mdkzrblo', {
        method: 'POST',
        headers: { Accept: 'application/json' },
        body: formData,
      });

      if (response.ok) {
        toast.success('Thank you! We’ll get back to you shortly.');
        form.reset();
      } else {
        toast.error('Oops! Something went wrong. Please try again later.');
      }
    } catch (error) {
      toast.error('Network error. Please try again.');
    }
  };

  return (
    <div data-theme={theme}>
      <ToastContainer position="top-center" autoClose={4000} />

      {/* Inner Banner with Video */}
      <section className="inner-banner-video">
        <video className="bg-video" autoPlay muted loop playsInline>
         <source src="/images/corporateedit.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>
        <div className="container text-white">
          <h4 className="inner-text-title font-weight-bold mb-3">Contact Us</h4>
          <ul className="breadcrumbs-custom-path list-unstyled d-flex justify-content-center mb-0">
            <li>
              <Link to="/" className="text-white text-decoration-none">
                Home
              </Link>
            </li>
            <li className="mx-2">
              <i className="fas fa-angle-right text-white"></i>
            </li>
            <li className="text-white">Contact Us</li>
          </ul>
        </div>
      </section>

      {/* Contact Section */}
    <section className="w3l-contact-info-main py-5" id="contact" data-aos="fade-up">
  <div className="container pt-lg-5 pt-md-4 pt-2">
    <div
      className="title-main text-center mx-auto mb-md-5 mb-4"
      style={{ maxWidth: '700px' }}
      data-aos="zoom-in"
    >
      <h5 className="small-title mb-1">Let’s Talk Growth</h5>
      <h3 className="title-style">Connect with BAX Consulting Group</h3>
      <p className="mt-3">
        Ready to scale your business, implement AI frameworks, or create operational excellence?
        Let’s begin a conversation that transforms your business trajectory.
      </p>
      <button onClick={openCalendly} className="btn btn-style mt-4">
        Book a Free Discovery Call
      </button>
    </div>

    <div className="row">
      {/* Contact Info */}
      <div className="col-md-6 left-cont-contact pe-md-4" data-aos="fade-right">
        <div className="contact-address p-4">
          <div className="contact-icon d-flex align-items-center">
            <i className="fas fa-map-marker-alt" aria-hidden="true"></i>
            <div className="ms-3">
              <h5 className="contact-text">Visit Us:</h5>
              <p>128 City Road, London EC1V 2NX, United Kingdom</p>
            </div>
          </div>
        </div>
        <div className="contact-address p-4 mt-4" data-aos="fade-right" data-aos-delay="100">
          <div className="contact-icon d-flex align-items-center">
            <i className="fas fa-phone-alt" aria-hidden="true"></i>
            <div className="ms-3">
              <h5 className="contact-text">Call Us:</h5>
              <a href="tel:+447727119556">+44 1631 1312</a>
            </div>
          </div>
        </div>
        <div className="contact-address p-4 mt-4" data-aos="fade-right" data-aos-delay="200">
          <div className="contact-icon d-flex align-items-center">
            <i className="fas fa-envelope-open-text" aria-hidden="true"></i>
            <div className="ms-3">
              <h5 className="contact-text">Mail Us:</h5>
              <a href="mailto:bax@baxcg.com">bax@baxcg.com</a>
            </div>
          </div>
        </div>
      </div>

      {/* Contact Form */}
      <div className="col-md-6 right-cont-contact ps-md-4 mt-md-0 mt-5" data-aos="fade-left">
        <form onSubmit={handleSubmit} className="w3layouts-contact-fm">
          <div className="form-group mb-3">
            <input className="form-control" type="text" name="name" placeholder="Your Full Name" required />
          </div>
          <div className="form-group mb-3">
            <input className="form-control" type="email" name="email" placeholder="Your Email Address" required />
          </div>
          <div className="form-group mb-3">
            <input className="form-control" type="text" name="subject" placeholder="Your Company / Role (Optional)" />
          </div>
          <div className="form-group">
            <textarea className="form-control" name="message" placeholder="Tell us briefly what you need help with…" required></textarea>
          </div>
          <div className="form-group-2 mt-3 text-end">
            <button type="submit" className="btn btn-style">Submit Inquiry</button>
          </div>
        </form>
      </div>
    </div>
  </div>
</section>


      {/* Google Map */}
      <div className="map-contact pt-5">
        <iframe
          className="map-w3layouts"
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2482.233612607066!2d-0.0888229!3d51.527274899999995!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x48761ca671d5df0b%3A0x368e18d29207f698!2s128%20City%20Rd%2C%20London%20EC1V%202NX!5e0!3m2!1sen!2suk!4v1752672846522!5m2!1sen!2suk"
          width="100%"
          height="400"
          frameBorder="0"
          style={{ border: 0 }}
          allowFullScreen=""
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
          title="BAX Consulting Location"
        ></iframe>
      </div>

      {/* Embedded Scoped Styles */}
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
    </div>
  );
};

export default Contactus;
