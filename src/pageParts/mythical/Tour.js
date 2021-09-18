import React from 'react';
import mythicalContent from '../../img/mythical/mythicalityContent.png'
import tourLogo from '../../img/mythical/tourLogo.png'

export default props => (
  <section className="tour">
    <img className="tourLogo" src={tourLogo} />
    <div className="title">Tour Merchandise + Fulfillment</div>
    <div className="description">Inventory management, on-demand production and drop-ship replenishment orders to keep up with live event sales.</div>
    <img className="content" src={mythicalContent} />
  </section>
)
