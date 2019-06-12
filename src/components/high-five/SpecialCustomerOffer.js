import React from 'react'

const SpecialCustomerOffer = (props) => {
  return (
      <div className="m-top-s4 text-center grey-bg">
        <div className="row">
          <div className="col-md-6">
            <img src={props.desktopSrc} className="img-responsive hidden-xs" alt="" />
            <img src={props.mobileSrc} className="img-responsive visible-xs" alt="" />
          </div>
          <div className="col-md-6 m-top-s3">
            <h1 className="title-secondary">
              SPECIAL CUSTOMER OFFER FOR {props.month}
            </h1>
            <p className="lp">
              Customers get a <strong>FREE Avon True Color Illuminating Stick</strong> in Champagne and <strong>FREE SHIPPING</strong> when they spend $50+ on your online store in June.*
            </p>
            <div className="m-top-s4">
              <p className="lp">
                <small>
                  *Valid for Avon.com customers with orders of $50 or more from June 1-30, 2019. Enter code <strong>{props.code}</strong> at checkout.
                </small>
              </p>
            </div>
          </div>
        </div>
      </div>
  )
}

export default SpecialCustomerOffer
