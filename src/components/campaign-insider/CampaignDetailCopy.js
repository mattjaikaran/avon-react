import React, { Component } from 'react'
import { Link } from 'react-router-dom'

class CampaignDetail extends Component {
  constructor(props) {
    super(props)
    this.state = {
      bulletPoints: []
    }
  }
  render() {
    return (
      <div class="col-sm-8 col-md-9 col-lg-9 mt-5 mt-sm-5 mt-md-0">
        <h1 class="title-sub">{this.props.currentCampaignProduct}</h1>
        <p class="lp"></p>
          <ul class="lp pl-4">
            <li>
              <p>Incredible stay-all-day, high-impact eyeshadows</p>
            </li>
            <li>
              <p>Infinite glam: The perfect mix of pearl and glitter. </p>
            </li>
            <li>
              <p>No-smudge, no-crease shimmer glides on, dries down smoothly for glistening color or glittery wow.</p>
            </li>
            <li>
              <p>Build it! Layer for intense impact or blend out for a delicate effect.</p>
            </li>
          </ul>
        <p></p>
        <div class="m-top-s2">
          <Link to="/home/campaign-insider/2019/c8/glimmershadow-liquid-eyeshadow" target="_blank">Product Essentials</Link>
        </div>
      </div>
    )
  }
}

export default CampaignDetail
