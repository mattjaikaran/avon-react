import React, { Component } from 'react'

import CampaignDetail from './CampaignDetail'
import CTA from './CTA'
import CampaignTitle from './CampaignTitle'

class NextCampaign extends Component {
  render() {
    const bulletOne = [
      'It’s full-on spring with our bright new floral: Sparkling notes of apple blossom, lively honeysuckle nectar and radiant vanilla orchid.',
      'Flourish on National Fragrance Day — March 21 only, everyone gets a free Avon Flourish travel spray when they purchase a full-size bottle for just $15.99. Head to Instagram and Facebook first thing on the 21st to get the offer code and share!'
    ]
    const bulletTwo = [
      'New Water Lily & Apple Blossom and Lotus & Cotton Flower',
      'Fresh, lush scents with premium fragrance oils.',
      'Intro offer prices for Mother’s Day gifts.'
    ]
    return (
      <React.Fragment>
        <CampaignTitle
          campaignTitle="Live Campaign 9"
          campaignDescription="Jump in to experience and share products for the upcoming campaign — C9 opens Wednesday, April 3."
        />
        <CampaignDetail
        campaignNumber="09"
        bulletPoints={bulletOne}
        campaignProduct="AVON FLOURISH HONEY BLOSSOM EAU DE PARFUM"
        campaignImg={require('../../images/c9-flourish-500x500-2.0.jpg')}
        />
        <CampaignDetail
        campaignNumber="09"
        bulletPoints={bulletTwo}
        campaignProduct="LIMITED EDITION MOTHER’S DAY BATH &amp; BODY COLLECTIONS"
        campaignImg={require('../../images/c9-mothersday-500x500-2.0.jpg')}
        />
        <CTA
          ctaLink="https://www.youravon.com/home/ordering/product-detail?dept_hiercy_id=1048&prod_detl_id=66375&inm=srch"
          btnText="Stock Up"
          />
      <hr className="m-top-s3" />
      </React.Fragment>
    )
  }
}

export default NextCampaign
