import React from 'react'
import squiggle from '../img/whiteSquiggle.png'
import Twitter from 'react-icons/lib/fa/twitter';
import Facebook from 'react-icons/lib/fa/facebook';
import Instagram from 'react-icons/lib/fa/instagram';

export default (props) => (
  <footer>

    <div className="top">
      <a className="logo"><img src={squiggle} /></a>
      <div className="social">
        <a href="http://twitter.com/whitelabelmfg" target="_blank"><Twitter /></a>
        <a href="http://facebook.com/whitelabelmfg" target="_blank"><Facebook /></a>
        <a href="http://instagram.com/whitelabelmfg" target="_blank"><Instagram /></a>
      </div>
    </div>


    <div className="bottom">
      <a className="company">White Label MFG.</a>
      <span className="rights">All Rights Reserved</span>
      <a className="contact" href="https://whitelabelmfg.typeform.com/to/tj0uQ3">Contact</a>
      <a className="contact" href="https://secure-wms.com/PresentationTier/LoginForm.aspx?3pl=%7B74065421-1f5c-4e1a-af12-ab84e048fa14%7D" target="_blank">Fullfillment Login</a>
    </div>

  </footer>
)
