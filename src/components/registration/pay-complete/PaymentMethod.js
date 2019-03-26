import React, { Component } from 'react'
import CreditCardDetails from './CreditCardDetails'

class PaymentMethod extends Component {
  render() {
    return (
      <div className="box-emphasize list-group-item paymentBox mb-4">
        <div className="mt-1 mb-4">
          <div className="pb-1">
            <h6>PAYMENT METHOD</h6>
          </div>
          <div className="mb-3">
            <div className="radio one two">
              <label className="control-label d-block">
                <input type="radio" name="radioGroup" id="radio1" value="option1" />
                <span className="mr-4" />
                <img src={require('../../../images/cc-icon.png')} className="pr-3" alt="cc" /> Credit Card or Debit Card
              </label>
            </div>
            <CreditCardDetails />
            <div className="radio one two">
              <label className="control-label mt-2">
                <input type="radio" name="radioGroup" id="radio2" value="option2" />
                <span className="mr-4" />
                <img src={require('../../../images/paypal-icon.png')} className="pr-3" /> PayPal
              </label>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default PaymentMethod
