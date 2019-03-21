import React, { Component } from 'react'
import { Link } from 'react-router-dom'

class Kit extends Component {
  constructor(props) {
    super(props)
    this.state = {}
  }

  render() {
    return (
      <div>
        <div className="kit mt-5 mb-5">
          <div className="row mr-lg-0">
            <div className="col-md-3 col-sm-3 col-xs-4 pr-md-0">
              <img src="https://dummyimage.com/200x100/000/fff" className="img-responsive kit-image" alt="" />
            </div>
            <div className="col-sm-5 col-md-4 col-lg-5">
              <p className="large font-weight-bold mt-0">
                {this.props.title}
              </p>
              <div className="row">
                <div className="col-sm-4 col-md-5 col-lg-4 col-xs-3 padding-price price-width">
                  <p className="large font-weight-bold mt-0 pt-0">
                    ${this.props.price}
                  </p>
                </div>
                <div className="col-sm-8 col-md-7 col-lg-8 col-xs-4 mt-0 pt-1 padding-price">
                  <p className="medium text-muted">
                    Save ${this.props.saveAmt}
                  </p>
                </div>
              </div>
            </div>
            <div className="col-sm-2 mt-0 mt-sm-3 ml-lg-5 ml-xl-0 view-details">
              <Link to="#" className="link-underline" data-toggle="modal" data-target="#quickStarterKit">
                <small>View Details
                </small>
              </Link>
            </div>
            <div className="col-sm-2 selectBtn">
              <Link to="#" className="btn btn-primary">
                Select
              </Link>
            </div>
          </div>
        </div>
        <hr />
      </div>
    )
  }
}

export default Kit
