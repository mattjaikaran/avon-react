import React from 'react'

const SetupFundraiser = (props) => {
  return (
    <div className="m-top-s4 text-center">
      <div className="row">
        <div className="col-md-6">
          <img src={props.desktopSrc} className="img-responsive hidden-xs" alt="" />
          <img src={props.mobileSrc} className="img-responsive visible-xs" alt="" />
        </div>
        <div className="col-md-6 tablet-mobile-50">
          <h1 className="title-secondary">SET UP YOUR ONLINE FUNDRAISER</h1>
          <p className="lp text-left copyParagraph">
            {props.paragraph}
          </p>
          <div className="m-top-s3">
            <a href="/home/fundraising">
              <button className="btn btn-black">{props.cta}</button>
            </a>
          </div>
        </div>
      </div>
    </div>
  )
}

export default SetupFundraiser
