import React, { Component } from 'react'
import { Link } from 'react-router-dom'

import Kit from './Kit'
import AllKitsInclude from './AllKitsInclude'
import MobileNavDropdown from '../MobileNavDropdown'
import StepsNav from '../StepsNav'
import LeftBannerProgress from './LeftBannerProgress'

class StarterKit extends Component {
  constructor(props){
    super(props)
    this.state = {}
  }
  render() {
    return (
      <div>
        <div className="row">
            <LeftBannerProgress />
            <div className="col-md-7">
              <div className="">
                <img src="" className="img-responsive" alt="" />
              </div>

              <StepsNav />
              <MobileNavDropdown />

              <div className="mt-5 mb-4 pb-1">
                <h2>
                  Sign Up for $30 and Pick a Gift <br />($80+ Value)
                </h2>
                <p className="text-muted">
                  Don't worry &mdash; these are the real thing, not samples! you'll get free shipping too.
                </p>
              </div>
              <hr />

              <Kit
                title="Better Than Basics"
                price="25.00"
                saveAmt="20"
                imgSrc={require('../../images/better-than-basics.jpg')}
                />
              <Kit
                title="I'm a Glowgetter"
                price="50.00"
                saveAmt="80"
                imgSrc={require('../../images/im-a-glowgetter.jpg')}
                />
              <Kit
                title="BFF: Best Face Forever"
                price="100.00"
                saveAmt="150"
                imgSrc={require('../../images/best-face-forever.jpg')}
                />
              <AllKitsInclude />
            </div>
          </div>
      </div>
    )
  }
}

export default StarterKit
