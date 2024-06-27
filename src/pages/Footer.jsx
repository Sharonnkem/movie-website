import React from 'react';
import './footer.css';
import FooterNavItem from '../components/FooterNavItem';

function Footer() {
  const usefulLinks =[
    'Home',
    'Movies',
    'Terms Of Service',
    'Privacy Policy',
  ];

  return (
    <footer id='footer' className='footer'>
      <div className="footer-top">
        <div className="container">
          <div className="row gy-4">
            <div className="col-lg-5 col-md-12 footer-info">
              <a href="/" className="logo d-flex align-items-center">
               <span>STREAMER</span>
              </a>
              <p>
                Streamer is a Free Movies streaming site with zero ads. We let you watch movies online without having to register or paying, with over 10000 movies and TV-Series. 
              </p>
              <div className="social-links mt-3">
                <a href="/" className="twitter">
                 <ion-icon name="logo-twitter"></ion-icon>
                </a>
                <a href="/" className="facebook">
                 <ion-icon name="logo-facebook"></ion-icon>
                </a>
                <a href="/" className="instagram">
                 <ion-icon name="logo-instagram"></ion-icon>
                </a>
                <a href="/" className="youtube">
                 <ion-icon name="logo-youtube"></ion-icon>
                </a>
              </div>
            </div>

            <div className="col-lg-2 col-6 footer-links">
              <h4>Useful Links</h4>
              <ul>
                {usefulLinks.map(link => (
                  <FooterNavItem key={link} name={link} />
                ))}
              </ul>
            </div>

            <div className="col-lg-3 col-md-12 footer-contact text-center text-md-start">
              <h4>Contact Us</h4>
              <p>
                Street Name <br/>
                62 Wellington Road, Street 32, <br /> Lekki Lagos <br />
                <strong>Phone:</strong> +234 801 234 5678
                <br />
                <strong>Email:</strong>info@example.com 
                <br />
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className="container">
        <div className="copyright">
          &copy; copyright{''}
          <strong>
            <span>SharonCode</span>
          </strong>
          . All Rights Reserved
        </div>
        <div className="credits">
          Designed by <a href="https://portfolio-seven-alpha-96.vercel.app/">SharonCode</a>
        </div>
      </div>
    </footer>
  );
}

export default Footer;