import logo from "../assets/logo.png";
import { FaAngleRight } from "react-icons/fa";
const Footer = () => {
  return (
    <footer className="p-80 pb-0">
      <div className="container pb-3">
        <div className="row">
          <div className="col-xs-12 col-sm-12 col-md-12 col-lg-4 col-xl-6 overflow-hidden">
            <div id="footer-sidebar-first" className="company detail">
              <img src={logo} alt="logo" className="img-fluid w-50 wow fadeInUp animated" data-wow-duration="1000ms" data-wow-delay="800ms" />
              <p className="text-white mt-3 mb-0 wow fadeInUp animated" data-wow-duration="1000ms" data-wow-delay="1000ms">Wrap your BTC ordinals to enable trading on Opensea</p>
            </div>

          </div>
          <div className="col-xs-12 col-sm-12 col-md-12 col-lg-4 col-xl-2 overflow-hidden">
            <h4 className="text-white mt-4 mt-lg-0 wow fadeInUp animated" data-wow-duration="1000ms" data-wow-delay="800ms">About</h4>
            <ul className="list-unstyled text-white">
              <li className="wow fadeInUp animated" data-wow-duration="1000ms" data-wow-delay="800ms"><FaAngleRight /><a href="about"> About Us </a></li>
              <li className="wow fadeInUp animated" data-wow-duration="1000ms" data-wow-delay="1000ms"><FaAngleRight /><a href="about">Privacy Policy</a></li>
              <li className="wow fadeInUp animated" data-wow-duration="1000ms" data-wow-delay="1200ms"><FaAngleRight /><a href="about">Terms of Service</a></li>
              <li className="wow fadeInUp animated" data-wow-duration="1000ms" data-wow-delay="1400ms"><FaAngleRight /><a href="about">Support</a></li>
            </ul>
          </div>
          <div className="col-xs-12 col-sm-12 col-md-12 col-lg-4 col-xl-2 overflow-hidden">
            <h4 className="text-white mt-4 mt-lg-0 wow fadeInUp animated" data-wow-duration="1000ms" data-wow-delay="800ms">Comunity</h4>
            <ul className="list-unstyled text-white">
              <li className="wow fadeInUp animated" data-wow-duration="1000ms" data-wow-delay="800ms"><FaAngleRight /><a href="about">Token</a></li>
              <li className="wow fadeInUp animated" data-wow-duration="1000ms" data-wow-delay="800ms"><FaAngleRight /><a href="about">Become a Partner </a></li>
              <li className="wow fadeInUp animated" data-wow-duration="1000ms" data-wow-delay="1000ms"><FaAngleRight /><a href="about">FAQ</a></li>
              <li className="wow fadeInUp animated" data-wow-duration="1000ms" data-wow-delay="1200ms"><FaAngleRight /><a href="about">CollectionsToken</a></li>
            </ul>
          </div>
          <div className="col-xs-12 col-sm-12 col-md-12 col-lg-4 col-xl-2 overflow-hidden">
            <h4 className="text-white mt-4 mt-lg-0 wow fadeInUp animated" data-wow-duration="1000ms" data-wow-delay="800ms">SOCIAL MEDIA</h4>
            <ul className="list-unstyled text-white">
              <li className="wow fadeInUp animated" data-wow-duration="1000ms" data-wow-delay="800ms"><FaAngleRight /><a href="about">Discord</a></li>
              <li className="wow fadeInUp animated" data-wow-duration="1000ms" data-wow-delay="800ms"><FaAngleRight /><a href="about">Instagram </a></li>
              <li className="wow fadeInUp animated" data-wow-duration="1000ms" data-wow-delay="1000ms"><FaAngleRight /><a href="about">Twitter</a></li>
            </ul>
          </div>
        </div>

      </div>
      <div className="container blue-bg">
        <div className="row">
          <div className="col-md-12">
            <div className="copyright text-right">
              <p className="text-white">Copyright 2023 Wrapped Ordinals, Inc.</p>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
