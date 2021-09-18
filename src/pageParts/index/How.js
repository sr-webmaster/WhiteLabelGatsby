import React from 'react'
import ImageGallery from 'react-image-gallery';

import solution00 from '../../img/carousel/close-up-garment-cotton-thread-knitting-machine-in-factory.jpg';
import solution01 from '../../img/carousel/embroidery-machines-with-colorful-thread.jpg';
import solution02 from '../../img/carousel/artwork-seperation-of-woman-with-alternative-reality-headset-in-photoshop.jpg';
import solution03 from '../../img/carousel/shelf-of-rutlan-screen-print-inks-buckets-of-shades-of-purple-blue.jpg';
import solution04 from '../../img/carousel/big-fabric-dying-machine-wash-containers.jpg';
import solution05 from '../../img/carousel/man-scanning-boxes-packages-in-warehouse-aisle.jpg';
import squiggle from '../../img/white-label-thread-logo.png';

const Items = (props) => (
  <div className="items">
    {props.children}
  </div>
);

const Item = (props) => (
  <div className="item">
    <img src={props.img} />
    <span>{props.label}</span>
  </div>
);

export default (props) => (
  <section className="how">
    <ImageGallery
      autoPlay={true}
      showFullscreenButton={false}
      showPlayButton={false}
      showThumbnails={false}
      useBrowserFullscreen={false}
      slideDuration={400}
      slideInterval={5000}
      items={[
        {
          original: solution00,
          thumbnail: solution00,
          description: 'One source for a complete solution.'
        },
        {
          original: solution01,
          thumbnail: solution01,
          description: 'One source for a complete solution.'
        },
        {
          original: solution02,
          thumbnail: solution02,
          description: 'One source for a complete solution.'
        },
        {
          original: solution03,
          thumbnail: solution03,
          description: 'One source for a complete solution.'
        },
        {
          original: solution04,
          thumbnail: solution04,
          description: 'One source for a complete solution.'
        },
        {
          original: solution05,
          thumbnail: solution05,
          description: 'One source for a complete solution.'
        },
      ]}/>

      </section>

    /*{
    <div className="trains">
      <h2>Trains</h2>
      <Items>
        <Item img={sourcing} label="Sourcing" />
        <Item img={manufacturing} label="Manufacturing" />
        <Item img={production} label="Production" />
        <Item img={logistics} label="Logistics" />
      </Items>
    </div>

    <div className="blurb">
      <img src={squiggle} className="squiggle" />
      <div>Vertically Integrated</div>
      <p>A single source for a complete merchandise solution</p>
    </div>
    }*/


)
