import React from 'react';
import circleArrows from '../../img/print/circleArrows.png';

const Date = props => (
  <div className="date">
    <div className="day">
      <div className="label">DAY</div>
      <div className="number">{props.day}</div>
    </div>
    <div className="blurb">{props.children}</div>
  </div>
);

export default class Section extends React.Component {

  render() {
    return (
      <section className="programManagement">
        <div className="top">
          <h1>Program Management</h1>
          <p>Process, examples, statistics, and additional solutions</p>
        </div>
        <div className="jobCycle">
          <div className="part1">
            <img className="cycleimg" src={circleArrows} />
            <h2>Typical Job Cycle</h2>
          </div>
          <div className="part2">
            <Date day="01">
              Receive Job(s) in our online portal, order
              blank goods from distributers, process art files for production.
            </Date>
            <Date day="02">
              Receive, count, sort and stage blank goods. Produce screens
              and schedule for production.
            </Date>
            <Date day="03">
              Print.
            </Date>
            <Date day="04">
              Product ship labels, pack orders, ship goods.
            </Date>
          </div>
        </div>
      </section>
    );
  }
}
