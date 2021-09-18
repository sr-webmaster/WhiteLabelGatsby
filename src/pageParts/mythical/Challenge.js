import React from 'react';
import hero from '../../img/print/automatic-screen-printing-machine-producing-tshirts.jpg';
import logo from '../../img/print/print-on-demand-ecommerce-platform-white-label-solution.png';
import Link from 'gatsby-link';
import Carousel from '../../components/Carousel';
import subLogo from '../../img/print/white-label-mfg-apparel-garment-solutions.png';

export default class Section extends React.Component {

  render() {
    return (
      <section className="challenge">
        <div className="header">
          <h1>The Challenge</h1>
          <p>
            Mythicals biggest challenge was locating a single vendor capable of satisfying the following list of requirements:
          </p>
        </div>
        <Carousel>
          <div className="copy">
            <p>
            Providing more creative control over product and overall brand identity with minimal management / hand holding
            </p>
          </div>
          <div className="copy">
            <p>
            Increase in profit margins (always nice)
            </p>
          </div>
          <div className="copy">
            <p>
            The ability to cater to a diverse, sometimes odd, and highly customizable product offering
            </p>
          </div>
          <div className="copy">
            <p>
            Manage collaborations and brand partnerships
            </p>
          </div>
          <div className="copy">
            <p>
            Integration and fulfillment of 3rd party products / partnerships as part of a comprehensive merchandise program
            </p>
          </div>
          <div className="copy">
            <p>
            Product ideation + design resources available when necessary
            </p>
          </div>
          <div className="copy">
            <p>
            Program strategy + ideation
            </p>
          </div>
          <div className="copy">
            <p>
            Inventory management / logistics
            </p>
          </div>
          <div className="copy">
            <p>
            Premium retail quality, presentation, and packaging
            </p>
          </div>
          <div className="copy">
            <p>
            Capitalize on viral social trends requires Just-in-Time production capabilities
            </p>
          </div>
          <div className="copy">
            <p>
            Maximize consumer engagement through content focused product
            </p>
          </div>
          <div className="copy">
            <p>
            Continual product drops yield higher conversions to keep product offering fresh and relevant
            </p>
          </div>
          <div className="copy">
            <p>
            Support in reduction of  inventory risk, increase speed to market, and add substantial variety to product offering
            </p>
          </div>
          <div className="copy">
            <p>
            Properly priced “anchor” items produced in bulk to achieve optimal margin and ensure availability
            </p>
          </div>
          <div className="copy">
            <p>
            Situational drops of premium items with limited quantities to create urgency and demand
            </p>
          </div>
          <div className="copy">
            <p>
            Logistical support for touring, events and shows
            </p>
          </div>
          <div className="copy">
            <p>
            Effectively extend the brands reach into the homes and daily lives of fans everywhere
            </p>
          </div>
        </Carousel>
      </section>
    );
  }
}
