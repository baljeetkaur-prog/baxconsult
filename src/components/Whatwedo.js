import React from 'react';
import { Link } from 'react-router-dom';

const services = [
  {
    imageClass: 'top-pic1',
    category: 'Business Consulting',
    title: 'Strategic Growth Transformation',
    link: '/servicedetail/1',
  },
  {
    imageClass: 'top-pic2',
    category: 'Financial Solutions',
    title: 'Tailored Capital & Funding Models',
    link: '/servicedetail/2',
  },
  {
    imageClass: 'top-pic3',
    category: 'Insurance Advisory',
    title: 'Risk-Proof Business Coverage Plans',
    link: '/servicedetail/3',
  },
];

const Whatwedo = () => {
  return (
    <div className="w3l-homeblock3 py-5">
      <div className="container py-lg-5 py-md-4 py-2">
        <div
          className="title-main text-center mx-auto mb-md-5 mb-4"
          style={{ maxWidth: '700px' }}
        >
          <h5 className="small-title mb-2">What we do?</h5>
          <h3 className="title-style">Empowering Businesses to Scale with Confidence</h3>
        </div>

        <div className="row justify-content-center">
          {services.map((item, index) => (
            <div className="col-lg-4 col-md-6 mt-4 mt-md-0" key={index}>
              <div className={`${item.imageClass}`}>
                <div className="card-body blog-details">
                  <span className="meta-value">{item.category}</span>
                  <Link to={item.link} className="blog-desc">
                    {item.title}
                  </Link>
                  <Link
                    to={item.link}
                    className="btn btn-style-primary btn-style text-white mt-4"
                  >
                    Read More <i className="fas fa-arrow-right ms-1"></i>
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Whatwedo;
