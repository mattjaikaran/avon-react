import React, { Component } from 'react'
import { Link } from 'react-router-dom'

class PayComplete extends Component {
  render() {
    return (
      <div>
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
          <div className="col-md-5 col-md-push-7"></div>

          <div className="col-md-7 col-md-pull-5 mobilePush">

            <div className="box-emphasize list-group-item mb-4">
              <div className="row">
                <div className="col-xs-6">
                  <h6>
                    ORDER OVERVIEW
                  </h6>
                </div>
                <div className="col-xs-6 text-right">
                  <Link to="#" className="link-underline">Change Kit
                  </Link>
                </div>
              </div>
              <div className="row mt-3 pb-5">
                <div className="col-xs-3">
                  <img src="https://dummyimage.com/100x100/000/fff" className="img-responsive" alt="" />
                </div>
                <div className="col-xs-9">
                  <p className="large font-weight-bold mt-0 mb-0">Quick Starter Kit
                    <span className="medium font-weight-normal">
                      $25.00
                    </span>
                  </p>
                  <p className="text-muted">
                    Just the right amount of supplies to help you grow your business!
                  </p>
                </div>
              </div>
            </div>
            

          </div>
        </div>
      </div>
    )
  }
}

export default PayComplete
