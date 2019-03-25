import React, { Component } from 'react'

class SocialSecurityNumber extends Component {
  constructor(props) {
    super(props)
    this.state = {
      hidden: false,
      socialSecurityNumber: null
    }
  }
  onChange = (e) => {
    this.setState({ [e.target.name]: e.target.value })
  }
  onPasswordToggle = (e) => {
    this.setState({ hidden: !this.state.hidden })
  }
  render() {
    return (
      <div className="box-emphasize list-group-item ssnBox">
        <div className="row">
          <div className="col-xs-12">
            <h6 className="d-inline">SOCIAL SECURITY NUMBER {' '}
            </h6>
            <span className="text-muted">
              <i>(optional)
              </i>
            </span>
          </div>
        </div>
        <div className="mt-3">
          <p>
            If you make more than $600 of earnings within the financial year, we can help you report that income to the IRS. If you're not sure, you can do this later.
          </p>
        </div>
        <div className="m-top-s1">
          <div className="form-group has-feedback">
            <label>
              Social Security Number
            </label>
            <div className="form-group has-feedback"  onClick={this.onPasswordToggle}>
              <input
                id="password"
                name="socialSecurityNumber"
                onChange={this.onChange}
                value={this.state.socialSecurityNumber}
                type={this.state.hidden ? 'password' : 'text' }
                className="form-control textinput ng-pristine ng-invalid ng-invalid-required ng-touched ng-untouched ng-valid-maxlength"
                placeholder="ex. 555-55-5555" />
              <span toggle="#password" className="lt-icon lt-eye lt-large toggle-password form-control-feedback" />
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default SocialSecurityNumber
