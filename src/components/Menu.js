import React from 'react'
import ReactDOM from 'react-dom'
import logo from '../img/logo2.png'
import MenuIcon from 'mdi-react/MenuIcon'
import CloseIcon from 'mdi-react/CloseIcon'
import Link from 'gatsby-link'

import dispatcher from '../utils/dispatcher';

const elementMapping = {
  who: '.index .who .copy h1',
  what: '.index .what h1',
  how: '.index .how h1',
  contact: '.index .contact .places'
};

export default class Menu extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      open: false
    };
  }

  componentDidMount() {
    dispatcher.on('toggle-menu', (val) => {
      this.toggle(val);
    })
  }

  _onClick = (ev) => {
    this.toggle(false);
    let hash = ev.target.href.split('#').pop();

    setTimeout(() => {
      let item = eval('document').querySelector(elementMapping[hash]);
      if (!item) return;
      let rect = item.getBoundingClientRect();
      eval('window').scroll({ top: 0, left: 0});
      setTimeout(() => {
        eval('window').scroll({
          top: rect.y - 100,
          left: 0,
          behavior: 'smooth'
        });
      }, 250)
    }, 250);
  }

  toggle = (val) => {
    if (typeof val === 'boolean')
      this.setState({ open: val });
    else
      this.setState({ open: !this.state.open });
  }

  render() {
    return (
      <div className={'menu ' + (this.state.open ? 'open' : '')}>
        <Link onClick={() => this.toggle(false)} className="logo" to="/"><img src={logo} /></Link>
        <MenuIcon className="hamburger" onClick={this.toggle} />
        <CloseIcon className="close" onClick={this.toggle} />
        <nav>
          <Link to="/#who" className="who" onClick={this._onClick}>WHO</Link>
          <Link to="/#what" className="what" onClick={this._onClick}>WHAT</Link>
          <Link to="/#how" className="how" onClick={this._onClick}>HOW</Link>
          <Link className="work" to="/work" onClick={() => this.toggle(false)}>WORK</Link>
          <a className="blog" href="http://blog.whitelabelmfg.com/">BLOG</a>
          <Link className="contact" to="/contact" onClick={() => this.toggle(false)}>START A PROJECT</Link>
        </nav>
      </div>
    )
  }
}
