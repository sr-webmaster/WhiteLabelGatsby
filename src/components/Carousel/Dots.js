import React from 'react';

const Dot = props => (
  <a className={'dot' + (props.selected ? ' selected' : '')}></a>
);

class Dots extends React.Component {

  getIndexes() {
    const count = this.props.slideCount;
    const inc = this.props.slidesToScroll;
    const arr = [];
    for (let i = 0; i < count; i += inc) {
      arr.push(i);
    }
    return arr;
  }

  render() {
    return (
      <div className="dots">
        {this.getIndexes().map(i => (
          <Dot key={i} selected={this.props.currentSlide === i} />
        ))}
      </div>
    )
  }
}

export default Dots;
