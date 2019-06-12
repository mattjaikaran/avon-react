import React, { Component } from 'react'

import HighFiveHeader from './HighFiveHeader'
import IntroParagraph from './IntroParagraph'
import Video from './Video'
import Tips from './Tips'
import SetupFundraiser from './SetupFundraiser'
import SpecialCustomerOffer from './SpecialCustomerOffer'
import TopSellers from './TopSellers'
import SpotlightingSuccess from './SpotlightingSuccess'
import Resources from './Resources'

class HighFive extends Component {
  render() {
    return (
      <div>
        <HighFiveHeader
          desktopSrc={require('../../images/high-five/header-desktop.jpg')}
          mobileSrc={require('../../images/high-five/header-mobile.jpg')}
          />
        <IntroParagraph />
        <Video videoSrc={require('../../images/high-five/video.png')} />
        <Tips />
        <SetupFundraiser
          desktopSrc={require('../../images/high-five/online-fundraiser-desktop.jpg')}
          mobileSrc={require('../../images/high-five/online-fundraiser-mobile.jpg')}
          paragraph="Did you know that setting up an Avon online fundraiser can help you hit a High 5 Online bonus? It’s so easy, and it’s doing some serious good! Just choose an organization you want to support. We’ll create a customized fundraising link on your online store with useful info about your chosen organization, and then you can start raising money!"
          cta="Start a Fundraiser"
          />
        <SpecialCustomerOffer
          desktopSrc={require('../../images/high-five/special-customer-offer-desktop.jpg')}
          mobileSrc={require('../../images/high-five/special-customer-offer-mobile.jpg')}
          month="June"
          code="GLAMNOW"
          />
        <TopSellers />
        <SpotlightingSuccess />
        <Resources />
      </div>
    )
  }
}

export default HighFive
