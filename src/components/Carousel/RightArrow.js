import React from 'react';
import RightIcon from 'react-icons/lib/md/chevron-right';

export default (props) => (
  <a className="rightArrow" onClick={props.onClick}><RightIcon /></a>
);
