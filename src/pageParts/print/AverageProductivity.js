import React from 'react';

const Item = (props) => (
  <div className="item">
    <div className="number">{props.number}</div>
    <div className="text">{props.children}</div>
  </div>
);

export default class Section extends React.Component {

  render() {
    return (
      <section className="averageProductivity">
        <h1>High Volume Art File Processing</h1>
        <div className="numbers">
          <Item number="378">
            Art files delivered daily
          </Item>
          <Item number="1,385">
            Art files delivered in a single day
          </Item>
          <Item number="1,892">
            Average of 1,892 art files prepared and delivered weekly
          </Item>
          <Item number="19,251">
            Individual art files delivered in a single month
          </Item>
        </div>
      </section>
    );
  }
}
