import React from 'react';
import Owldemo1 from './Owldemo1';
import Navbar from './navbar';
import Footer from './footer';

const Market = () => {
  return (
    <div className="wrapper">
      <Navbar />
       <div className="live-auction common-arrow p-80" id="live-auction">
        <div className='container'>
          <div className="row d-flex align-items-center">
            <div className="col-lg-12 mb-lg-0 wow fadeInUp animated" data-wow-duration="1000ms" data-wow-delay="700ms">
              <h1 className="heading text-white">Live auctions</h1>
            </div>
          </div>
        </div>
        <Owldemo1 />
      </div>
      <Footer />
    </div>
  );
};

export default Market;


