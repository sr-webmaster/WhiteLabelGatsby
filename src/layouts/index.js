import React from 'react'
import PropTypes from 'prop-types'
import Helmet from 'react-helmet'
import Menu from '../components/Menu'
import Footer from '../components/Footer'
import '../scss/main.scss'

class TemplateWrapper extends React.Component {

  componentDidMount() {
    if (!eval('window')) return;

    this.addScript('https://www.googletagmanager.com/gtag/js?id=UA-119718497-1', () => {
      window.dataLayer = window.dataLayer || [];
      function gtag(){dataLayer.push(arguments);}
      gtag('js', new Date());
      gtag('config', 'UA-119718497-1');
    });

  }

  addScript(src, onload) {
    const script = document.createElement('script');
    script.onload = onload;
    script.src = src;
    document.getElementsByTagName('head')[0].appendChild(script);
  }

  render() {
    return (
        <div>
        <Helmet
          title="Whitelabel"
          meta={[
            { name: 'robots', content: 'index' },
            { name: 'description', content: 'Private label knit manufacturer. Graphic T-shirts, sweatshirts and accessories. Screen print, DTG, custom fits, colors, washes and treatments. Bulk retail or direct to consumer fulfillment.' },
            { name: 'keywords', content: 'Screen printed t-shirts orange county, full package t-shirt orange county, t-shirt store orange county, cut and sew t-shirt orange county, custom t-shirts orange county, custom color t-shirts orange county, graphic t-shirt supplier orange county, screen printed tees orange county, custom tees orange county, custom color tees orange county, cut and sew tees orange county, screen printed sweatshirts orange county, screen printed hoodies orange county, cut and sew hoodies orange county, cut and sew sweatshirts orange county, custom color sweatshirts orange county, custom color hoodies orange county, screen printed t-shirt fulfillment orange county, print on demand tees orange county, print on demand t-shirts orange county, DTG printed t-shirts orange county, DTG printed sweatshirts orange county, DTG printed hoodies orange county, DTG fulfillment orange county, custom apparel production orange county, private label t-shirts orange county, private label sweatshirts orange county, private label hoodies orange county, allover printed t-shirts orange county, custom tie-dye t-shirts orange county, custom t-shirt blanks orange county, cut and sew t-shirt blanks orange county, custom color t-shirt blanks orange county, custom t-shirt manufacturer orange county' },
          ]}
        />
        <Menu />
        {this.props.children()}
        <Footer />
      </div>
    )
  }
}

TemplateWrapper.propTypes = {
  children: PropTypes.func,
}

export default TemplateWrapper
