import React, { Component } from 'react'

class ShippingAddressEdit extends Component {
  constructor(props) {
    super()
    this.state = {
      address: '',
      city: '',
      state: '',
      zip: '',
    }
  }

  onChange = (e) => this.setState({ [e.target.name]: e.target.value })

  onSave = (e) => {
    const obj = {
      address: this.state.address,
      city: this.state.city,
      state: this.state.state,
      zip: this.state.zip,
    }
    this.setState({ obj })
    console.log(obj)
  }


  render() {
    return (
      <div className="mt-3 shipAddressEdit" style={{display: 'block'}}>
        <div className="form-group">
          <label htmlFor="">Address</label>
          <input
          type="text"
          name="address"
          className="form-control"
          onChange={this.onChange}
          value={this.state.address} />
        </div>
        <div className="mt-3">
          <div className="row">
            <div className="col-xs-6 col-sm-4">
              <div className="form-group">
                <label htmlFor="">Zip</label>
                <input
                type="text"
                name="zip"
                onChange={this.onChange}
                className="form-control"
                value={this.state.zip}
                placeholder="60642" />
              </div>
            </div>
            <div className="col-xs-6 col-sm-4 middlepadd">
              <div className="form-group">
                <label htmlFor="">City</label>
                <input
                type="text"
                className="form-control"
                name="city"
                onChange={this.onChange}
                value={this.state.city}
                placeholder="Chicago" />
              </div>
            </div>
            <div className="col-sm-4">
              <div className="form-group">
                <label htmlFor="">State</label>
                <div className="form-group">
                  <div className="btn-group bootstrap-select form-control cc-state ng-pristine ng-untouched ng-valid">
                    <button type="button" className="btn dropdown-toggle btn-select" dataToggle="dropdown">
                      <span className="bs-caret">
                        <span className="caret">
                        </span>
                      </span>
                    </button>
                    <div className="dropdown-menu open" style={{maxHeight: '157 px', overflow: 'hidden'}}>
                      <ul className="dropdown-menu inner" role="listbox" ariaExpanded="false" style={{maxHeight: '156 px', overflowY: 'auto'}}>
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
          <div className="mt-3 mb-4">
            <div className="d-inline">
              <button
                onClick={this.onSave}
                className="btn btn-primary">
                Save
              </button>
            </div>
            <div className="d-inline ml-3">
              <button className="btn btn-default cancelBtn">
                Cancel
              </button>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default ShippingAddressEdit
