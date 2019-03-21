import React, { Component } from 'react'

import CampaignDetail from './CampaignDetail'
import CTA from './CTA'
import CampaignTitle from './CampaignTitle'

class FollowingCampaign extends Component {
  render() {
    const bulletOne = [
      'Anew Vitamin C Serum: Brightens skin instantly with as much Vitamin C as in 30 oranges.',
      'Anew Vitamin C Warming Peel: Invigorating, exfoliating peel opens pores to remove impurities.',
      'Anew Vitamin C Antioxidant Lip Treatment: Visibly plumps and smooths with Vitamins C and E. Free with any 2 Vitamin C demo purchases (regularly $7.99).',
      'Special demo offer: Earn 50% + free products with each demo bundle.'
    ]
    return (
      <React.Fragment>
        <CampaignTitle
          campaignTitle="Live Campaign 10"
          campaignDescription="Get your hands on amazing products early with C10 What’s New and order demos, samples, and exclusive Representative offers."
        />
        <CampaignDetail
        campaignNumber="10"
        bulletPoints={bulletOne}
        campaignProduct="ANEW VITAMIN C COLLECTION"
        campaignImg={require('../../images/c9-flourish-500x500-2.0.jpg')}
        />
        <CTA
          ctaLink="https://www.youravon.com/home/ordering/product-detail?dept_hiercy_id=1050&prod_detl_id=66618&inm=srch"
          btnText="Get The Scoop"
          />
      <hr className="m-top-s3" />
      </React.Fragment>
    )
  }
}

export default FollowingCampaign
