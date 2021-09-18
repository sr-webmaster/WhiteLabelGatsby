import React from 'react';
import computer from '../../img/print/computer.png';

export default class Section extends React.Component {

  render() {
    return (
      <section className="orderManagement">
        <div className="text">
          <h1>Order Management Portal</h1>
          <p>
Development of a cloud-based production management and workflow software solution. From automated art preparation and production order assignment to fulfillment services, and in depth reporting, all aspects of program communication are successfully managed and tracked in a single location.
          </p>
        </div>
        <img src={computer} />
      </section>
    );
  }
}
