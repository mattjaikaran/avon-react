import React, { Component } from 'react'

import IntroCopy from './IntroCopy'
import IntroVideo from './IntroVideo'
import CurrentCampaign from './CurrentCampaign'
import NextCampaign from './NextCampaign'
import FollowingCampaign from './FollowingCampaign'

class CampaignInsider extends Component {
  render() {
    return (
      <div>
        <IntroCopy currentCampaign="C8" />
        <IntroVideo />
        <CurrentCampaign />
        <NextCampaign />
        <FollowingCampaign />
      </div>
    )
  }
}

export default CampaignInsider
