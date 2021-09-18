import React from 'react';
import close from '../img/closeIcon.png';

export default (props) => (
  <div className={'modal' + (props.open ? ' open' : '')}>
    <div className="container">
      <img className="close" onClick={props.onClose} src={close}></img>
      <div className={props.className || 'content'}>
        {props.children}
      </div>
    </div>
  </div>
)
