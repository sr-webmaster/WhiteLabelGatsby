import React from 'react';
import hero from '../../img/print/automatic-screen-printing-machine-producing-tshirts.jpg';
import logo from '../../img/print/print-on-demand-ecommerce-platform-white-label-solution.png';
import Link from 'gatsby-link';
import Carousel from '../../components/Carousel';
import subLogo from '../../img/print/white-label-mfg-apparel-garment-solutions.png';

const Day = props => (
  <div className="day">
    <div className="label">{props.label}</div>
    <div className="text">{props.text}</div>
  </div>
)

export default class Section extends React.Component {

  render() {
    return (
      <section className="productProcess">
        <div className="container">
          <div className="content1">
            <h1>New Product Process:</h1>
            <p>The majority of products developed for this mythical client goes from being an idea discussed over a phone call to being fully designed, produced and set up in our fulfillment center within 1 - 2 weeks time. We act fast, think on our feet and move quickly to keep up with this client’s steady flow of great ideas.</p>
          </div>
          <div className="content2">
            <div className="header">
              <div className="number">
                <span>1</span>
              </div>
              <div className="label">Week</div>
            </div>
            <Day label="Mon." text="Weekly call - new idea" />
            <Day label="Tues." text="Design / Concept / Review" />
            <Day label="Wed." text="Sample Production + Approval" />
            <Day label="Thurs." text="Production + add to ecommerce" />
            <Day label="Fri." text="Fulfilling orders" />
          </div>
        </div>
      </section>
    );
  }
}
