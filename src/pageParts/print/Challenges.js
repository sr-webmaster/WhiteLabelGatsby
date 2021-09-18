import React from 'react';
import hero from '../../img/print/automatic-screen-printing-machine-producing-tshirts.jpg';
import logo from '../../img/print/print-on-demand-ecommerce-platform-white-label-solution.png';
import Link from 'gatsby-link';
import Carousel from '../../components/Carousel';
import subLogo from '../../img/print/white-label-mfg-apparel-garment-solutions.png';

export default class Section extends React.Component {

  render() {
    return (
      <section className="challenges">
        <div className="header">
          <h1>Challenges</h1>
        </div>
        <Carousel>
          <div className="copy">
            <p>
            Print on demand ecommerce platforms operate under a pre sale model that requires quick turn  production and direct to consumer fulfillment within 5 days of campaign close.
            </p>
          </div>
          <div className="copy">
            <p>
            Though these programs ensure high volume, exact numbers are not predetermined and require immediate sourcing and production combined with complex diversification requirements in print and garment style.
            </p>
          </div>
          <div className="copy">
            <p>
            A capable partner and cohesive vendor network for this type of business did not exist.
            </p>
          </div>
          <div className="copy">
            <p>
            There was no existing process or technology to produce and fulfill at this volume for items that had already sold.
            </p>
          </div>
          <div className="copy">
            <p>
            Independent vendors enticed by volume were incapable of breaking up work loads to facilitate the diversification of designs (individual jobs) being submitted daily.
            </p>
          </div>
          <div className="copy">
            <p>
            Most vendors were incapable of adapting to this style of quick turn production or unwilling to put in the work as they didn’t see the potential for this style of ecommerce to transform the space.
            </p>
          </div>
        </Carousel>
      </section>
    );
  }
}
