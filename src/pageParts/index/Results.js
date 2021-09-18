import React from 'react';
import hero from '../../img/print/automatic-screen-printing-machine-producing-tshirts.jpg';
import logo from '../../img/print/print-on-demand-ecommerce-platform-white-label-solution.png';
import Link from 'gatsby-link';
import Carousel from '../../components/Carousel';
import subLogo from '../../img/print/white-label-mfg-apparel-garment-solutions.png';
import thingsToConsider from '../../img/360-approach-design-development-production-delivery.jpg';

const Stat = (props) => (
  <div className="stat">
    <div className="number">{props.number}</div>
    <div className="blurb">{props.blurb}</div>
  </div>
);

export default class Section extends React.Component {

  render() {
    return (
      <section className="results">

        <h1>How We Do It</h1>
          <img className="thingsToConsider" src={thingsToConsider} />

        <h1>Results</h1>
        <div className="stats">
          <Stat number="580K" blurb="Units produced in a week, 1.9 units per second." />
          <Stat number="35K" blurb="Developer hours on systems & integrations, equal to 4 years time." />
          <Stat number="60K" blurb="Individual orders shipped in a single day, no joke." />
          <Stat number="6.8K" blurb="Gallons of ink consumed in a year, enough to fill 40 hot tubs." />
          <Stat number="30M" blurb="Feet of embroidery thread sewn, distance from Los Angeles to London." />
          <Stat number="128K" blurb="Art files processed, equal to two terabytes of information." />
          <Stat number="10.8B" blurb="Miles our direct to consumer packages have traveled, equal to 7 round trips from Earth to Saturn." />
          <Stat number="14K" blurb="Retail doors shipped." />
          <Stat number="4.5M" blurb="Number of SKU's managed, whoa!" />
          <Stat number="85T" blurb="Tons of boxes recycled each year, or the weight of 150 grizzly bears." />
        </div>
      </section>
    );
  }
}
