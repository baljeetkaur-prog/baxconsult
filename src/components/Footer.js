import React, { useContext } from 'react';
import { Themecontext } from './Themecontext';

const Footer = () => {
  const { theme, toggleTheme } = useContext(Themecontext);

  return (
    <footer className="w3l-footer py-3">
      <div className="container pt-3">
        <div className="row">
          <div className="col-lg-4 sub-one-left">
            <h6>Contact</h6>
            <div className="column2">
              <div className="href1">
                <span className="fas fa-envelope-open"></span>
                <span className="ms-2">bax@baxcg.com</span>
              </div>
              <div className="href2 my-2">
                <span className="fas fa-phone-alt"></span>
                <span className="ms-2">+44 1631 1312</span>
              </div>
              <div>
                <p className="contact-para mb-2">
                  <span className="fas fa-map-marker-alt"></span>
                  <span className="ms-2">128 City Road, London EC1V 2NX</span>
                </p>
              </div>
            </div>

            <ul className="social mt-3">
              <li>
                <a
                  href="https://www.linkedin.com/company/bax-consulting-group/"
                  target="_blank"
                  rel="noreferrer"
                >
                  <span className="fab fa-linkedin-in"></span>
                </a>
              </li>
            </ul>

          </div>
        </div>

        <div className="text-center mt-4 pt-2">
          <p style={{ fontSize: '0.85rem', color: '#bbb' }}>
            &copy; {new Date().getFullYear()} BAX Consulting Group. All rights reserved |
            <span style={{ fontSize: '0.85rem', marginLeft: '4px', color: 'inherit', opacity: 1 }}>
              Design by W3Layouts
            </span>
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
