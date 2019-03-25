import React, { Component } from 'react'

class IntroCopy extends Component {
  constructor(props) {
    super(props)
    this.state = {
      copy: '',
      editorState: null
    }
  }

  render() {
    return (
      <div className="m-top-s1">
        <h1 className="title">CAMPAIGN INSIDER</h1>
        <h1 className="title-secondary">{this.props.currentCampaign}</h1>
        <div className="m-top-s3">
          <hr className="my-5" />
          <p className="lp blurb">
            Glimmer up and go ‘gram crazy in C8 with our new ultra-glam Glimmershadow Liquid Eyeshadow and Glimmersticks Metallic Eye Liners. Spotlight unlimited looks on all your socials with your online store link. Spread the sunshine on this too: For National Fragrance Day — this Thursday, March 21 only — you and your customers get a free Avon Flourish Honey Blossom travel spray with the online purchase of a full-size bottle.
          </p>
          <p className="lp blurb">
            Grab the offer code on the 21st on Instagram and share!
          </p>
        </div>
        <div className="clearfix "></div>
      </div>
    )
  }
}

export default IntroCopy
