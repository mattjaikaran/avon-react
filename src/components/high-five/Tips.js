import React from 'react'

import TipsDetail from './TipsDetail'

const Tips = () => {
  return (
    <div className="m-top-s4 text-center">
      <h1 className="title-secondary">
        HERE’S A FEW TIPS TO GET YOU STARTED
      </h1>
      <div className="m-top-s3 row">
        <TipsDetail
          tipsDesktopImg={require('../../images/high-five/trending-product-desktop.jpg')}
          tipsMobileImg={require('../../images/high-five/trending-product-mobile.jpg')}
          title="SHARE A TOP TRENDING PRODUCT"
          paragraph="How about the Vitamin C serum? Offer a free deluxe sample (more than 1 use!) for the first 10 people to respond to your message whether via social, text, or email."
          />
        <TipsDetail
          tipsDesktopImg={require('../../images/high-five/ask-your-friends-desktop.jpg')}
          tipsMobileImg={require('../../images/high-five/ask-your-friends-mobile.jpg')}
          title="ASK YOUR FRIENDS FOR A REFERRAL"
          paragraph="You have friends that love our products. Ask about their friends who may need some new products. You can help—and it’s a great way to expand your social circle!"
          />
        <TipsDetail
          tipsDesktopImg={require('../../images/high-five/online-store-perks-desktop.jpg')}
          tipsMobileImg={require('../../images/high-five/online-store-perks-mobile.jpg')}
          title="POST ABOUT YOUR ONLINE STORE PERKS"
          paragraph="Spread the word on social about the benefits of your online store—from real-time inventory to next-day delivery options to free shipping on $40+ orders, and so much more!"
          />
      </div>
      <hr className="m-top-s4" />
    </div>
  )
}

export default Tips
