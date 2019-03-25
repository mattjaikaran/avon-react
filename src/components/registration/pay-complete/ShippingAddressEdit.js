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

  render() {
    return (
      <div className="mt-3 shipAddressEdit" style={{display: 'block'}}>
        <div className="form-group">
          <label htmlFor="">Address
          </label>
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
                <label htmlFor="">
                  Zip
                </label>
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
                <label htmlFor="">City
                </label>
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
                <label htmlFor="">State
                </label>
                <div className="form-group">
                  <div className="btn-group bootstrap-select form-control cc-state ng-pristine ng-untouched ng-valid">
                    <button type="button" className="btn dropdown-toggle btn-select" dataToggle="dropdown">
                      <span className="bs-caret">
                        <span className="caret">
                        </span>
                      </span>
                    </button>
                    <div className="dropdown-menu open" role="combobox" style={{maxHeight: '157 px', overflow: 'hidden'}}>
                      <ul className="dropdown-menu inner" role="listbox" ariaExpanded="false" style={{maxHeight: '156 px', overflowY: 'auto'}}>
                        <li data-original-index="0" className="disabled">
                          <a tabindex="-1" className="ng-binding" data-tokens="null" role="option" href="#" ariaDisabled="true" ariaSelected="false">
                            <span className="text">Select
                            </span>
                            <span className="lt-icon glyphicon-ok check-mark">
                            </span>
                          </a>
                        </li>
                        <li data-original-index="1">
                          <a tabindex="0" dataTokens="null" role="option" aria-disabled="false" ariaSelected="false">
                            <span className="text">AA
                            </span>
                            <span className="lt-icon glyphicon-ok check-mark">
                            </span>
                          </a>
                        </li>
                        <li data-original-index="2">
                          <a tabindex="0" dataTokens="null" role="option" ariaDisabled="false" ariaSelected="false">
                            <span className="text">AE
                            </span>
                            <span className="lt-icon glyphicon-ok check-mark">
                            </span>
                          </a>
                        </li>
                        <li data-original-index="3">
                          <a tabindex="0" dataTokens="null" role="option" ariaDisabled="false" ariaSelected="false">
                            <span className="text">AK
                            </span>
                            <span className="lt-icon glyphicon-ok check-mark">
                            </span>
                          </a>
                        </li>
                        <li data-original-index="4">
                          <a tabindex="0" dataTokens="null" role="option" ariaDisabled="false" ariaSelected="false">
                            <span className="text">AL
                            </span>
                            <span className="lt-icon glyphicon-ok check-mark">
                            </span>
                          </a>
                        </li>
                        <li data-original-index="5">
                          <a tabindex="0" dataTokens="null" role="option" ariaDisabled="false" ariaSelected="false">
                            <span className="text">AP
                            </span>
                            <span className="lt-icon glyphicon-ok check-mark">
                            </span>
                          </a>
                        </li>
                        <li data-original-index="6">
                          <a tabindex="0" dataTokens="null" role="option" ariaDisabled="false" ariaSelected="false">
                            <span className="text">AR
                            </span>
                            <span className="lt-icon glyphicon-ok check-mark">
                            </span>
                          </a>
                        </li>
                        <li data-original-index="7">
                          <a tabindex="0" dataTokens="null" role="option" ariaDisabled="false" ariaSelected="false">
                            <span className="text">AZ
                            </span>
                            <span className="lt-icon glyphicon-ok check-mark">
                            </span>
                          </a>
                        </li>
                        <li data-original-index="8">
                          <a tabindex="0" dataTokens="null" role="option" ariaDisabled="false" ariaSelected="false">
                            <span className="text">CA
                            </span>
                            <span className="lt-icon glyphicon-ok check-mark">
                            </span>
                          </a>
                        </li>
                        <li data-original-index="9">
                          <a tabindex="0" dataTokens="null" role="option" ariaDisabled="false" ariaSelected="false">
                            <span className="text">CO
                            </span>
                            <span className="lt-icon glyphicon-ok check-mark">
                            </span>
                          </a>
                        </li>
                        <li data-original-index="10">
                          <a tabindex="0" dataTokens="null" role="option" ariaDisabled="false" ariaSelected="false">
                            <span className="text">CT
                            </span>
                            <span className="lt-icon glyphicon-ok check-mark">
                            </span>
                          </a>
                        </li>
                        <li data-original-index="11">
                          <a tabindex="0" dataTokens="null" role="option" ariaDisabled="false" ariaSelected="false">
                            <span className="text">DC
                            </span>
                            <span className="lt-icon glyphicon-ok check-mark">
                            </span>
                          </a>
                        </li>
                        <li data-original-index="12">
                          <a tabindex="0" dataTokens="null" role="option" ariaDisabled="false" ariaSelected="false">
                            <span className="text">DE
                            </span>
                            <span className="lt-icon glyphicon-ok check-mark">
                            </span>
                          </a>
                        </li>
                        <li data-original-index="13">
                          <a tabindex="0" dataTokens="null" role="option" ariaDisabled="false" ariaSelected="false">
                            <span className="text">FL
                            </span>
                            <span className="lt-icon glyphicon-ok check-mark">
                            </span>
                          </a>
                        </li>
                        <li data-original-index="14">
                          <a tabindex="0" dataTokens="null" role="option" ariaDisabled="false" ariaSelected="false">
                            <span className="text">GA
                            </span>
                            <span className="lt-icon glyphicon-ok check-mark">
                            </span>
                          </a>
                        </li>
                        <li data-original-index="15">
                          <a tabindex="0" dataTokens="null" role="option" ariaDisabled="false" ariaSelected="false">
                            <span className="text">GU
                            </span>
                            <span className="lt-icon glyphicon-ok check-mark">
                            </span>
                          </a>
                        </li>
                        <li data-original-index="16">
                          <a tabindex="0" dataTokens="null" role="option" ariaDisabled="false" ariaSelected="false">
                            <span className="text">HI
                            </span>
                            <span className="lt-icon glyphicon-ok check-mark">
                            </span>
                          </a>
                        </li>
                        <li data-original-index="17">
                          <a tabindex="0" dataTokens="null" role="option" ariaDisabled="false" ariaSelected="false">
                            <span className="text">IA
                            </span>
                            <span className="lt-icon glyphicon-ok check-mark">
                            </span>
                          </a>
                        </li>
                        <li data-original-index="18">
                          <a tabindex="0" dataTokens="null" role="option" ariaDisabled="false" ariaSelected="false">
                            <span className="text">ID
                            </span>
                            <span className="lt-icon glyphicon-ok check-mark">
                            </span>
                          </a>
                        </li>
                        <li data-original-index="19">
                          <a tabindex="0" dataTokens="null" role="option" ariaDisabled="false" ariaSelected="false">
                            <span className="text">IL
                            </span>
                            <span className="lt-icon glyphicon-ok check-mark">
                            </span>
                          </a>
                        </li>
                        <li data-original-index="20">
                          <a tabindex="0" dataTokens="null" role="option" ariaDisabled="false" ariaSelected="false">
                            <span className="text">IN
                            </span>
                            <span className="lt-icon glyphicon-ok check-mark">
                            </span>
                          </a>
                        </li>
                        <li data-original-index="21">
                          <a tabindex="0" dataTokens="null" role="option" ariaDisabled="false" ariaSelected="false">
                            <span className="text">KS
                            </span>
                            <span className="lt-icon glyphicon-ok check-mark">
                            </span>
                          </a>
                        </li>
                        <li data-original-index="22">
                          <a tabindex="0" dataTokens="null" role="option" ariaDisabled="false" ariaSelected="false">
                            <span className="text">KY
                            </span>
                            <span className="lt-icon glyphicon-ok check-mark">
                            </span>
                          </a>
                        </li>
                        <li data-original-index="23">
                          <a tabindex="0" dataTokens="null" role="option" ariaDisabled="false" ariaSelected="false">
                            <span className="text">LA
                            </span>
                            <span className="lt-icon glyphicon-ok check-mark">
                            </span>
                          </a>
                        </li>
                        <li data-original-index="24">
                          <a tabindex="0" dataTokens="null" role="option" ariaDisabled="false" ariaSelected="false">
                            <span className="text">MA
                            </span>
                            <span className="lt-icon glyphicon-ok check-mark">
                            </span>
                          </a>
                        </li>
                        <li data-original-index="25">
                          <a tabindex="0" dataTokens="null" role="option" ariaDisabled="false" ariaSelected="false">
                            <span className="text">MD
                            </span>
                            <span className="lt-icon glyphicon-ok check-mark">
                            </span>
                          </a>
                        </li>
                        <li data-original-index="26">
                          <a tabindex="0" data-tokens="null" role="option" aria-disabled="false" aria-selected="false">
                            <span className="text">ME
                            </span>
                            <span className="lt-icon glyphicon-ok check-mark">
                            </span>
                          </a>
                        </li>
                        <li data-original-index="27" className="selected">
                          <a tabindex="0" dataTokens="null" role="option" ariaDisabled="false" ariaSelected="false">
                            <span className="text">MI
                            </span>
                            <span className="lt-icon glyphicon-ok check-mark">
                            </span>
                          </a>
                        </li>
                        <li data-original-index="28">
                          <a tabindex="0" dataTokens="null" role="option" ariaDisabled="false" ariaSelected="false">
                            <span className="text">MN
                            </span>
                            <span className="lt-icon glyphicon-ok check-mark">
                            </span>
                          </a>
                        </li>
                        <li data-original-index="29">
                          <a tabindex="0" dataTokens="null" role="option" ariaDisabled="false" ariaSelected="false">
                            <span className="text">MO
                            </span>
                            <span className="lt-icon glyphicon-ok check-mark">
                            </span>
                          </a>
                        </li>
                        <li data-original-index="30">
                          <a tabindex="0" dataTokens="null" role="option" ariaDisabled="false" ariaSelected="false">
                            <span className="text">MS
                            </span>
                            <span className="lt-icon glyphicon-ok check-mark">
                            </span>
                          </a>
                        </li>
                        <li data-original-index="31">
                        <a tabindex="0" dataTokens="null" role="option" ariaDisabled="false" ariaSelected="false">
                            <span className="text">MT
                            </span>
                            <span className="lt-icon glyphicon-ok check-mark">
                            </span>
                          </a>
                        </li>
                        <li data-original-index="32">
                          <a tabindex="0" dataTokens="null" role="option" ariaDisabled="false" ariaSelected="false">
                            <span className="text">NC
                            </span>
                            <span className="lt-icon glyphicon-ok check-mark">
                            </span>
                          </a>
                        </li>
                        <li data-original-index="33">
                          <a tabindex="0" dataTokens="null" role="option" ariaDisabled="false" ariaSelected="false">
                            <span className="text">ND
                            </span>
                            <span className="lt-icon glyphicon-ok check-mark">
                            </span>
                          </a>
                        </li>
                        <li data-original-index="34">
                          <a tabindex="0" dataTokens="null" role="option" ariaDisabled="false" ariaSelected="false">
                            <span className="text">NE
                            </span>
                            <span className="lt-icon glyphicon-ok check-mark">
                            </span>
                          </a>
                        </li>
                        <li data-original-index="35">
                          <a tabindex="0" dataTokens="null" role="option" ariaDisabled="false" ariaSelected="false">
                            <span className="text">NH
                            </span>
                            <span className="lt-icon glyphicon-ok check-mark">
                            </span>
                          </a>
                        </li>
                        <li data-original-index="36">
                          <a tabindex="0" dataTokens="null" role="option" ariaDisabled="false" ariaSelected="false">
                            <span className="text">NJ
                            </span>
                            <span className="lt-icon glyphicon-ok check-mark">
                            </span>
                          </a>
                        </li>
                        <li data-original-index="37">
                          <a tabindex="0" dataTokens="null" role="option" ariaDisabled="false" ariaSelected="false">
                            <span className="text">NM
                            </span>
                            <span className="lt-icon glyphicon-ok check-mark">
                            </span>
                          </a>
                        </li>
                        <li data-original-index="38">
                          <a tabindex="0" dataTokens="null" role="option" ariaDisabled="false" ariaSelected="false">
                            <span className="text">NV
                            </span>
                            <span className="lt-icon glyphicon-ok check-mark">
                            </span>
                          </a>
                        </li>
                        <li data-original-index="39">
                          <a tabindex="0" dataTokens="null" role="option" ariaDisabled="false" ariaSelected="false">
                            <span className="text">NY
                            </span>
                            <span className="lt-icon glyphicon-ok check-mark">
                            </span>
                          </a>
                        </li>
                        <li data-original-index="40">
                          <a tabindex="0" dataTokens="null" role="option" ariaDisabled="false" ariaSelected="false">
                            <span className="text">OH
                            </span>
                            <span className="lt-icon glyphicon-ok check-mark">
                            </span>
                          </a>
                        </li>
                        <li data-original-index="41">
                          <a tabindex="0" dataTokens="null" role="option" ariaDisabled="false" ariaSelected="false">
                            <span className="text">OK
                            </span>
                            <span className="lt-icon glyphicon-ok check-mark">
                            </span>
                          </a>
                        </li>
                        <li data-original-index="42">
                          <a tabindex="0" dataTokens="null" role="option" ariaDisabled="false" ariaSelected="false">
                            <span className="text">OR
                            </span>
                            <span className="lt-icon glyphicon-ok check-mark">
                            </span>
                          </a>
                        </li>
                        <li data-original-index="43">
                          <a tabindex="0" dataTokens="null" role="option" ariaDisabled="false" ariaSelected="false">
                            <span className="text">PA
                            </span>
                            <span className="lt-icon glyphicon-ok check-mark">
                            </span>
                          </a>
                        </li>
                        <li data-original-index="44">
                          <a tabindex="0" dataTokens="null" role="option" ariaDisabled="false" ariaSelected="false">
                            <span className="text">RI
                            </span>
                            <span className="lt-icon glyphicon-ok check-mark">
                            </span>
                          </a>
                        </li>
                        <li data-original-index="45">
                          <a tabindex="0" dataTokens="null" role="option" ariaDisabled="false" ariaSelected="false">
                            <span className="text">SC
                            </span>
                            <span className="lt-icon glyphicon-ok check-mark">
                            </span>
                          </a>
                        </li>
                        <li data-original-index="46">
                          <a tabindex="0" dataTokens="null" role="option" ariaDisabled="false" ariaSelected="false">
                            <span className="text">SD
                            </span>
                            <span className="lt-icon glyphicon-ok check-mark">
                            </span>
                          </a>
                        </li>
                        <li data-original-index="47">
                          <a tabindex="0" dataTokens="null" role="option" ariaDisabled="false" ariaSelected="false">
                            <span className="text">TN
                            </span>
                            <span className="lt-icon glyphicon-ok check-mark">
                            </span>
                          </a>
                        </li>
                        <li data-original-index="48">
                          <a tabindex="0" dataTokens="null" role="option" ariaDisabled="false" ariaSelected="false">
                            <span className="text">TX
                            </span>
                            <span className="lt-icon glyphicon-ok check-mark">
                            </span>
                          </a>
                        </li>
                        <li data-original-index="49">
                          <a tabindex="0" dataTokens="null" role="option" ariaDisabled="false" ariaSelected="false">
                            <span className="text">UT
                            </span>
                            <span className="lt-icon glyphicon-ok check-mark">
                            </span>
                          </a>
                        </li>
                        <li data-original-index="50">
                          <a tabindex="0" dataTokens="null" role="option" ariaDisabled="false" ariaSelected="false">
                            <span className="text">VA
                            </span>
                            <span className="lt-icon glyphicon-ok check-mark">
                            </span>
                          </a>
                        </li>
                        <li data-original-index="51">
                          <a tabindex="0" dataTokens="null" role="option" ariaDisabled="false" ariaSelected="false">
                            <span className="text">VT
                            </span>
                            <span className="lt-icon glyphicon-ok check-mark">
                            </span>
                          </a>
                        </li>
                        <li data-original-index="52">
                          <a tabindex="0" dataTokens="null" role="option" ariaDisabled="false" ariaSelected="false">
                            <span className="text">WA
                            </span>
                            <span className="lt-icon glyphicon-ok check-mark">
                            </span>
                          </a>
                        </li>
                        <li data-original-index="53">
                          <a tabindex="0" dataTokens="null" role="option" ariaDisabled="false" ariaSelected="false">
                            <span className="text">WI
                            </span>
                            <span className="lt-icon glyphicon-ok check-mark">
                            </span>
                          </a>
                        </li>
                        <li data-original-index="54">
                          <a tabindex="0" dataTokens="null" role="option" ariaDisabled="false" ariaSelected="false">
                            <span className="text">WV
                            </span>
                            <span className="lt-icon glyphicon-ok check-mark">
                            </span>
                          </a>
                        </li>
                        <li data-original-index="55">
                          <a tabindex="0" dataTokens="null" role="option" ariaDisabled="false" ariaSelected="false">
                            <span className="text">WY
                            </span>
                            <span className="lt-icon glyphicon-ok check-mark">
                            </span>
                          </a>
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
              <a href="#" className="btn btn-primary">Save
              </a>
            </div>
            <div className="d-inline ml-3">
              <a href="#" className="btn btn-default cancelBtn">Cancel
              </a>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default ShippingAddressEdit
