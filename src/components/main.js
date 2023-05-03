import Banner from "../assets/banner-img.png";
import Owldemo1 from './Owldemo1';
import Owldemo2 from './Owldemo2';
import TabsDiv from './tabs.js';
import PopularArtist from './popularArtists'

const Main = () => {
  return (
    <div className="inner-wrap">
      <div className="banner" id="home">
        <div className="container d-flex align-items-center">
          <div className="row">
            <div className="col-lg-5 col-md-12 wow pulse animated" data-wow-duration="1000ms" data-wow-delay="600ms">
              <div className="text-wrap">
                <h1 className="heading">Wrapped Ordinals</h1>
                <p className="tagline mb-4">Wrap your ordinal To Enable Trade on Open Sea</p>
                <a className="btn block-btn good-times common-btn" href="#About_Us">Wrap Your Ordinal</a>
              </div>
            </div>
            <div
              className="col-lg-7 col-md-12"
              data-wow-duration="1000ms"
              data-wow-delay="600ms">
              <div className="img-wrap">
                <img className="img-fluid" alt="banner" src={Banner} />
              </div>
            </div>
          </div>
        </div>
      </div>

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

      <div className="explore p-80" id="explore">
        <div className='container'>
          <div className="row d-flex align-items-center">
            <div className="col-lg-12 mb-lg-0 wow fadeInUp animated" data-wow-duration="1000ms" data-wow-delay="700ms">
              <h1 className="heading text-white">Explore Art</h1>
            </div>
          </div>
        </div>
        <TabsDiv />
      </div>

      <div className="popular-artist common-arrow p-80" id="popular-artist">
        <div className='container'>
          <div className="row d-flex align-items-center">
            <div className="col-lg-12 mb-lg-0 wow fadeInUp animated" data-wow-duration="1000ms" data-wow-delay="700ms">
              <h1 className="heading text-white">Popular Artists</h1>
            </div>
          </div>
        </div>
        <Owldemo2 />
      </div>
      <div className="popular-articles common-arrow p-80" id="popular-articles">
        <div className='container'>
          <div className="row d-flex align-items-center">
            <div className="col-lg-12 mb-lg-0 d-flex justify-content-between align-items-center wow fadeInUp animated" data-wow-duration="1000ms" data-wow-delay="700ms">
              <h1 className="heading text-white">Popular Articles</h1>
              <button className="filter text-white me-0"> <b>View All</b></button>
            </div>
          </div>
        </div>
        <PopularArtist />
      </div>

      <div className="subscribe p-80 text-center margin-auto" id="subscribe">
        <div className='container'>
          <div className="row">
            <div className="col-lg-8 mb-5 mb-lg-0 m-auto wow fadeInUp animated" data-wow-duration="1000ms" data-wow-delay="700ms">
              <h1 className="heading text-white">STAY IN THE LOOP</h1>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor</p>
            </div>
          </div>
          <div className="row mt-5">
            <div className="col-lg-8 mb-5 mb-lg-0 m-auto">
              <div class="email">
                <input class="form" type="text" placeholder="Your Email" />
                <button class="button">
                  <div class="medium good-times gradient-text">Subscribe</div>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Main;
