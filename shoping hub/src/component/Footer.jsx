import React from 'react';

const Footer = () => {
  return (
    <footer className="footer-container">
      <div className="footer-top">
        {/* About Section */}
        <div className="footer-about">
          <h3>About Us</h3>
          <p>
            Welcome to [Your Website Name]! We curate the best products and deals 
            to make your shopping experience amazing.
          </p>
        </div>

        {/* Quick Links */}
        <div className="footer-links">
          <h3>Quick Links</h3>
          <ul>
            <li><a href="/about">About</a></li>
            <li><a href="/contact">Contact</a></li>
            <li><a href="/privacy-policy">Privacy Policy</a></li>
            <li><a href="/terms">Terms of Service</a></li>
          </ul>
        </div>

        {/* Social Media */}
        <div className="footer-social">
          <h3>Follow Us On</h3>
          <div className="social-icons">
            <a href="https://facebook.com" target="_blank" rel="noopener noreferrer">Facebook</a>
            <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">Twitter</a>
            <a href="https://instagram.com" target="_blank" rel="noopener noreferrer">Instagram</a>
          </div>
        </div>
      </div>

      {/* Footer Bottom */}
      <div className="footer-bottom">
        <p>
          Disclaimer: We may earn affiliate commissions from qualifying purchases.
        </p>
        <p>&copy; {new Date().getFullYear()} [Your Website Name]. All Rights Reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
