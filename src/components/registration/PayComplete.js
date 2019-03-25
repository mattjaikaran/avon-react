import React, { Component } from 'react'
import CartDetails from './pay-complete/CartDetails'
import Legal from './pay-complete/Legal'
import OrderOverview from './pay-complete/OrderOverview'
import PaymentMethod from './pay-complete/PaymentMethod'
import ShipTo from './pay-complete/ShipTo'
import ShippingMethod from './pay-complete/ShippingMethod'
import SocialSecurityNumber from './pay-complete/SocialSecurityNumber'
import MentorChosen from './MentorChosen'
import StepsNav from '../StepsNav'

class PayComplete extends Component {
  render() {
    return (
      <div>
        <MentorChosen />
        <StepsNav />
        <div className="mt-5">
          <h2>
            Pay and Complete
          </h2>
          <p className="text-muted">
            Review shipping details and set up your payment, then click "Submit" to finalize your Registration as the newest Avon Representative!
          </p>
          <hr />
        </div>
        <div className="row">
          <div className="col-md-5 col-md-push-7">
            <CartDetails />
            <Legal />
          </div>
          <div className="col-md-7 col-md-pull-5 mobilePush">
            <OrderOverview
              kit={'Quick Starter Kit'}
              kitPrice={'25.00'}
              kitDescription={'Just the right amount of supplies to help you grow your business!'}
            />
            <PaymentMethod />
            <ShipTo />
            <ShippingMethod />
            <SocialSecurityNumber />
          </div>
        </div>
      </div>
    )
  }
}

export default PayComplete
