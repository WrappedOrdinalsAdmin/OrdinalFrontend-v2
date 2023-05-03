import React from 'react';
import Navbar from './navbar';
import Footer from './footer';
import PopularArtist from './popularArtists';
import auction from "../../src/assets/E-Auction.jpg";

const Explore = () => {
  return (
    <div className="wrapper Explorepage">
      <Navbar />
      <div className="popular-artist common-arrow p-80" id="popular-artist">
        <div className='container'>
          <div className="row d-flex align-items-center">
            <div className="col-lg-12 mb-lg-0">
              <h1 className="heading text-white">New Artist</h1>
            </div>
          </div>
        </div>
        <div className='container' >
          <div className="owl-theme" loop nav arrow navText margin={15} >
            <div className="row">
              <div className="col-lg-4 col-sm-6 artist-wrap text-white">
                <h4 className="good-times artist artist1">01</h4>
                <img className="image-placeholder-icon13" alt="" src={auction} />
                <div className='artist-info'>
                  <h4 className="arlene-mccoy good-times">Arlene McCoy</h4>
                  <p className="arlenemc">@ArleneMc</p>
                </div>
              </div>
              <div className="col-lg-4 col-sm-6 artist-wrap text-white">
                <h4 className="good-times artist artist1">02</h4>
                <img className="image-placeholder-icon13" alt="" src={auction} />
                <div className='artist-info'>
                  <h4 className="arlene-mccoy good-times">Arlene McCoy</h4>
                  <p className="arlenemc">@ArleneMc</p>
                </div>
              </div>
              <div className="col-lg-4 col-sm-6 artist-wrap text-white">
                <h4 className="good-times artist artist1">03</h4>
                <img className="image-placeholder-icon13" alt="" src={auction} />
                <div className='artist-info'>
                  <h4 className="arlene-mccoy good-times">Arlene McCoy</h4>
                  <p className="arlenemc">@ArleneMc</p>
                </div>
              </div>
            </div>
            <div className="row">
              <div className="col-lg-4 col-sm-6 artist-wrap text-white">
                <h4 className="good-times artist artist1">01</h4>
                <img className="image-placeholder-icon13" alt="" src={auction} />
                <div className='artist-info'>
                  <h4 className="arlene-mccoy good-times">Arlene McCoy</h4>
                  <p className="arlenemc">@ArleneMc</p>
                </div>
              </div>
              <div className="col-lg-4 col-sm-6 artist-wrap text-white">
                <h4 className="good-times artist artist1">02</h4>
                <img className="image-placeholder-icon13" alt="" src={auction} />
                <div className='artist-info'>
                  <h4 className="arlene-mccoy good-times">Arlene McCoy</h4>
                  <p className="arlenemc">@ArleneMc</p>
                </div>
              </div>
              <div className="col-lg-4 col-sm-6 artist-wrap text-white">
                <h4 className="good-times artist artist1">03</h4>
                <img className="image-placeholder-icon13" alt="" src={auction} />
                <div className='artist-info'>
                  <h4 className="arlene-mccoy good-times">Arlene McCoy</h4>
                  <p className="arlenemc">@ArleneMc</p>
                </div>
              </div>
            </div>
            <div className="row">
              <div className="col-lg-4 col-sm-6 artist-wrap text-white">
                <h4 className="good-times artist artist1">01</h4>
                <img className="image-placeholder-icon13" alt="" src={auction} />
                <div className='artist-info'>
                  <h4 className="arlene-mccoy good-times">Arlene McCoy</h4>
                  <p className="arlenemc">@ArleneMc</p>
                </div>
              </div>
              <div className="col-lg-4 col-sm-6 artist-wrap text-white">
                <h4 className="good-times artist artist1">02</h4>
                <img className="image-placeholder-icon13" alt="" src={auction} />
                <div className='artist-info'>
                  <h4 className="arlene-mccoy good-times">Arlene McCoy</h4>
                  <p className="arlenemc">@ArleneMc</p>
                </div>
              </div>
              <div className="col-lg-4 col-sm-6 artist-wrap text-white">
                <h4 className="good-times artist artist1">03</h4>
                <img className="image-placeholder-icon13" alt="" src={auction} />
                <div className='artist-info'>
                  <h4 className="arlene-mccoy good-times">Arlene McCoy</h4>
                  <p className="arlenemc">@ArleneMc</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="live-auction common-arrow p-80" id="live-auction">
        <div className='container'>
          <div className="row d-flex align-items-center">
            <div className="col-lg-12 mb-lg-0">
              <h1 className="heading text-white">New Collections</h1>
            </div>
          </div>
        </div>
        <div class='container' >
          <div className="row">
            <div className="col-lg-4 col-sm-6">
              <div class="nft-1">
                <div class="wrap">
                  <h3 class="gradient-text">Inscription</h3>
                </div>
                <div className='auctionImg'>
                  <img class="image-placeholder" alt="" src={auction} />
                </div>
                <div class="profile5">
                  <img class="profile-img" alt="" src={auction} />
                  <b class="cameron-williamson6 text-white">Cameron Williamson</b>
                </div>
                <div class="bid-heading">
                  <b class="good-times text-white">Current Bid :</b>
                  <b class="good-times text-white">Ends in :</b>
                </div>
                <div class="end-in">
                  <b class="eth">0.4435 ETH</b>
                  <b class="h-12m-32s">10h 12m 32s</b>
                </div>
                <div class="button22">
                  <div class="large5 good-times">Place bid</div>
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-sm-6">
              <div class="nft-1">
                <div class="wrap">
                  <h3 class="gradient-text">Inscription</h3>
                </div>
                <div className='auctionImg'>
                  <img class="image-placeholder" alt="" src={auction} />
                </div>
                <div class="profile5">
                  <img class="profile-img" alt="" src={auction} />
                  <b class="cameron-williamson6 text-white">Cameron Williamson</b>
                </div>
                <div class="bid-heading">
                  <b class="good-times text-white">Current Bid :</b>
                  <b class="good-times text-white">Ends in :</b>
                </div>
                <div class="end-in">
                  <b class="eth">0.4435 ETH</b>
                  <b class="h-12m-32s">10h 12m 32s</b>
                </div>
                <div class="button22">
                  <div class="large5 good-times">Place bid</div>
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-sm-6">
              <div class="nft-1">
                <div class="wrap">
                  <h3 class="gradient-text">Inscription</h3>
                </div>
                <div className='auctionImg'>
                  <img class="image-placeholder" alt="" src={auction} />
                </div>
                <div class="profile5">
                  <img class="profile-img" alt="" src={auction} />
                  <b class="cameron-williamson6 text-white">Cameron Williamson</b>
                </div>
                <div class="bid-heading">
                  <b class="good-times text-white">Current Bid :</b>
                  <b class="good-times text-white">Ends in :</b>
                </div>
                <div class="end-in">
                  <b class="eth">0.4435 ETH</b>
                  <b class="h-12m-32s">10h 12m 32s</b>
                </div>
                <div class="button22">
                  <div class="large5 good-times">Place bid</div>
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-sm-6">
              <div class="nft-1">
                <div class="wrap">
                  <h3 class="gradient-text">Inscription</h3>
                </div>
                <div className='auctionImg'>
                  <img class="image-placeholder" alt="" src={auction} />
                </div>
                <div class="profile5">
                  <img class="profile-img" alt="" src={auction} />
                  <b class="cameron-williamson6 text-white">Cameron Williamson</b>
                </div>
                <div class="bid-heading">
                  <b class="good-times text-white">Current Bid :</b>
                  <b class="good-times text-white">Ends in :</b>
                </div>
                <div class="end-in">
                  <b class="eth">0.4435 ETH</b>
                  <b class="h-12m-32s">10h 12m 32s</b>
                </div>
                <div class="button22">
                  <div class="large5 good-times">Place bid</div>
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-sm-6">
              <div class="nft-1">
                <div class="wrap">
                  <h3 class="gradient-text">Inscription</h3>
                </div>
                <div className='auctionImg'>
                  <img class="image-placeholder" alt="" src={auction} />
                </div>
                <div class="profile5">
                  <img class="profile-img" alt="" src={auction} />
                  <b class="cameron-williamson6 text-white">Cameron Williamson</b>
                </div>
                <div class="bid-heading">
                  <b class="good-times text-white">Current Bid :</b>
                  <b class="good-times text-white">Ends in :</b>
                </div>
                <div class="end-in">
                  <b class="eth">0.4435 ETH</b>
                  <b class="h-12m-32s">10h 12m 32s</b>
                </div>
                <div class="button22">
                  <div class="large5 good-times">Place bid</div>
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-sm-6">
              <div class="nft-1">
                <div class="wrap">
                  <h3 class="gradient-text">Inscription</h3>
                </div>
                <div className='auctionImg'>
                  <img class="image-placeholder" alt="" src={auction} />
                </div>
                <div class="profile5">
                  <img class="profile-img" alt="" src={auction} />
                  <b class="cameron-williamson6 text-white">Cameron Williamson</b>
                </div>
                <div class="bid-heading">
                  <b class="good-times text-white">Current Bid :</b>
                  <b class="good-times text-white">Ends in :</b>
                </div>
                <div class="end-in">
                  <b class="eth">0.4435 ETH</b>
                  <b class="h-12m-32s">10h 12m 32s</b>
                </div>
                <div class="button22">
                  <div class="large5 good-times">Place bid</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="popular-articles common-arrow p-80" id="popular-articles">
        <div className='container'>
          <div className="row d-flex align-items-center">
            <div className="col-lg-12 mb-lg-0 d-flex justify-content-between align-items-center">
              <h1 className="heading text-white">Popular Articles</h1>
              <button className="filter text-white me-0"> <b>View All</b></button>
            </div>
          </div>
        </div>
        <PopularArtist />
      </div>
      <Footer />
    </div>
  );
};

export default Explore;


