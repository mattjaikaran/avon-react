import React, { Component } from 'react'
import { Link } from 'react-router-dom'

class Incentive extends Component {
  state = {
    incentive: {
      id: 1,
      title: 'HIGH 5 ONLINE',
      campaignTime: '6/1 - 6/30',
      paragraph: 'Earn a $25 bonus for every 5 unique customers who place a $50+ order through your online store. They’ll have access to real-time inventory updates, free shipping, and a few little extras. All you need to do is keep sharing your online store with everyone you know! ',
      imgDesktopSrc: '../../images/incentives/high-five-desktop.png',
      imgMobileSrc: '../../images/incentives/high-five-mobile.png',
      flyerLink: 'http://youravon.com',
      flyerNewRep: '/',
      guide: '/',
      getDetails: '/',
    }
  }

  render() {
    const { id, title, campaignTime, paragraph, imgDesktopSrc, imgMobileSrc, flyerLink, flyerNewRep, guide, getDetails } = this.state.incentive
    return (
      <div>
        <div className="col-md-4" align="center" id={id}>
          <img src={imgDesktopSrc} className="img-responsive hidden-xs hidden-sm mt-5" alt={title} />
          <img src={imgMobileSrc} className="img-responsive visible-xs visible-sm" alt="High Five" />
          <h1 className="title-secondary mt-5">
            {title}
          </h1>
          <h1 className="title-sub">
            {campaignTime}
          </h1>
          <p className="lp text-left">
            {paragraph}
            <br />
            {flyerLink !== '' ? (
              <a href={flyerLink} target="_blank" rel="noopener noreferrer">Flyer</a>
            ) : null }
            <br />
            <a href={flyerNewRep} target="_blank" rel="noopener noreferrer">Flyer for New Representatives</a>
            <br />
            <a href={guide} target="blank" rel="noopener noreferrer">Guide</a>
            <br />
            <a href={getDetails}>Get Details</a>
          </p>
        </div>
      </div>
    )
  }
}

export default Incentive
