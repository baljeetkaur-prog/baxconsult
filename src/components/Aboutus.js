import React, { useContext, useEffect } from 'react';
import { Link } from 'react-router-dom';
import Whychooseus from './Whychooseus';
import Progresssection from './Progresssection';
import Testimonials from './Testimonials';
import { Themecontext } from './Themecontext';

const About = () => {
  const { theme } = useContext(Themecontext);

  useEffect(() => {
    document.documentElement.setAttribute('data-theme', theme);
  }, [theme]);

  return (
    <>
      <style>
        {`
          .team-info img {
            transition: transform 0.6s ease-in-out;
            border-radius: 12px;
          }

          .team-info:hover img {
            transform: scale(1.05);
          }

          .team-info h4 {
            margin-top: 15px;
            font-size: 1.25rem;
          }

          .team-info p {
            margin-bottom: 10px;
          }

          .social-icons-section a.linkedin {
            color: #0A66C2;
            font-size: 1.2rem;
            transition: color 0.3s;
          }

          .social-icons-section a.linkedin:hover {
            color: #004182;
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

          .w3l-breadcrumb {
            position: relative;
            z-index: 1;
          }
            @media (max-width: 768px) {
  .inner-banner-video video.bg-video {
    object-position: center center;
  }
}
}
            
        `}
      </style>

      <section className="inner-banner-video py-5">
        <video
          className="bg-video"
          autoPlay
          muted
          loop
          playsInline
          preload="auto"
        >
          <source src="/images/corporateedit.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>

        <div className="w3l-breadcrumb py-lg-5">
          <div className="container pt-5 pb-sm-4">
            <h4 className="inner-text-title font-weight-bold pt-sm-5 pt-4">About Us</h4>
            <ul className="breadcrumbs-custom-path">
              <li><Link to="/">Home</Link></li>
              <li className="active"><i className="fas fa-angle-right mx-2"></i>About</li>
            </ul>
          </div>
        </div>
      </section>

    <section className="w3l-about-2 py-5" data-aos="fade-up" data-aos-duration="1000">
  <div className="container py-md-5 py-4">
    <div className="row align-items-center">
      <div className="col-lg-6 about-2-secs-left" data-aos="fade-right" data-aos-delay="200">
        <h5 className="small-title mb-2">About Us</h5>
        <h3 className="title-style mb-2">Tailoring Strategic Growth for Future-Ready Businesses</h3>
        <p>
          At BAX Consulting Group, we don’t offer generic solutions—we build strategic frameworks that are
          engineered for your success. From digital evolution to financial agility, we help companies unlock
          their full potential in an ever-changing market landscape.
        </p>
        <ul className="list-about-2 mt-sm-4 mt-3">
          <li className="py-1"><i className="far fa-check-square"></i> Customized strategies for sustainable scalability</li>
          <li className="py-2"><i className="far fa-check-square"></i> Industry insight, digital expertise, and financial acumen</li>
        </ul>
        <Link className="btn btn-style mt-lg-5 mt-4" to="/services">View Our Services</Link>
      </div>
      <div className="col-lg-6 about-2-secs-right mt-lg-4 mt-5" data-aos="fade-left" data-aos-delay="200">
        <img src="/images/aboutnew.jpg" alt="About" className="img-fluid radius-image" />
      </div>
    </div>
  </div>
</section>


      <div style={{ margin: '8px auto', display: 'block', textAlign: 'center' }}></div>

      <Whychooseus />

  <section className="w3l-team py-5" id="team" data-aos="fade-up" data-aos-duration="1000">
  <div className="container py-lg-5 py-md-4 py-2">
    <div
      className="title-main text-center mx-auto mb-md-5 mb-4"
      style={{ maxWidth: "700px" }}
      data-aos="zoom-in"
      data-aos-delay="100"
    >
      <h5 className="small-title mb-2">Expert People</h5>
      <h3 className="title-style">Our Team Members</h3>
    </div>
    <div className="row justify-content-center text-center">
      {[
        {
          name: "Gurbax Singh",
          role: "Managing Director",
          img: "teamgurbax.JPG",
          linkedin: "https://www.linkedin.com/company/106282831",
        },
        {
          name: "Gergana Stefanova",
          role: "Business Associate",
          img: "businessassociate1.jpeg",
          linkedin: "https://www.linkedin.com/in/gergana-stefanova-449887239",
        },
        {
          name: "Nadia V.",
          role: "Business Associate",
          img: "businessassociate2.jpeg",
          linkedin: "https://www.linkedin.com/in/nadia-v-a6402589",
        },
      ].map((member, index) => (
        <div
          key={index}
          className="team-info col-md-4 col-sm-6 mt-5"
          data-aos="fade-up"
          data-aos-delay={index * 150}
        >
          <div className="column position-relative">
            <a href="#url">
              <img src={`/images/${member.img}`} alt={member.name} className="img-fluid" />
            </a>
          </div>
          <h4>
            <a href="#team">{member.name}</a>
          </h4>
          <p>{member.role}</p>
          <div className="team-info">
            <div className="caption">
              <div className="social-icons-section text-center">
                <a className="linkedin" href={member.linkedin} target="_blank" rel="noreferrer">
                  <span className="fab fa-linkedin-in"></span>
                </a>
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  </div>
</section>


      <Testimonials />
    </>
  );
};

export default About;
