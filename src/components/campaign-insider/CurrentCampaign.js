import React, { Component, Fragment } from 'react'

import CampaignDetail from './CampaignDetail'
import CTA from './CTA'
import CampaignTitle from './CampaignTitle'

class CurrentCampaign extends Component {
  constructor(props) {
    super(props)
    this.state = {
      bulletPoints: []
    }
  }

  render() {
    const bulletOne = [
      'Incredible stay-all-day, high-impact eyeshadows',
      'Infinite glam: The perfect mix of pearl and glitter.',
      'No-smudge, no-crease shimmer glides on, dries down smoothly for glistening color or glittery wow.',
      'Build it! Layer for intense impact or blend out for a delicate effect.'
    ]
    const bulletTwo = [
      'This is intense! 8 new intensified shades in a bold, sparkly finish.',
      '10 hours of shimmery, long-wearing color.',
      'Define your lines, combine colors, snap pics and post photos on social!'
    ]
    return (
      <Fragment>
        <CampaignTitle
          campaignTitle="Love Campaign 8"
        />

        <p>
          Order your faves and your customers’ picks — Campaign 8 ends 5 p.m. ET Tuesday, April 2.
        </p>
        <p>
          See all campaign dates on the <a href="https://www.youravon.com/home/campaign-insider/campaign-selling-calendar">campaign selling calendar</a>.
        </p>

        <CampaignDetail
        campaignNumber="08"
        currentCampaign={true}
        bulletPoints={bulletOne}
        productEssentialsLink="https://www.youravon.com/home/campaign-insider/2019/c8/glimmershadow-liquid-eyeshadow"
        campaignProduct="NEW GLIMMERSHADOW LIQUID EYESHADOW"
        campaignImg={require('../../images/c8-glimmershadow-500x500-2.0.jpg')}
        />
        <CampaignDetail
        campaignNumber="08"
        currentCampaign={true}
        bulletPoints={bulletTwo}
        productEssentialsLink="https://www.youravon.com/home/campaign-insider/2019/c8/avon-true-color-glimmersticks-metallic-eye-liners"
        campaignProduct="NEW AVON TRUE COLOR GLIMMERSTICKS METALLIC EYE LINERS"
        campaignImg={require('../../images/c8-glimmersticks-500x500-2.0.jpg')}
        />
      <CTA
        ctaLink="https://www.youravon.com/home/ordering/product-detail?dept_hiercy_id=510&prod_detl_id=66509&inm=srch"
        btnText="Get Yours"
        />
      <hr className="m-top-s3" />
      </Fragment>
    )
  }
}

export default CurrentCampaign
