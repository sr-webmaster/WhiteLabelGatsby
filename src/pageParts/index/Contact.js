import React from 'react'
import world from '../../img/white-label-garment-manufacturing-production-office-warehouse-factory-map.png';
import yellowDot from '../../img/white-label-warehouse-icon.png';
import blueDot from '../../img/white-label-custom-apparel-office-icon.png';
import grayDot from '../../img/white-label-garment-manufacturing-factory-icon.png';
import program from '../../img/custom-screen-printed-tshirt-on-dryer-belt.jpg';
import contactButton from '../../img/contact_button.png';

const Areas = (props) => (
  <div className="areas">
    {props.children}
  </div>
);

const Places = (props) => (
  <div className="places">
    <div className="header">
      <img src={props.image} /> <span>{props.label}</span>
    </div>
    {props.children}
  </div>
);

const Place = (props) => (
  <div className="place">
    <div className="label"><h3>{props.label}</h3></div>
    <div className="small">{props.small}</div>
  </div>
);

export default (props) => (
  <section className="contact">
    <h2 className="global">Global Reach</h2>
    <img src={world} className="world" />
    <Areas>
      <Places image={yellowDot} label="Warehouse">
        <Place label="Domestic" small="Southern California & Wisconsin" />
        <Place label="International" small="Prague, Czech Republic" />
      </Places>
      <Places image={blueDot} label="Office">
        <Place label="Domestic" small="Southern California, New York" />
        <Place label="International" small="Santa Fe, Argentina & Shanghai, China" />
      </Places>
      <Places image={grayDot} label="Factory">
        <Place label="Domestic" small="Southern California, & Wisconsin" />
        <Place label="International" small="Mexico, Central America, China, Pakistan, Vietnam & Caribbean" />
      </Places>
    </Areas>

    <div className="tees">
      <div className="overlay">
        <span>Let's talk about your program!<br /><br /><a href="https://whitelabelmfg.typeform.com/to/tj0uQ3"><img src={contactButton} className="contact_button" /></a></span>

      </div>
      <img src={program} />
    </div>

  </section>
)
