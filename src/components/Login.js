import React, { Component } from 'react'
import { Link } from 'react-router-dom'

import LoginForm from './LoginForm'
import LeftBanner from './LeftBanner'
import Mentor from './Mentor'

class Login extends Component {

  render() {
    return (
      <div>
        <div className="row mt-5 text-left">
          <LeftBanner />

          <div className="col-md-6">
            <h4>Become a Rep</h4>
            <Mentor />
            <LoginForm />
          </div>

          <div className="mt-5 text-center">
            <Link to="/starter-kit">
              <button className="btn btn-success">Go to Starter Kit ></button>
            </Link>
          </div>
        </div>
      </div>
    )
  }
}

export default Login
