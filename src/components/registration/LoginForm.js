import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import { FacebookButton } from './FacebookButton'
import { GoogleButton } from './GoogleButton'

class LoginForm extends Component {
  constructor(props) {
    super(props)
    this.state = {
      firstName: '',
      lastName: '',
      email: '',
      password: '',
    }
  }

  onChange = (e) => {
    this.setState({
      [e.target.name]: e.target.value
    })
  }

  onSubmit = (e) => {
    e.preventDefault()
    console.log('submitted')
    const repInfo = {
      firstName: this.state.firstName,
      lastName: this.state.lastName,
      email: this.state.email,
      password: this.state.password
    }
    console.log(repInfo)
  }

  render() {
    return (
      <form onSubmit={this.onSubmit}>
        <div className="row">
          <div className="col-md-6 form-group">
            <label>First Name*</label>
            <input
              className="form-control"
              name="firstName"
              type="text"
              onChange={this.onChange}
              value={this.state.firstName}
              />
          </div>
          <div className="col-md-6 form-group">
            <label>Last Name*</label>
            <input
              className="form-control"
              name="lastName"
              type="text"
              onChange={this.onChange}
              value={this.state.lastName}
              />
          </div>
        </div>
        <div className="form-group">
          <label>Email Address*</label>
          <input
            className="form-control"
            name="email"
            type="email"
            onChange={this.onChange}
            value={this.state.email}
            />
        </div>
        <div className="form-group">
          <label>Password</label>
          <input
            className="form-control"
            type="password"
            name="password"
            onChange={this.onChange}
            value={this.state.password}
            />
        </div>
        <Link to="/basic-info">
          <button className="btn btn-primary btn-block">Register</button>
        </Link>
        <div className="text-center my-3">or</div>
        <div>
          <FacebookButton />
          <GoogleButton />
          <hr/>
        </div>
        <div className="text-center">
          <p>
            Already have an acccount? <Link to="/">Sign In</Link>
          </p>
        </div>
      </form>
    )
  }
}

export default LoginForm
