import React from 'react';
import mainImage from '../../img/garment-manufacturing-facility-floor-workers-producing-tshirts.png';
import heroLogo from '../../img/white-label-mfg-logo.png';
import movie from '../../videos/white-label-mfg-signle-source-garment-apparel-production-process-facility-video.mp4';

export default class Section extends React.Component {

  render() {
    return (
      <section className="who">
        <div className="hero">
          <video id="heroVideo" width="100%" height="100%" src={movie} autoPlay={true} loop={true} mute={true}>
            <source src={movie} type="video/mp4" mute="true"/>
            Your browser does not support the video tag.
          </video>
          <span><img className="herologo" src={heroLogo} /></span>
        </div>

        <div className="copy">
          <h1>Who We Are</h1>
          <p>
          White Label MFG. is a full service and contract private label apparel supplier. Based in the United States and headquartered in Newport Beach, CA with locations in New York City and Milwaukee, WI where we design, produce and distribute private label apparel and accessories worldwide.
          <br></br> <br></br>
          We specialize in knits, with an emphasis on t-shirts and fleece, servicing all tiers and channels of retail including mass, specialty, department, value channel and ecommerce. We focus on speed to market, fast fashion and quick replenishment programs.
          </p>
        </div>
      </section>
    );
  }
}
