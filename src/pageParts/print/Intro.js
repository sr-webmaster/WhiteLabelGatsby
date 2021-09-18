import React from 'react';
import hero from '../../img/print/automatic-screen-printing-machine-producing-tshirts.jpg';
import logo from '../../img/print/print-on-demand-ecommerce-platform-white-label-solution.png';
import Link from 'gatsby-link';
import Modal from '../../components/Modal';

export default class Section extends React.Component {

  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <section className="intro">

        <div className="heroContainer">
          <img className="hero" src={hero} />
          <div className="logoContainer">
            <img className="logo" src={logo} />
          </div>
        </div>

        <div className="copy">
          <h1>Introduction</h1>
          <p>
In early 2012, a new type of business model emerged online. Print On Demand Ecommerce Platforms are marketplaces that allow individuals to design, produce, market and sell a select variety of products differentiated by custom designs, graphic prints and other embellishment capabilities.
          </p>
          <a href="#" onClick={(ev) => {
            ev.preventDefault();
            this.setState({ modalOpen: true });
          }} className="readMore">Read More</a>
        </div>

        <Modal open={this.state.modalOpen} onClose={() => this.setState({ modalOpen: false })}>
          <p>Huge success was had once internet marketers caught onto the power of these platforms to sell basic apparel with a message directly targeted at a demographic of their choosing. Sales on these platforms skyrocketed due to powerful targeted marketing campaigns. Some of these newcomer platforms melted away under the sheer volume and pressure of unpredictable demand and those who remained to reap the benefits had their work cut out for them. The emerging industry leaders needed immediate support to maintain growth and scale their businesses to meet the increasing and diversified demand of their customers. It was White Label MFG. that recognized the potential of these programs and saw the challenges they faced as an opportunity to leverage their core capability as problem solvers. White Label MFG quickly became a leader in the newly established industry as a backend production, fulfillment and strategy partner.</p>
        </Modal>

      </section>
    );
  }
}
