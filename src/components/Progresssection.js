import React, { useContext } from 'react';
import { Themecontext } from './Themecontext';

const progressData = [
  { title: 'Strategic Roadmapping', percent: 92 },
  { title: 'Digital Transformation', percent: 88 },
  { title: 'Financial Structuring', percent: 85 },
  { title: 'Operational Resilience', percent: 90 },
];

const Progresssection = () => {
  const { theme } = useContext(Themecontext);

  const sectionStyle = {
    backgroundColor: theme === 'dark' ? '#1e1e1e' : '#fdfdfd',
    color: theme === 'dark' ? '#e0e0e0' : '#212121',
  };

  const headingColor = theme === 'dark' ? '#f52029' : '#f52029';
  const subtextColor = theme === 'dark' ? '#bbbbbb' : '#6c757d';
  const progressBgColor = theme === 'dark' ? '#333' : '#eaeaea';
  const titleColor = theme === 'dark' ? '#ffffff' : '#212121';

  return (
    <section className="w3l-progress py-5" id="progress" style={sectionStyle}>
      <div className="container py-lg-5 py-md-4 py-2">
        <div className="row align-items-center">
          {/* Left Image */}
          <div
            className="col-lg-6 mb-lg-0 mb-5 text-center"
            data-aos="zoom-in-right"
          >
            <img
              src="/images/growth.jpg"
              alt="Progress Visual"
              className="img-fluid radius-image shadow-sm rounded-4"
              style={{
                maxHeight: '550px',
                objectFit: 'cover',
                borderRadius: '16px',
              }}
            />
          </div>

          {/* Right Content */}
          <div className="col-lg-6 ps-xl-5" data-aos="fade-left">
            <h5
              className="text-uppercase mb-2 fw-bold"
              style={{ color: headingColor, letterSpacing: '1px' }}
            >
              Performance That Speaks
            </h5>
            <h2 className="fw-bold display-6 mb-3" style={{ color: titleColor }}>
              Turning Complex Challenges into{' '}
              <span style={{ color: headingColor }}>Scalable Growth</span>
            </h2>
            <p className="mb-4 fs-6" style={{ color: subtextColor }}>
              At <strong>BAX Consulting Group</strong>, we don't just build strategies — we build intelligent
              systems and financial foundations that help businesses grow with confidence, precision, and purpose.
            </p>

            {/* Progress Bars */}
            <div className="progress-block mt-4">
              {progressData.map((item, index) => (
                <div
                  className="progress-info mb-4"
                  key={index}
                  data-aos="fade-up"
                  data-aos-delay={index * 100}
                >
                  <div className="d-flex justify-content-between align-items-center mb-2">
                    <h6 className="fw-semibold mb-0" style={{ color: titleColor }}>
                      {item.title}
                    </h6>
                    <span className="fw-bold text-danger">{item.percent}%</span>
                  </div>
                  <div
                    className="progress"
                    style={{
                      height: '12px',
                      backgroundColor: progressBgColor,
                      borderRadius: '6px',
                    }}
                  >
                    <div
                      className="progress-bar bg-danger progress-bar-striped progress-bar-animated"
                      role="progressbar"
                      style={{
                        width: `${item.percent}%`,
                        borderRadius: '6px',
                        boxShadow: '0 0 6px rgba(245, 32, 41, 0.5)',
                      }}
                      aria-valuenow={item.percent}
                      aria-valuemin="0"
                      aria-valuemax="100"
                    ></div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Extra Styling */}
      <style>{`
        .progress-info h6 {
          font-size: 1rem;
        }

        .progress-info:hover {
          transform: scale(1.01);
          transition: transform 0.6s ease-in-out;
        }

        .progress-bar {
          transition: width 1.2s ease-in-out;
        }

        .radius-image {
          border-radius: 16px;
        }
      `}</style>
    </section>
  );
};

export default Progresssection;
