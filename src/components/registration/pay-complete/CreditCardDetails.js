import React, { Component } from 'react'

class CreditCardDetails extends Component {
  constructor(props) {
    super(props)
    this.state = {
      ccNumber: '',
      nameOnCard: '',
      expMonth: '',
      expYear: '',
      cvv: '',
      billingAddress: '',
      billingCity: '',
      billingState: '',
      billingZip: '',
      billingSaveInfo: ''
    }
  }

  onChange = (e) => {
    this.setState({ [e.target.name]: e.target.value })
  }
  onEditClick = (e) => {}

  onSaveClick = (e) => {
    const obj = {
      ccNumber: this.state.ccNumber,
      nameOnCard: this.state.nameOnCard,
      expMonth: this.state.expMonth,
      expYear: this.state.expYear,
      cvv: this.state.cvv,
      address: this.state.billingAddress,
      city: this.state.billingCity,
      state: this.state.billingState,
      zip: this.state.billingZip,
      saveInfo: this.state.billingSaveInfo
    }
    this.setState({ obj })
    console.log(obj)
  }
  render() {
    return (
      <div className="ccDetails pl-0 pl-sm-5 pr-2 ml-0 ml-sm-3">
        <div className="form-group mt-4">
          <label htmlFor="">Card Number</label>
          <input
          type="text"
          name="ccNumber"
          onChange={this.onChange}
          value={this.state.ccNumber}
          className="form-control" />
        </div>
        <div className="form-group">
          <label htmlFor="">Name on Card</label>
          <input
          type="text"
          name="nameOnCard"
          onChange={this.onChange}
          value={this.state.nameOnCard}
          className="form-control" />
        </div>
        <div className="mt-3">
          <div className="row">
            <div className="col-sm-5 col-xs-5">
              <label className="control-label">Exp Date</label>
              <div className="btn-group bootstrap-select form-control form-inline ng-pristine ng-untouched ng-invalid ng-invalid-required ng-valid ng-valid-required">
                <button type="button" className="btn dropdown-toggle bs-placeholder btn-select" data-toggle="dropdown" data-id="exp-month" title="Month">
                  <span className="filter-option pull-left">Month</span>
                  <span className="bs-caret">
                    <span className="caret" />
                  </span>
                </button>
                <div className="dropdown-menu open" style={{maxHeight: '157 px', overflow: 'hidden' }}>
                  <ul className="dropdown-menu inner" role="listbox" aria-expanded="false" style={{maxHeight: 156 + 'px', overflowY: 'auto'}}>
                    <li data-original-index="0" className="disabled selected">
                      <span className="text">Month</span>
                      <span className="lt-icon glyphicon-ok check-mark" />
                    </li>
                    <li data-original-index="1">
                      <span className="text">01</span>
                      <span className="lt-icon glyphicon-ok check-mark" />
                    </li>
                    <li data-original-index="2">
                      <span className="text">02</span>
                      <span className="lt-icon glyphicon-ok check-mark" />
                    </li>
                    <li data-original-index="3">
                      <span className="text">03</span>
                      <span className="lt-icon glyphicon-ok check-mark" />
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            <div className="col-sm-3 col-xs-3 p-0">
              <label className="control-label invisible">Year</label>
              <div className="btn-group bootstrap-select form-control form-inline ng-pristine ng-untouched ng-invalid ng-invalid-required ng-valid ng-valid-required">
                <button type="button" className="btn dropdown-toggle bs-placeholder btn-select" data-toggle="dropdown">
                  <span className="filter-option pull-left">Year</span>
                  <span className="bs-caret">
                    <span className="caret" />
                  </span>
                </button>
                <div className="dropdown-menu open" role="combobox" style={{maxHeight: 157 + 'px', overflow: 'hidden' }}>
                  <ul className="dropdown-menu inner" role="listbox" aria-expanded="false" style={{maxHeight: 156 + 'px', overflowY: 'auto'}}>
                    <li data-original-index="0" className="disabled selected">
                      <span className="text">Year</span>
                      <span className="lt-icon glyphicon-ok check-mark" />
                    </li>
                    <li data-original-index="1">
                      <span className="text">2019</span>
                      <span className="lt-icon glyphicon-ok check-mark" />
                    </li>
                    <li data-original-index="2">
                      <span className="text">2020</span>
                      <span className="lt-icon glyphicon-ok check-mark" />
                    </li>
                    <li data-original-index="3">
                      <span className="text">2021</span>
                      <span className="lt-icon glyphicon-ok check-mark" />
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            <div className="col-sm-4 col-xs-4">
              <div className="form-group mb-2">
                <label for="">CVV</label>
                <input
                  type="text"
                  name="cvv"
                  onChange={this.onChange}
                  value={this.state.cvv}
                  className="form-control" />
              </div>
            </div>
          </div>
        </div>
        <div className="mt-5">
          <h6>BILLING ADDRESS
          </h6>
          <div className="form-group mt-4">
            <label htmlFor="">Address</label>
            <input
            type="text"
            name="billingAddress"
            onChange={this.onChange}
            value={this.state.billingAddress}
            className="form-control" />
          </div>
          <div className="mt-3">
            <div className="row">
              <div className="col-xs-5">
                <div className="form-group">
                  <label htmlFor="">Zip</label>
                  <input
                  type="text"
                  name="billingZip"
                  onChange={this.onChange}
                  value={this.state.billingZip}
                  className="form-control"
                  placeholder="60642" />
                </div>
              </div>
              <div className="col-xs-7">
                <div className="form-group">
                  <label htmlFor="">City</label>
                  <input
                  type="text"
                  name="billingCity"
                  onChange={this.onChange}
                  value={this.state.billingCity}
                  className="form-control"
                  placeholder="Chicago" />
                </div>
              </div>
            </div>
          </div>
          <div className="mt-1">
            <div className="form-group">
              <label htmlFor="">State</label>
              <div className="form-group">
                <div className="btn-group bootstrap-select form-control cc-state ng-pristine ng-untouched ng-valid">
                  <button type="button" className="btn dropdown-toggle btn-select" data-toggle="dropdown">
                    <span className="bs-caret">
                      <span className="caret">
                      </span>
                    </span>
                  </button>
                  <div className="dropdown-menu open" role="combobox" style={{maxHeight: 157 + 'px', overflow: 'hidden' }}>
                    <ul className="dropdown-menu inner" role="listbox" aria-expanded="false" style={{maxHeight: 156 + 'px', overflowY: 'auto'}}>
                      <li data-original-index="0" className="disabled">
                        <span className="text">Select</span>
                        <span className="lt-icon glyphicon-ok check-mark" />
                      </li>
                      <li data-original-index="1">
                        <span className="text">AA</span>
                        <span className="lt-icon glyphicon-ok check-mark" />
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="mt-4 pt-1">
          <div className="checkbox wrap-label">
            <label className="">
              <input type="checkbox" id="checkbox1" name="checkbox1" value={this.state.saveInfo} />
              <span className="mr-4">
                <i className="lt-icon lt-checkbox-checkmark lt-small" />
                <i className="indeterminate lt-icon lt-checkbox-minus" />
              </span>
              Save credit card information to my account.
              <br />
              <small className="text-muted">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
              </small>
            </label>
          </div>
          <div className="mt-4 pt-3 mb-5">
            <button onClick={this.onSaveClick} className="btn btn-primary">Save</button>
          </div>
        </div>
      </div>
    )
  }
}

export default CreditCardDetails
