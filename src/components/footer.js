import React from 'react';
import { Link } from 'gatsby';

const Footer = () => {
  return (
    <footer className="usa-footer usa-footer--slim">
      <div className="grid-container usa-footer__return-to-top">
        <a href="#">Return to top</a>
      </div>
      <div className="usa-footer__primary-section">
        <div className="usa-footer__primary-container grid-row">
          <div className="mobile-lg:grid-col-8">
            <nav className="usa-footer__nav" aria-label="Footer navigation">
              <ul className="grid-row grid-gap">
                <li className="mobile-lg:grid-col-6 desktop:grid-col-auto usa-footer__primary-content">
                  <Link className="usa-footer__primary-link" to="/about">
                    About Site Scanner
                  </Link>
                </li>
                <li className="mobile-lg:grid-col-6 desktop:grid-col-auto usa-footer__primary-content">
                  <Link className="usa-footer__primary-link" to="/contact-us">
                    Contact Us
                  </Link>
                </li>
              </ul>
            </nav>
          </div>
          <div className="mobile-lg:grid-col-4">
            <address className="usa-footer__address">
              <div className="grid-row grid-gap">
                <div className="grid-col-auto mobile-lg:grid-col-12 desktop:grid-col-auto">
                  <div className="usa-footer__contact-info">
                    <a href="mailto:site-scanning@gsa.gov">
                      site-scanning@gsa.gov
                    </a>
                  </div>
                </div>
              </div>
            </address>
          </div>
        </div>
      </div>
      <div className="usa-footer__secondary-section">
        <div className="grid-container">
          <div className="usa-footer__logo grid-row grid-gap-2">
            <div className="grid-col-auto">
              <img
                className="usa-footer__logo-img"
                src="/assets/img/logo-img.png"
                alt=""
              />
            </div>
            <div className="grid-col-auto">
              <h3 className="usa-footer__logo-heading">
                General Services Administration
              </h3>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;