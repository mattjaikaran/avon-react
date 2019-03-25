import React, { Component } from 'react'

class PaymentMethod extends Component {
  render() {
    return (
      <div className="box-emphasize list-group-item paymentBox mb-4">
        <div className="mt-1 mb-4">
          <div className="pb-1">
            <h6>
              PAYMENT METHOD
            </h6>
          </div>
          <div className="mb-3">
            <div className="radio one two">
              <label className="control-label d-block">
                <input type="radio" name="radioGroup" id="radio1" value="option1" />
                <span className="mr-4" />
                <img src={require('../../../images/cc-icon.png')} className="pr-3" alt="cc" /> Credit Card or Debit Card
              </label>
            </div>
            <div className="ccDetails pl-0 pl-sm-5 pr-2 ml-0 ml-sm-3">
              <div className="form-group mt-4">
                <label for="">Card Number
                </label>
                <input type="text" className="form-control" />
              </div>
              <div className="form-group">
                <label for="">Name on Card
                </label>
                <input type="text" className="form-control" />
              </div>
              <div className="mt-3">
                <div className="row">
                  <div className="col-sm-5 col-xs-5">
                    <label className="control-label">Exp Date
                    </label>
                    <div className="btn-group bootstrap-select form-control form-inline ng-pristine ng-untouched ng-invalid ng-invalid-required ng-valid ng-valid-required">
                      <button type="button" className="btn dropdown-toggle bs-placeholder btn-select" data-toggle="dropdown" data-id="exp-month" title="Month">
                        <span className="filter-option pull-left">Month
                        </span>
                        <span className="bs-caret">
                          <span className="caret">
                          </span>
                        </span>
                      </button>
                      <div className="dropdown-menu open" style={{maxHeight: '157 px', overflow: 'hidden' }}>
                        <ul className="dropdown-menu inner" role="listbox" aria-expanded="false" style={{maxHeight: 156 + 'px', overflowY: 'auto'}}>
                          <li data-original-index="0" className="disabled selected">
                            <a tabindex="-1" className="ng-binding ng-scope" data-tokens="null" role="option" href="#" aria-disabled="true" aria-selected="true">
                              <span className="text">Month
                              </span>
                              <span className="lt-icon glyphicon-ok check-mark">
                              </span>
                            </a>
                          </li>
                          <li data-original-index="1">
                            <a tabindex="0" className="ng-binding ng-scope" data-tokens="null" role="option" aria-disabled="false" aria-selected="false">
                              <span className="text">01
                              </span>
                              <span className="lt-icon glyphicon-ok check-mark">
                              </span>
                            </a>
                          </li>
                          <li data-original-index="2">
                            <a tabindex="0" className="ng-binding ng-scope" data-tokens="null" role="option" aria-disabled="false" aria-selected="false">
                              <span className="text">02
                              </span>
                              <span className="lt-icon glyphicon-ok check-mark">
                              </span>
                            </a>
                          </li>
                          <li data-original-index="3">
                            <a tabindex="0" className="ng-binding ng-scope" data-tokens="null" role="option" aria-disabled="false" aria-selected="false">
                              <span className="text">03
                              </span>
                              <span className="lt-icon glyphicon-ok check-mark">
                              </span>
                            </a>
                          </li>
                          <li data-original-index="4">
                            <a tabindex="0" className="ng-binding ng-scope" data-tokens="null" role="option" aria-disabled="false" aria-selected="false">
                              <span className="text">04
                              </span>
                              <span className="lt-icon glyphicon-ok check-mark">
                              </span>
                            </a>
                          </li>
                          <li data-original-index="5">
                            <a tabindex="0" className="ng-binding ng-scope" data-tokens="null" role="option" aria-disabled="false" aria-selected="false">
                              <span className="text">05
                              </span>
                              <span className="lt-icon glyphicon-ok check-mark">
                              </span>
                            </a>
                          </li>
                          <li data-original-index="6">
                            <a tabindex="0" className="ng-binding ng-scope" data-tokens="null" role="option" aria-disabled="false" aria-selected="false">
                              <span className="text">06
                              </span>
                              <span className="lt-icon glyphicon-ok check-mark">
                              </span>
                            </a>
                          </li>
                          <li data-original-index="7">
                            <a tabindex="0" className="ng-binding ng-scope" data-tokens="null" role="option" aria-disabled="false" aria-selected="false">
                              <span className="text">07
                              </span>
                              <span className="lt-icon glyphicon-ok check-mark">
                              </span>
                            </a>
                          </li>
                          <li data-original-index="8">
                            <a tabindex="0" className="ng-binding ng-scope" data-tokens="null" role="option" aria-disabled="false" aria-selected="false">
                              <span className="text">08
                              </span>
                              <span className="lt-icon glyphicon-ok check-mark">
                              </span>
                            </a>
                          </li>
                          <li data-original-index="9">
                            <a tabindex="0" className="ng-binding ng-scope" data-tokens="null" role="option" aria-disabled="false" aria-selected="false">
                              <span className="text">09
                              </span>
                              <span className="lt-icon glyphicon-ok check-mark">
                              </span>
                            </a>
                          </li>
                          <li data-original-index="10">
                            <a tabindex="0" className="ng-binding ng-scope" dataTokens="null" role="option" ariaDisabled="false" aria-selected="false">
                              <span className="text">10
                              </span>
                              <span className="lt-icon glyphicon-ok check-mark">
                              </span>
                            </a>
                          </li>
                          <li data-original-index="11">
                            <a tabindex="0" className="ng-binding ng-scope" dataTokens="null" role="option" ariaDisabled="false" ariaSelected="false">
                              <span className="text">11
                              </span>
                              <span className="lt-icon glyphicon-ok check-mark">
                              </span>
                            </a>
                          </li>
                          <li data-original-index="12">
                            <a href="#" tabindex="0" className="ng-binding ng-scope" dataTokens="null" role="option" ariaDisabled="false" ariaSelected="false">
                              <span className="text">12
                              </span>
                              <span className="lt-icon glyphicon-ok check-mark">
                              </span>
                            </a>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>
                  <div className="col-sm-3 col-xs-3 p-0">
                    <label className="control-label invisible">Year
                    </label>
                    <div className="btn-group bootstrap-select form-control form-inline ng-pristine ng-untouched ng-invalid ng-invalid-required ng-valid ng-valid-required">
                      <button type="button" className="btn dropdown-toggle bs-placeholder btn-select" data-toggle="dropdown">
                        <span className="filter-option pull-left">Year
                        </span>
                        <span className="bs-caret">
                          <span className="caret">
                          </span>
                        </span>
                      </button>
                      <div className="dropdown-menu open" role="combobox" style={{maxHeight: 157 + 'px', overflow: 'hidden' }}>
                        <ul className="dropdown-menu inner" role="listbox" aria-expanded="false" style={{maxHeight: 156 + 'px', overflowY: 'auto'}}>
                          <li data-original-index="0" className="disabled selected">
                            <a tabindex="-1" className="ng-binding ng-scope" data-tokens="null" role="option" href="#" aria-disabled="true" aria-selected="true">
                              <span className="text">Year
                              </span>
                              <span className="lt-icon glyphicon-ok check-mark">
                              </span>
                            </a>
                          </li>
                          <li data-original-index="1">
                            <a tabindex="0" className="ng-binding ng-scope" data-tokens="null" role="option" aria-disabled="false" aria-selected="false">
                              <span className="text">2019
                              </span>
                              <span className="lt-icon glyphicon-ok check-mark">
                              </span>
                            </a>
                          </li>
                          <li data-original-index="2">
                            <a tabindex="0" className="ng-binding ng-scope" data-tokens="null" role="option" aria-disabled="false" aria-selected="false">
                              <span className="text">2020
                              </span>
                              <span className="lt-icon glyphicon-ok check-mark">
                              </span>
                            </a>
                          </li>
                          <li data-original-index="3">
                            <a tabindex="0" className="ng-binding ng-scope" data-tokens="null" role="option" aria-disabled="false" aria-selected="false">
                              <span className="text">2021
                              </span>
                              <span className="lt-icon glyphicon-ok check-mark">
                              </span>
                            </a>
                          </li>
                          <li data-original-index="4">
                            <a tabindex="0" className="ng-binding ng-scope" data-tokens="null" role="option" aria-disabled="false" aria-selected="false">
                              <span className="text">2022
                              </span>
                              <span className="lt-icon glyphicon-ok check-mark">
                              </span>
                            </a>
                          </li>
                          <li data-original-index="5">
                            <a tabindex="0" className="ng-binding ng-scope" data-tokens="null" role="option" aria-disabled="false" aria-selected="false">
                              <span className="text">2023
                              </span>
                              <span className="lt-icon glyphicon-ok check-mark">
                              </span>
                            </a>
                          </li>
                          <li data-original-index="6">
                            <a tabindex="0" className="ng-binding ng-scope" data-tokens="null" role="option" aria-disabled="false" aria-selected="false">
                              <span className="text">2024
                              </span>
                              <span className="lt-icon glyphicon-ok check-mark">
                              </span>
                            </a>
                          </li>
                          <li data-original-index="7">
                            <a tabindex="0" className="ng-binding ng-scope" data-tokens="null" role="option" aria-disabled="false" aria-selected="false">
                              <span className="text">2025
                              </span>
                              <span className="lt-icon glyphicon-ok check-mark">
                              </span>
                            </a>
                          </li>
                          <li data-original-index="8">
                            <a tabindex="0" className="ng-binding ng-scope" data-tokens="null" role="option" aria-disabled="false" aria-selected="false">
                              <span className="text">2026
                              </span>
                              <span className="lt-icon glyphicon-ok check-mark">
                              </span>
                            </a>
                          </li>
                          <li data-original-index="9">
                            <a tabindex="0" className="ng-binding ng-scope" data-tokens="null" role="option" aria-disabled="false" aria-selected="false">
                              <span className="text">2027
                              </span>
                              <span className="lt-icon glyphicon-ok check-mark">
                              </span>
                            </a>
                          </li>
                          <li data-original-index="10">
                            <a tabindex="0" className="ng-binding ng-scope" data-tokens="null" role="option" aria-disabled="false" aria-selected="false">
                              <span className="text">2028
                              </span>
                              <span className="lt-icon glyphicon-ok check-mark">
                              </span>
                            </a>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>
                  <div className="col-sm-4 col-xs-4">
                    <div className="form-group mb-2">
                      <label for="">CVV
                        <a href="javascript:void(0)" data-toggle="modal" data-target="#cvv" className="lt-icon lt-tip lt-medium align-middle no-underline" data-container="body" data-placement="bottom">
                        </a>
                      </label>
                      <input type="text" className="form-control" />
                    </div>
                  </div>
                </div>
              </div>
              <div className="mt-5">
                <h6>BILLING ADDRESS
                </h6>
                <div className="form-group mt-4">
                  <label for="">Address
                  </label>
                  <input type="text" className="form-control" />
                </div>
                <div className="mt-3">
                  <div className="row">
                    <div className="col-xs-5">
                      <div className="form-group">
                        <label for="">Zip
                        </label>
                        <input type="text" className="form-control" placeholder="60642" />
                      </div>
                    </div>
                    <div className="col-xs-7">
                      <div className="form-group">
                        <label for="">City
                        </label>
                        <input type="text" className="form-control" placeholder="Chicago" />
                      </div>
                    </div>
                  </div>
                </div>
                <div className="mt-1">
                  <div className="form-group">
                    <label for="">State
                    </label>
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
                              <a tabindex="-1" className="ng-binding" data-tokens="null" role="option" href="#" aria-disabled="true" aria-selected="false">
                                <span className="text">Select
                                </span>
                                <span className="lt-icon glyphicon-ok check-mark">
                                </span>
                              </a>
                            </li>
                            <li data-original-index="1">
                              <a tabindex="0" data-tokens="null" role="option" aria-disabled="false" aria-selected="false">
                                <span className="text">AA
                                </span>
                                <span className="lt-icon glyphicon-ok check-mark">
                                </span>
                              </a>
                            </li>
                            <li data-original-index="2">
                              <a tabindex="0" data-tokens="null" role="option" aria-disabled="false" aria-selected="false">
                                <span className="text">AE
                                </span>
                                <span className="lt-icon glyphicon-ok check-mark">
                                </span>
                              </a>
                            </li>
                            <li data-original-index="3">
                              <a tabindex="0" data-tokens="null" role="option" aria-disabled="false" aria-selected="false">
                                <span className="text">AK
                                </span>
                                <span className="lt-icon glyphicon-ok check-mark">
                                </span>
                              </a>
                            </li>
                            <li data-original-index="4">
                              <a tabindex="0" data-tokens="null" role="option" aria-disabled="false" aria-selected="false">
                                <span className="text">AL
                                </span>
                                <span className="lt-icon glyphicon-ok check-mark">
                                </span>
                              </a>
                            </li>
                            <li data-original-index="5">
                              <a tabindex="0" data-tokens="null" role="option" aria-disabled="false" aria-selected="false">
                                <span className="text">AP
                                </span>
                                <span className="lt-icon glyphicon-ok check-mark">
                                </span>
                              </a>
                            </li>
                            <li data-original-index="6">
                              <a tabindex="0" data-tokens="null" role="option" aria-disabled="false" aria-selected="false">
                                <span className="text">AR
                                </span>
                                <span className="lt-icon glyphicon-ok check-mark">
                                </span>
                              </a>
                            </li>
                            <li data-original-index="7">
                              <a tabindex="0" data-tokens="null" role="option" aria-disabled="false" aria-selected="false">
                                <span className="text">AZ
                                </span>
                                <span className="lt-icon glyphicon-ok check-mark">
                                </span>
                              </a>
                            </li>
                            <li data-original-index="8">
                              <a tabindex="0" data-tokens="null" role="option" aria-disabled="false" aria-selected="false">
                                <span className="text">CA
                                </span>
                                <span className="lt-icon glyphicon-ok check-mark">
                                </span>
                              </a>
                            </li>
                            <li data-original-index="9">
                              <a tabindex="0" data-tokens="null" role="option" aria-disabled="false" aria-selected="false">
                                <span className="text">CO
                                </span>
                                <span className="lt-icon glyphicon-ok check-mark">
                                </span>
                              </a>
                            </li>
                            <li data-original-index="10">
                              <a tabindex="0" data-tokens="null" role="option" aria-disabled="false" aria-selected="false">
                                <span className="text">CT
                                </span>
                                <span className="lt-icon glyphicon-ok check-mark">
                                </span>
                              </a>
                            </li>
                            <li data-original-index="11">
                              <a tabindex="0" data-tokens="null" role="option" aria-disabled="false" aria-selected="false">
                                <span className="text">DC
                                </span>
                                <span className="lt-icon glyphicon-ok check-mark">
                                </span>
                              </a>
                            </li>
                            <li data-original-index="12">
                              <a tabindex="0" data-tokens="null" role="option" aria-disabled="false" aria-selected="false">
                                <span className="text">DE
                                </span>
                                <span className="lt-icon glyphicon-ok check-mark">
                                </span>
                              </a>
                            </li>
                            <li data-original-index="13">
                              <a tabindex="0" data-tokens="null" role="option" aria-disabled="false" aria-selected="false">
                                <span className="text">FL
                                </span>
                                <span className="lt-icon glyphicon-ok check-mark">
                                </span>
                              </a>
                            </li>
                            <li data-original-index="14">
                              <a tabindex="0" data-tokens="null" role="option" aria-disabled="false" aria-selected="false">
                                <span className="text">GA
                                </span>
                                <span className="lt-icon glyphicon-ok check-mark">
                                </span>
                              </a>
                            </li>
                            <li data-original-index="15">
                              <a tabindex="0" data-tokens="null" role="option" aria-disabled="false" aria-selected="false">
                                <span className="text">GU
                                </span>
                                <span className="lt-icon glyphicon-ok check-mark">
                                </span>
                              </a>
                            </li>
                            <li data-original-index="16">
                              <a tabindex="0" data-tokens="null" role="option" aria-disabled="false" aria-selected="false">
                                <span className="text">HI
                                </span>
                                <span className="lt-icon glyphicon-ok check-mark">
                                </span>
                              </a>
                            </li>
                            <li data-original-index="17">
                              <a tabindex="0" data-tokens="null" role="option" aria-disabled="false" aria-selected="false">
                                <span className="text">IA
                                </span>
                                <span className="lt-icon glyphicon-ok check-mark">
                                </span>
                              </a>
                            </li>
                            <li data-original-index="18">
                              <a tabindex="0" data-tokens="null" role="option" aria-disabled="false" aria-selected="false">
                                <span className="text">ID
                                </span>
                                <span className="lt-icon glyphicon-ok check-mark">
                                </span>
                              </a>
                            </li>
                            <li data-original-index="19">
                              <a tabindex="0" data-tokens="null" role="option" aria-disabled="false" aria-selected="false">
                                <span className="text">IL
                                </span>
                                <span className="lt-icon glyphicon-ok check-mark">
                                </span>
                              </a>
                            </li>
                            <li data-original-index="20">
                              <a tabindex="0" data-tokens="null" role="option" aria-disabled="false" aria-selected="false">
                                <span className="text">IN
                                </span>
                                <span className="lt-icon glyphicon-ok check-mark">
                                </span>
                              </a>
                            </li>
                            <li data-original-index="21">
                              <a tabindex="0" data-tokens="null" role="option" aria-disabled="false" aria-selected="false">
                                <span className="text">KS
                                </span>
                                <span className="lt-icon glyphicon-ok check-mark">
                                </span>
                              </a>
                            </li>
                            <li data-original-index="22">
                              <a tabindex="0" data-tokens="null" role="option" aria-disabled="false" aria-selected="false">
                                <span className="text">KY
                                </span>
                                <span className="lt-icon glyphicon-ok check-mark">
                                </span>
                              </a>
                            </li>
                            <li data-original-index="23">
                              <a tabindex="0" data-tokens="null" role="option" aria-disabled="false" aria-selected="false">
                                <span className="text">LA
                                </span>
                                <span className="lt-icon glyphicon-ok check-mark">
                                </span>
                              </a>
                            </li>
                            <li data-original-index="24">
                              <a tabindex="0" data-tokens="null" role="option" aria-disabled="false" aria-selected="false">
                                <span className="text">MA
                                </span>
                                <span className="lt-icon glyphicon-ok check-mark">
                                </span>
                              </a>
                            </li>
                            <li data-original-index="25">
                              <a tabindex="0" data-tokens="null" role="option" aria-disabled="false" aria-selected="false">
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
                              <a tabindex="0" data-tokens="null" role="option" aria-disabled="false" aria-selected="true">
                                <span className="text">MI
                                </span>
                                <span className="lt-icon glyphicon-ok check-mark">
                                </span>
                              </a>
                            </li>
                            <li data-original-index="28">
                              <a tabindex="0" data-tokens="null" role="option" aria-disabled="false" aria-selected="false">
                                <span className="text">MN
                                </span>
                                <span className="lt-icon glyphicon-ok check-mark">
                                </span>
                              </a>
                            </li>
                            <li data-original-index="29">
                              <a tabindex="0" data-tokens="null" role="option" aria-disabled="false" aria-selected="false">
                                <span className="text">MO
                                </span>
                                <span className="lt-icon glyphicon-ok check-mark">
                                </span>
                              </a>
                            </li>
                            <li data-original-index="30">
                              <a tabindex="0" data-tokens="null" role="option" aria-disabled="false" aria-selected="false">
                                <span className="text">MS
                                </span>
                                <span className="lt-icon glyphicon-ok check-mark">
                                </span>
                              </a>
                            </li>
                            <li data-original-index="31">
                              <a tabindex="0" data-tokens="null" role="option" aria-disabled="false" aria-selected="false">
                                <span className="text">MT
                                </span>
                                <span className="lt-icon glyphicon-ok check-mark">
                                </span>
                              </a>
                            </li>
                            <li data-original-index="32">
                              <a tabindex="0" data-tokens="null" role="option" aria-disabled="false" aria-selected="false">
                                <span className="text">NC
                                </span>
                                <span className="lt-icon glyphicon-ok check-mark">
                                </span>
                              </a>
                            </li>
                            <li data-original-index="33">
                              <a tabindex="0" data-tokens="null" role="option" aria-disabled="false" aria-selected="false">
                                <span className="text">ND
                                </span>
                                <span className="lt-icon glyphicon-ok check-mark">
                                </span>
                              </a>
                            </li>
                            <li data-original-index="34">
                              <a tabindex="0" data-tokens="null" role="option" aria-disabled="false" aria-selected="false">
                                <span className="text">NE
                                </span>
                                <span className="lt-icon glyphicon-ok check-mark">
                                </span>
                              </a>
                            </li>
                            <li data-original-index="35">
                              <a tabindex="0" data-tokens="null" role="option" aria-disabled="false" aria-selected="false">
                                <span className="text">NH
                                </span>
                                <span className="lt-icon glyphicon-ok check-mark">
                                </span>
                              </a>
                            </li>
                            <li data-original-index="36">
                              <a tabindex="0" data-tokens="null" role="option" aria-disabled="false" aria-selected="false">
                                <span className="text">NJ
                                </span>
                                <span className="lt-icon glyphicon-ok check-mark">
                                </span>
                              </a>
                            </li>
                            <li data-original-index="37">
                              <a tabindex="0" data-tokens="null" role="option" aria-disabled="false" aria-selected="false">
                                <span className="text">NM
                                </span>
                                <span className="lt-icon glyphicon-ok check-mark">
                                </span>
                              </a>
                            </li>
                            <li data-original-index="38">
                              <a tabindex="0" data-tokens="null" role="option" aria-disabled="false" aria-selected="false">
                                <span className="text">NV
                                </span>
                                <span className="lt-icon glyphicon-ok check-mark">
                                </span>
                              </a>
                            </li>
                            <li data-original-index="39">
                              <a tabindex="0" data-tokens="null" role="option" aria-disabled="false" aria-selected="false">
                                <span className="text">NY
                                </span>
                                <span className="lt-icon glyphicon-ok check-mark">
                                </span>
                              </a>
                            </li>
                            <li data-original-index="40">
                              <a tabindex="0" data-tokens="null" role="option" aria-disabled="false" aria-selected="false">
                                <span className="text">OH
                                </span>
                                <span className="lt-icon glyphicon-ok check-mark">
                                </span>
                              </a>
                            </li>
                            <li data-original-index="41">
                              <a tabindex="0" data-tokens="null" role="option" aria-disabled="false" aria-selected="false">
                                <span className="text">OK
                                </span>
                                <span className="lt-icon glyphicon-ok check-mark">
                                </span>
                              </a>
                            </li>
                            <li data-original-index="42">
                              <a tabindex="0" data-tokens="null" role="option" aria-disabled="false" aria-selected="false">
                                <span className="text">OR
                                </span>
                                <span className="lt-icon glyphicon-ok check-mark">
                                </span>
                              </a>
                            </li>
                            <li data-original-index="43">
                              <a tabindex="0" data-tokens="null" role="option" aria-disabled="false" aria-selected="false">
                                <span className="text">PA
                                </span>
                                <span className="lt-icon glyphicon-ok check-mark">
                                </span>
                              </a>
                            </li>
                            <li data-original-index="44">
                              <a tabindex="0" data-tokens="null" role="option" aria-disabled="false" aria-selected="false">
                                <span className="text">RI
                                </span>
                                <span className="lt-icon glyphicon-ok check-mark">
                                </span>
                              </a>
                            </li>
                            <li data-original-index="45">
                              <a tabindex="0" data-tokens="null" role="option" aria-disabled="false" aria-selected="false">
                                <span className="text">SC
                                </span>
                                <span className="lt-icon glyphicon-ok check-mark">
                                </span>
                              </a>
                            </li>
                            <li data-original-index="46">
                              <a tabindex="0" data-tokens="null" role="option" aria-disabled="false" aria-selected="false">
                                <span className="text">SD
                                </span>
                                <span className="lt-icon glyphicon-ok check-mark">
                                </span>
                              </a>
                            </li>
                            <li data-original-index="47">
                              <a tabindex="0" data-tokens="null" role="option" aria-disabled="false" aria-selected="false">
                                <span className="text">TN
                                </span>
                                <span className="lt-icon glyphicon-ok check-mark">
                                </span>
                              </a>
                            </li>
                            <li data-original-index="48">
                              <a tabindex="0" data-tokens="null" role="option" aria-disabled="false" aria-selected="false">
                                <span className="text">TX
                                </span>
                                <span className="lt-icon glyphicon-ok check-mark">
                                </span>
                              </a>
                            </li>
                            <li data-original-index="49">
                              <a tabindex="0" data-tokens="null" role="option" aria-disabled="false" aria-selected="false">
                                <span className="text">UT
                                </span>
                                <span className="lt-icon glyphicon-ok check-mark">
                                </span>
                              </a>
                            </li>
                            <li data-original-index="50">
                              <a tabindex="0" data-tokens="null" role="option" aria-disabled="false" aria-selected="false">
                                <span className="text">VA
                                </span>
                                <span className="lt-icon glyphicon-ok check-mark">
                                </span>
                              </a>
                            </li>
                            <li data-original-index="51">
                              <a tabindex="0" data-tokens="null" role="option" aria-disabled="false" aria-selected="false">
                                <span className="text">VT
                                </span>
                                <span className="lt-icon glyphicon-ok check-mark">
                                </span>
                              </a>
                            </li>
                            <li data-original-index="52">
                              <a tabindex="0" data-tokens="null" role="option" aria-disabled="false" aria-selected="false">
                                <span className="text">WA
                                </span>
                                <span className="lt-icon glyphicon-ok check-mark">
                                </span>
                              </a>
                            </li>
                            <li data-original-index="53">
                              <a tabindex="0" data-tokens="null" role="option" aria-disabled="false" aria-selected="false">
                                <span className="text">WI
                                </span>
                                <span className="lt-icon glyphicon-ok check-mark">
                                </span>
                              </a>
                            </li>
                            <li data-original-index="54">
                              <a tabindex="0" data-tokens="null" role="option" aria-disabled="false" aria-selected="false">
                                <span className="text">WV
                                </span>
                                <span className="lt-icon glyphicon-ok check-mark">
                                </span>
                              </a>
                            </li>
                            <li data-original-index="55">
                              <a tabindex="0" data-tokens="null" role="option" aria-disabled="false" aria-selected="false">
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
              <div className="mt-4 pt-1">
                <div className="checkbox wrap-label">
                  <label className="">
                    <input type="checkbox" id="checkbox1" name="checkbox1" value="option1" />
                    <span className="mr-4">
                      <i className="lt-icon lt-checkbox-checkmark lt-small">
                      </i>
                      <i className="indeterminate lt-icon lt-checkbox-minus">
                      </i>
                    </span>
                    Save credit card information to my account.
                    <br />
                    <small className="text-muted">
                      Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                    </small>
                  </label>
                </div>
                <div className="mt-4 pt-3 mb-5">
                  <a href="#" className="btn btn-primary">Save
                  </a>
                </div>
              </div>
            </div>
            <div className="radio one two">
              <label className="control-label mt-2">
                <input type="radio" name="radioGroup" id="radio2" value="option2" />
                <span className="mr-4" />
                <img src={require('../../../images/paypal-icon.png')} className="pr-3" /> PayPal
              </label>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default PaymentMethod
