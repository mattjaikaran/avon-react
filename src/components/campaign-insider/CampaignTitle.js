import React, { Component } from 'react'

class CampaignTitle extends Component {
  render() {
    return (
      <div className="m-top-s3">
        <h1 className="title">{this.props.campaignTitle}</h1>
        <p className="lp">
          {this.props.campaignDescription}
        </p>
      </div>
    )
  }
}

export default CampaignTitle
