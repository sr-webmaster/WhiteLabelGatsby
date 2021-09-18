import React from 'react'
import '../scss/print/index.scss'
import * as Print from '../pageParts/print'

export default () => (
  <div className="print">
    <Print.Intro />
    <Print.Challenges />
    <Print.Facts />
    <Print.Results />
    <Print.ProgramManagement />
    <Print.OrderManagement />
    <Print.VectorizationTeam />
    <Print.Shirts />
    <Print.AverageProductivity />
  </div>
)
