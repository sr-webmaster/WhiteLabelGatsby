import React from 'react'
import ReactDOM from 'react-dom'

export default class ShadowButton extends React.Component {
  render() {
    return (
      <a href="#" className="shadowButton" onClick={this.props.onClick}>
        {this.props.children}
        <span className="bg-effect"></span>
      </a>
    )
  }
}
