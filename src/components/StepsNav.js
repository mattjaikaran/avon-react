import React from 'react'
import { Link } from 'react-router-dom'

const StepsNav = (props) => {
  return (
    <div className="steps-parent hidden-xs mt-5 ml-0 ml-md-5 ml-lg-0 pl-0 pl-md-5 pl-lg-0">
      <div className="row">
        <Link to="/basic-info">
          <div className="col-xs-3 pr-0">
            <h5 className="mb-0">
              01
            </h5>
            <p>Basic Info
            </p>
          </div>
        </Link>
        <div className="col-xs-1 text-muted mt-3 p-0 text-right mr-3">
          <span className="dots">
            .....
          </span>
        </div>
        <div className="col-xs-3 text-muted p-0">
          <h5 className="text-primary mb-0">
            02
          </h5>
          <Link to="/starter-kit">
            <p className="steps-border">
              Starter Kit
            </p>
          </Link>
        </div>
        <div className="col-xs-1 text-muted mt-3 p-0 text-right mr-3">
          <span className="dots">
            .....
          </span>
        </div>
        <div className="col-xs-3 text-muted pl-0">
          <h5 className="mb-0">03
          </h5>
          <p>
            Pay &amp; Complete
          </p>
        </div>
      </div>
    </div>
  )
}

export default StepsNav
