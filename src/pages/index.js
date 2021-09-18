import React from 'react'
import '../scss/index/index.scss'
import * as Index from '../pageParts/index'

export default () => (
  <div className="index">
    <Index.Who />
    <Index.What />
    <Index.Results />
    <Index.How />
    <Index.Contact />
  </div>
)
