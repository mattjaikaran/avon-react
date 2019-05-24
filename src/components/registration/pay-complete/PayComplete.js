import React, { Component } from 'react'
import CartDetails from './CartDetails'
import Legal from './Legal'
import OrderOverview from './OrderOverview'
import PaymentMethod from './PaymentMethod'
import ShipTo from './ShipTo'
import ShippingMethod from './ShippingMethod'
import SocialSecurityNumber from './SocialSecurityNumber'
import MentorChosen from '../MentorChosen'
import StepsNav from '../../StepsNav'

class PayComplete extends Component {
  render() {
    return (
      <div>
        <MentorChosen />
        <StepsNav />
        <div className="mt-5">
          <h2>Pay and Complete</h2>
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
              kit={'Better Than Basics'}
              kitPrice={'30.00'}
              kitDescription={'Your $30 signup includes this gift.'}
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
