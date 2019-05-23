import React, { Component } from 'react'
import BasicInfoForm from './basic-info/BasicInfoForm'

class BasicInfo extends Component {
  render() {
    return (
        <div className="row">
          <div className="col-md-3 hidden-xs hidden-sm">
            <img src={require('../../images/promo-desktop.jpg')} className="img-responsive" alt="img" />
          </div>
          <div className="col-md-1 hidden-sm hidden-xs"></div>
          <div className="col-md-8">
            <BasicInfoForm />
        </div>
      </div>
    )
  }
}

export default BasicInfo
