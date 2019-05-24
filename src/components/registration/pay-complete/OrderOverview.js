import React, { Component } from 'react'
import { Link } from 'react-router-dom'

class OrderOverview extends Component {
  render() {
    return (
      <div className="box-emphasize list-group-item mb-4">
        <div className="row">
          <div className="col-xs-6">
            <h6>ORDER OVERVIEW</h6>
          </div>
          <div className="col-xs-6 text-right mt-2">
            <Link to="#" className="link-underline">
              Change Kit
            </Link>
          </div>
        </div>
        <div className="row mt-3 pb-5">
          <div className="col-xs-3">
            <img src={require('../../../images/better-than-basics.jpg')} className="img-responsive" alt="" />
          </div>
          <div className="col-xs-9">
            <div className="row">
              <div className="col-xs-9">
                <p className="large font-weight-bold mt-0 mb-0">
                  {this.props.kit}
                </p>
              </div>
              <div className="col-xs-3 text-right">
                <span className="medium font-weight-normal">
                  ${this.props.kitPrice}
                </span>
              </div>
            </div>
            <p className="text-muted">
              {this.props.kitDescription}
            </p>
          </div>
        </div>
      </div>
    )
  }
}

export default OrderOverview
