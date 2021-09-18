import React from 'react';
import LeftIcon from 'react-icons/lib/md/chevron-left';

export default (props) => (
  <a className="leftArrow" onClick={props.onClick}><LeftIcon /></a>
);
