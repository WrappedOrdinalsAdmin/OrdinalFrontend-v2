
import OwlCarousel from 'react-owl-carousel';
import React, { Component } from 'react';
import 'owl.carousel/dist/assets/owl.carousel.css';
import 'owl.carousel/dist/assets/owl.theme.default.css';
import auction from "../../src/assets/E-Auction.jpg";
export class Owldemo1 extends Component {
  render() {
    const options = {
      responsive: {
        0: {
          items: 1,
        },
        768: {
          items: 2,
        },
        1024: {
          items: 3,
        },
      },
    };
    return (
      <div>
        <div class='container' >
          <OwlCarousel {...options}
            className="owl-theme" loop nav arrow navText margin={15} >
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
          </OwlCarousel>
        </div>

      </div>
    )
  }
}


export default Owldemo1  