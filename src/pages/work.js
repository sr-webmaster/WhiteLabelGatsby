import React from 'react'
import '../scss/work.scss'
import Link from 'gatsby-link'

export default () => (
  <div className="workPage">
    <Link to="/mythical">
      <h1><span>Mythical</span></h1>
    </Link>
    <Link to="/print">
      <h1><span>Print on Demand</span></h1>
    </Link>
  </div>
)
