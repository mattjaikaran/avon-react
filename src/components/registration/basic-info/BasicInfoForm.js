import React, { Component } from 'react'
import { Link } from 'react-router-dom'

class BasicInfoForm extends Component {
  state = {}

  onChange = (e) => {
    this.setState({
      [e.target.name]: e.target.value
    })
  }

  render() {
    return (
      <div className="my-5">
      <h2>Nice to Meet You</h2>
      <p className="text-muted">
        We just need a few more details to help set up your account.
      </p>
      <hr />
      <div className="mt-3">
        <h5 className="d-inline ng-binding" style={{ fontWeight: '300' }}>
          Language Preference
        </h5>
        <p className="ng-binding"></p>
        <div className="radio one two ">
          <label className="control-label ng-binding">
            <input
            type="radio"
            name="radioGroupLng"
            id="radio1"
            defaultChecked="checked"
            className="ng-pristine ng-untouched ng-valid" />
            <span className="mr-4" />
            English
          </label>
        </div>
        <div className="radio one two pt-1">
          <label className="control-label ng-binding">
            <input type="radio"
            name="radioGroupLng"
            id="radio2"
            className="ng-pristine ng-untouched ng-valid" />
            <span className="mr-4" />
            Español
          </label>
        </div>
      </div>
      <div className="mt-5 pt-1">
    	  <h5 className="d-inline ng-binding" style={{ fontWeight: '300' }}>
          Phone
        </h5>
        <p className="ng-binding" />
        <div className="row">
        	<div className="col-md-6">
            <div className="form-group">
              <label htmlFor="" className="ng-binding">
                Phone Number*
              </label>
              <input type="tel" className="form-control ng-pristine ng-untouched ng-valid ng-valid-required" name="phoneNumber" id="phoneNumber" />
            </div>
          </div>
        </div>
      </div>
      <div className="mt-4 pt-1">
    	<h5 className="d-inline ng-binding" style={{ fontWeight: '300' }}>
        Birthday
      </h5>
      <p className="ng-binding"></p>
      <div className="row">
        <div className="form-group col-xs-12 col-sm-4">
        	<label htmlFor="" className="ng-binding">Month*</label>
            <div className="dropdown">
              <button className="btn btn-secondary dropdown-toggle" type="button" id="dropdownMenu2" data-toggle="dropdown">
                Month
              </button>
              <div className="dropdown-menu open" aria-labelledby="dropdownMenu2">
                <button className="dropdown-item" type="button">Action</button>
                <button className="dropdown-item" type="button">Another action</button>
                <button className="dropdown-item" type="button">Something else here</button>
              </div>
            </div>
          </div>
        <div className="form-group col-xs-12 col-sm-4">
        	<label htmlFor="" className="ng-binding">Day*</label>
            <div className="dropdown">
              <button className="btn btn-secondary dropdown-toggle" type="button" id="dropdownMenu2" data-toggle="dropdown">
                Day
              </button>
              <div className="dropdown-menu open" aria-labelledby="dropdownMenu2">
                <button className="dropdown-item" type="button">Action</button>
                <button className="dropdown-item" type="button">Another action</button>
                <button className="dropdown-item" type="button">Something else here</button>
              </div>
            </div>
          </div>
        <div className="form-group col-xs-12 col-sm-4">
        	<label htmlFor="" className="ng-binding">Year*</label>
            <div className="dropdown">
              <button className="btn btn-secondary dropdown-toggle" type="button" id="dropdownMenu2" data-toggle="dropdown">
                Year
              </button>
              <div className="dropdown-menu open" aria-labelledby="dropdownMenu2">
                <button className="dropdown-item" type="button">Action</button>
                <button className="dropdown-item" type="button">Another action</button>
                <button className="dropdown-item" type="button">Something else here</button>
              </div>
            </div>
          </div>
        </div>{/* endrow */}
      </div>{/* end birthday div */}
      <div className="mt-4">
        <h5 className="d-inline ng-binding" style={{ fontWeight: '300' }}>
          Your Address
        </h5>
        <div className="form-group">
          <label htmlFor="" className="ng-binding">
            Address*
          </label>
          <input type="tel" className="form-control ng-pristine ng-untouched ng-valid ng-valid-required" name="phoneNumber" id="phoneNumber" />
        </div>
        <div className="row">
          <div className="form-group col-xs-6 col-sm-3">
            <label htmlFor="zipCode" className="ng-binding">
              Zip*
            </label>
            <input type="tel" className="form-control ng-pristine ng-untouched ng-valid ng-valid-required" name="zipCode" id="zipCode" />
          </div>
          <div className="form-group col-xs-6">
            <label htmlFor="city" className="ng-binding">
              City*
            </label>
            <input type="tel" className="form-control ng-pristine ng-untouched ng-valid ng-valid-required" name="city" id="city" />
          </div>
          <div className="form-group col-xs-6 col-sm-3 col-xs-12">
            <label htmlFor="state" className="ng-binding">
              State*
            </label>
            <input type="tel" className="form-control ng-pristine ng-untouched ng-valid ng-valid-required" name="state" id="state" />
          </div>
        </div>
      </div>
      <div className="form-group mt-5">
        <div class="checkbox wrap-label mt-0">
        	<label class="ng-binding">
          	<input type="checkbox" id="checkbox1" name="checkbox1" value="option1" checked="checked" />
            	<span className="mr-3">
                <i class="lt-icon lt-checkbox-checkmark lt-small" />
                <i class="indeterminate lt-icon lt-checkbox-minus" />
                </span>
                Shipping address is same as this address
          </label>
        </div>
      </div>
      <div className="form-group mt-5">
        <div class="checkbox wrap-label mt-0">
        	<label class="ng-binding">
          	<input type="checkbox" id="checkbox1" name="checkbox1" value="option1" checked="checked" />
            	<span className="mr-3">
                <i class="lt-icon lt-checkbox-checkmark lt-small" />
                <i class="indeterminate lt-icon lt-checkbox-minus" />
                </span>
                By registering, you agree to Avon's Privacy Statement and Conditions of Use and are over 18 years old.
          </label>
        </div>
      </div>
      <div className="mt-5">
        <Link to="/starter-kit">
          <button className="btn btn-primary btn-block">Continue</button>
        </Link>
      </div>
    </div>
    )
  }
}

export default BasicInfoForm
