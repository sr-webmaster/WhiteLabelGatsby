import React from 'react';
import Carousel from '../../components/Carousel';
import vectorOnebefore from '../../img/print/vector1-before.png';
import vectorOneafter from '../../img/print/vector1-after.png';
import vectorTwobefore from '../../img/print/vector2-before.png';
import vectorTwoafter from '../../img/print/vector2-after.png';
import vectorThreebefore from '../../img/print/vector3-before.png';
import vectorThreeafter from '../../img/print/vector3-after.png';

export default class Section extends React.Component {

  render() {
    return (
      <section className="vectorizationTeam">
        <div className="header">
          <h1>Our Vectorization Team</h1>
        </div>
        {/* carousel wacks out with display flex */}
        <Carousel>
          {/* carousel wacks out when div is styled */}
          <div>
            <div className="content">
              <div className="before">
                <img src={vectorOnebefore} />
                <span>BEFORE</span>
              </div>
              <div className="after">
                <img src={vectorOneafter} />
                <span>AFTER</span>
              </div>
            </div>
          </div>
          <div>
            <div className="content">
              <div className="before">
                <img src={vectorTwobefore} />
                <span>BEFORE</span>
              </div>
              <div className="after">
                <img src={vectorTwoafter} />
                <span>AFTER</span>
              </div>
            </div>
          </div>
          <div>
            <div className="content">
              <div className="before">
                <img src={vectorThreebefore} />
                <span>BEFORE</span>
              </div>
              <div className="after">
                <img src={vectorThreeafter} />
                <span>AFTER</span>
              </div>
            </div>
          </div>
        </Carousel>
      </section>
    );
  }
}
