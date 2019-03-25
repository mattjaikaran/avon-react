import React, { Component } from 'react'
import { Link } from 'react-router-dom'

import Kit from './Kit'
import AllKitsInclude from './AllKitsInclude'
import MobileNavDropdown from '../MobileNavDropdown'
import StepsNav from '../StepsNav'

class StarterKit extends Component {
  constructor(props){
    super(props)
    this.state = {}
  }
  render() {
    return (
      <div>
        <div className="row">
            <div className="col-md-5 mt-4 hidden-sm hidden-xs">
              <img src="https://dummyimage.com/400x1650/000/fff" className="img-responsive" alt="" />
            </div>
            <div className="col-md-7">
              <div className="">
                <img src="" className="img-responsive" alt="" />
              </div>

              <StepsNav />
              <MobileNavDropdown />

              <div className="mt-5 mb-4 pb-1">
                <h2>
                  Starter Kit
                </h2>
                <p className="text-muted">
                  Pick the best option for you to start your business! Fusce dapibus, tellus ac cursus commodo, tortor mauris condimentum nibh, ut fermentum massa.
                </p>
              </div>
              <hr />

              <Kit title="No Starter Kit" price="25.00" saveAmt="20" />
              <Kit title="Advanced Starter Kit" price="50.00" saveAmt="80" />
              <Kit title="Premium Starter Kit" price="100.00" saveAmt="150" />

              <AllKitsInclude />

                <div className="mt-5 text-center">
                  <Link to="/pay-complete">
                    <button className="btn btn-success">Go to Pay Complete ></button>
                  </Link>
                </div>
            </div>
          </div>
      </div>
    )
  }
}

export default StarterKit
