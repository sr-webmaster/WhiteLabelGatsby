import React from 'react';
import hero from '../../img/print/automatic-screen-printing-machine-producing-tshirts.jpg';
import logo from '../../img/print/print-on-demand-ecommerce-platform-white-label-solution.png';
import Link from 'gatsby-link';
import Carousel from '../../components/Carousel';
import subLogo from '../../img/print/white-label-mfg-apparel-garment-solutions.png';

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
        <h1>Results</h1>
        <div className="stats">
          <Stat number="12M" blurb="Units produced by White Label MFG since Q4 2013" />
          <Stat number="60K" blurb="Individual orders in a day across our 3 facilities" />
          <Stat number="10.9K" blurb="Individual / direct to consumer shipments (picked, packed, shipped)" />
          <Stat number="50M" blurb="Total Print on Demand Ecommerce (Wholesale)" />
          <Stat number="120K" blurb="Different jobs (different designs / artwork / print styles)" />
          <Stat number="$300M" blurb="Total Print on Demand Ecommerce GMV (Gross Merchandise Value)" />
          <Stat number="12.5M" blurb="Branded poly mailers provided over 2.5 year period" />
          <Stat number="38%" blurb="38% savings on packaging from previous vendor" />
          <Stat number="16" blurb="Packaging distributed to 16 different locations across the U.S." />
          <Stat number="25%" blurb="Transition from overseas provider to in house domestic source resulted in lead time reduction (12 weeks to 4 weeks)" />
        </div>
      </section>
    );
  }
}
