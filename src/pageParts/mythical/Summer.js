import React from 'react';
import summerLogo from '../../img/mythical/summerLogo.png'
import palmTrees from '../../img/mythical/palmTrees.png'
import fuckingHonkingImage from '../../img/mythical/fuckingHonkingImage.png'

export default props => (
  <section className="summer">
    <div className="top">
      <img className="palmTrees" src={palmTrees} />
      <div className="container">
        <img className="summerLogo" src={summerLogo} />
        <span>Seasonal Collection</span>
      </div>
    </div>
    <img className="big" src={fuckingHonkingImage} />
  </section>
)
