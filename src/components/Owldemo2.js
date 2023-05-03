
import OwlCarousel from 'react-owl-carousel';
import React, { Component } from 'react';
import 'owl.carousel/dist/assets/owl.carousel.css';
import 'owl.carousel/dist/assets/owl.theme.default.css';
import auction from "../../src/assets/E-Auction.jpg";
export class Owldemo2 extends Component {
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
        <div className='container' >
          <OwlCarousel {...options}
            className="owl-theme" loop nav arrow navText margin={15} >
            <div className="row">
              <div className="artist-wrap text-white">
                <h4 className="good-times artist artist1">01</h4>
                <img className="image-placeholder-icon13" alt="" src={auction} />
                <div className='artist-info'>
                  <h4 className="arlene-mccoy good-times">Arlene McCoy</h4>
                  <p className="arlenemc">@ArleneMc</p>
                </div>
              </div>
              <div className="artist-wrap text-white">
                <h4 className="good-times artist artist1">02</h4>
                <img className="image-placeholder-icon13" alt="" src={auction} />
                <div className='artist-info'>
                  <h4 className="arlene-mccoy good-times">Arlene McCoy</h4>
                  <p className="arlenemc">@ArleneMc</p>
                </div>
              </div>
              <div className="artist-wrap text-white">
                <h4 className="good-times artist artist1">03</h4>
                <img className="image-placeholder-icon13" alt="" src={auction} />
                <div className='artist-info'>
                  <h4 className="arlene-mccoy good-times">Arlene McCoy</h4>
                  <p className="arlenemc">@ArleneMc</p>
                </div>
              </div>
            </div>
            <div className="row">
              <div className="artist-wrap text-white">
                <h4 className="good-times artist artist1">01</h4>
                <img className="image-placeholder-icon13" alt="" src={auction} />
                <div className='artist-info'>
                  <h4 className="arlene-mccoy good-times">Arlene McCoy</h4>
                  <p className="arlenemc">@ArleneMc</p>
                </div>
              </div>
              <div className="artist-wrap text-white">
                <h4 className="good-times artist artist1">02</h4>
                <img className="image-placeholder-icon13" alt="" src={auction} />
                <div className='artist-info'>
                  <h4 className="arlene-mccoy good-times">Arlene McCoy</h4>
                  <p className="arlenemc">@ArleneMc</p>
                </div>
              </div>
              <div className="artist-wrap text-white">
                <h4 className="good-times artist artist1">03</h4>
                <img className="image-placeholder-icon13" alt="" src={auction} />
                <div className='artist-info'>
                  <h4 className="arlene-mccoy good-times">Arlene McCoy</h4>
                  <p className="arlenemc">@ArleneMc</p>
                </div>
              </div>
            </div>
            <div className="row">
              <div className="artist-wrap text-white">
                <h4 className="good-times artist artist1">01</h4>
                <img className="image-placeholder-icon13" alt="" src={auction} />
                <div className='artist-info'>
                  <h4 className="arlene-mccoy good-times">Arlene McCoy</h4>
                  <p className="arlenemc">@ArleneMc</p>
                </div>
              </div>
              <div className="artist-wrap text-white">
                <h4 className="good-times artist artist1">02</h4>
                <img className="image-placeholder-icon13" alt="" src={auction} />
                <div className='artist-info'>
                  <h4 className="arlene-mccoy good-times">Arlene McCoy</h4>
                  <p className="arlenemc">@ArleneMc</p>
                </div>
              </div>
              <div className="artist-wrap text-white">
                <h4 className="good-times artist artist1">03</h4>
                <img className="image-placeholder-icon13" alt="" src={auction} />
                <div className='artist-info'>
                  <h4 className="arlene-mccoy good-times">Arlene McCoy</h4>
                  <p className="arlenemc">@ArleneMc</p>
                </div>
              </div>
            </div>
            <div className="row">
              <div className="artist-wrap text-white">
                <h4 className="good-times artist artist1">01</h4>
                <img className="image-placeholder-icon13" alt="" src={auction} />
                <div className='artist-info'>
                  <h4 className="arlene-mccoy good-times">Arlene McCoy</h4>
                  <p className="arlenemc">@ArleneMc</p>
                </div>
              </div>
              <div className="artist-wrap text-white">
                <h4 className="good-times artist artist1">02</h4>
                <img className="image-placeholder-icon13" alt="" src={auction} />
                <div className='artist-info'>
                  <h4 className="arlene-mccoy good-times">Arlene McCoy</h4>
                  <p className="arlenemc">@ArleneMc</p>
                </div>
              </div>
              <div className="artist-wrap text-white">
                <h4 className="good-times artist artist1">03</h4>
                <img className="image-placeholder-icon13" alt="" src={auction} />
                <div className='artist-info'>
                  <h4 className="arlene-mccoy good-times">Arlene McCoy</h4>
                  <p className="arlenemc">@ArleneMc</p>
                </div>
              </div>
            </div>
            <div className="row">
              <div className="artist-wrap text-white">
                <h4 className="good-times artist artist1">01</h4>
                <img className="image-placeholder-icon13" alt="" src={auction} />
                <div className='artist-info'>
                  <h4 className="arlene-mccoy good-times">Arlene McCoy</h4>
                  <p className="arlenemc">@ArleneMc</p>
                </div>
              </div>
              <div className="artist-wrap text-white">
                <h4 className="good-times artist artist1">02</h4>
                <img className="image-placeholder-icon13" alt="" src={auction} />
                <div className='artist-info'>
                  <h4 className="arlene-mccoy good-times">Arlene McCoy</h4>
                  <p className="arlenemc">@ArleneMc</p>
                </div>
              </div>
              <div className="artist-wrap text-white">
                <h4 className="good-times artist artist1">03</h4>
                <img className="image-placeholder-icon13" alt="" src={auction} />
                <div className='artist-info'>
                  <h4 className="arlene-mccoy good-times">Arlene McCoy</h4>
                  <p className="arlenemc">@ArleneMc</p>
                </div>
              </div>
            </div>
          </OwlCarousel>
        </div>

      </div>
    )
  }
}


export default Owldemo2  