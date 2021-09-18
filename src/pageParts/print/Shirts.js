import React from 'react';
import shirts from '../../img/print/product-on-demand.jpg';

export default class Section extends React.Component {

  render() {
    return (
      <section className="shirts">
        <img src={shirts} />
      </section>
    );
  }
}
