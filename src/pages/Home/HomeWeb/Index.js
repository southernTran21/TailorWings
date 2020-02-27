import React, { Component } from 'react'
import WelcomeSection from './WelcomeSection'
import PortfolioSection from './PortfolioSection'
import TailorSection from './TailorSection'
import ServiceSection from './ServiceSection'

export default class HomeWeb extends Component {
  render() {
    return (
      // <React.Fragment>
      <div>
        <WelcomeSection />
        <ServiceSection />
        <PortfolioSection />
        <TailorSection />
      </div>
      // </React.Fragment>
    )
  }
}