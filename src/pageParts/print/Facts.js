import React from 'react';
import hero from '../../img/print/automatic-screen-printing-machine-producing-tshirts.jpg';
import logo from '../../img/print/print-on-demand-ecommerce-platform-white-label-solution.png';
import Link from 'gatsby-link';
import Carousel from '../../components/Carousel';
import subLogo from '../../img/print/white-label-mfg-apparel-garment-solutions.png';

export default class Section extends React.Component {

  render() {
    return (
      <section className="facts">
        <div className="header">
          <img src={subLogo} className="headerImage" />
        </div>
        <Carousel>
          <div className="copy">
            <p>
              Establishment of nationwide vendor network to cover production needs from 1 unit - 80,000 unit orders within 3 - 5 day turnaround.
            </p>
          </div>
          <div className="copy">
            <p>
              Redesign / restructuring of White Label MFG. production facilities to accommodate 10X+ increase in unique jobs throughout all departments (receiving, art, screen, production, fulfillment)
            </p>
          </div>
          <div className="copy">
            <p>
              Development of new processes, equipment and software solutions inclusive of DTC fulfillment capabilities to accommodate 10’s of thousands of individual shipments daily.
            </p>
          </div>
          <div className="copy">
            <p>
              Development of specialized software to manage and execute on new programs of massive scale and the complexities of hundreds of jobs / individual art files, thousands of garments of varying styles being sourced from multiple vendors and delivered the next day.
            </p>
          </div>
          <div className="copy">
            <p>
              Development of workflow process for print vendors, wireframes for communications and production portal for increased visibility into production facilities, standardized data, etc.
            </p>
          </div>
          <div className="copy">
            <p>
              Development of substitution protocols for like kind garments (significant issues in scaling at this speed were holes in available styles, colors, sizes and SKUs).
            </p>
          </div>
          <div className="copy">
            <p>
              Development and production of all specialty print and custom labeled product, allowing clients to partner with and sell to a wider range of clients.
            </p>
          </div>
          <div className="copy">
            <p>
              White Label MFG. developed a diverse supply chain of specialized production facilities across the country and negotiated contracts with garment distributors, shipping carriers and packaging suppliers.
            </p>
          </div>
        </Carousel>
      </section>
    );
  }
}
