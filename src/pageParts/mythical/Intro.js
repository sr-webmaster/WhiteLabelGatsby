import React from 'react';
import hero from '../../img/mythical/hero.png';
import ShadowButton from '../../components/ShadowButton';
import numbers from '../../img/mythical/numbers.png';
import Modal from '../../components/Modal';

export default class Intro extends React.Component {

  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <section className="intro">
        <div className="copy">
          <h1>MYTHICAL</h1>
          <p>
    Mythical is an entertainment company, lifestyle brand, and creative collective made up of passionate people brought together by their love of comedy, camaraderie, and the do-it-yourself, direct-to-fan approach to content.
          </p>
        </div>
        <img src={hero} className="hero" />
        <img src={numbers} className="numbers" />
        <p className="needed">They needed an Apparel and Merchandise program capable of keeping up!</p>

        <div className="opportunity redbox">
          <h1>The Opportunity</h1>
          <p>Mythical needed a comprehensive partner to help innovate, develop, launch, and manage a complete merchandise solution inclusive of all brands and programs under the entertainment company’s umbrella. The Mythical team had already been experiencing fantastic success with their programs, and had a fanbase asking for more. They needed a partner capable of taking the same do-it-yourself, direct-to-fan approach that they had taken with content and applying those tactics to branded apparel and merchandise. </p>
        </div>

      </section>
    );
  }
}
