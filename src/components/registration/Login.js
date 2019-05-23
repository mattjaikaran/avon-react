import React, { Component } from 'react'
import { Link } from 'react-router-dom'

import LoginForm from './LoginForm'
import LeftBanner from './LeftBanner'

class Login extends Component {

  render() {
    return (
      <div>
        <div className="row text-left">
          <div className="hidden-sm hidden-xs">
            <LeftBanner />
          </div>

          <div className="col-md-6">
            <h3 className="text-center">Start Your Dream Gig Now</h3>
            <hr />
            <LoginForm />
          </div>
        </div>
      </div>
    )
  }
}

export default Login
