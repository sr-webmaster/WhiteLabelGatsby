import React from 'react';
import statScreen from '../../img/mythical/statScreen.png'
import star from '../../img/mythical/star.png'

const Star = () => (
  <img src={star} className="star" />
)

export default props => (
  <section className="stats">
    <div className="text">
      <div className="bigText">200,000 +</div>
      <div className="mediumText">Monthly web store visitors</div>
      <div className="smallText">
        <Star /> <Star /> <Star /> <Star /> <Star />
        <span>Customer Service</span>
      </div>
      <div className="stubLine"></div>
      <div className="mediumText">Conversion Rate: It's pretty good!</div>
      <div className="bigText">8.8% to be precise</div>
      <div className="smallText">3% is considered "good"</div>
    </div>
    <div className="screen">
      <img src={statScreen} />
    </div>
  </section>
)
