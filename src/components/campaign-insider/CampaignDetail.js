import React, { Component } from 'react'

class CampaignDetail extends Component {
  constructor(props) {
    super(props)
    this.state = {
      bulletPoints: []
    }
  }

  render() {
    return (
      <div className="row mt-5 pt-5 text-left">
        <div className="col-sm-4 col-md-3 col-lg-3 text-center">
          <p className="campaign-box text-left">
            C<strong>{this.props.campaignNumber}</strong>
          </p>
          <img src={this.props.campaignImg} className="img-responsive" alt="Campaign Insider" />
        </div>

        <div className="col-sm-8 col-md-9 col-lg-9 mt-5 mt-sm-5 mt-md-0">
          <h1 className="title-sub">{this.props.campaignProduct}</h1>
          <p className="lp"></p>
            <ul className="lp pl-4">
              {this.props.bulletPoints ? (
              this.props.bulletPoints.map((bullet, i) => {
                return <li key={i}>{bullet}</li>
              })
              ) : null }
            </ul>
          <p></p>
          {this.props.currentCampaign ? (
            <div className="m-top-s2">
              <a href={this.props.productEssentialsLink} target="_blank" rel="noopener noreferrer">Product Essentials</a>
            </div>
          ) : null }
        </div>
      </div>
    )
  }
}

export default CampaignDetail
