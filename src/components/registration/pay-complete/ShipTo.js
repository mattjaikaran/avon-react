import React, { Component } from 'react'
import ShippingAddressEdit from './ShippingAddressEdit'
import ShippingAddressDone from './ShippingAddressDone'

class ShipTo extends Component {
  constructor(props) {
    super(props)
    this.state = {
      shipAddress: '',
      shipCity: '',
      shipState: '',
      shipZip: ''
    }
  }
  onEditClick = (e) => {
    return <ShippingAddressEdit /> || <ShippingAddressDone />
  }

  render() {
    return (
      <div className="box-emphasize list-group-item shipBox mb-4">
        <div className="row">
          <div className="col-xs-6">
            <h6>
              SHIP TO
            </h6>
          </div>
          <div className="col-xs-6 mt-2 text-right">
            <a href="!#" className="link-underline editBtn" onClick={this.onEditClick}>
              Edit
            </a>
          </div>
        </div>
        {this.onEditClick()}
      </div>
    )
  }
}

export default ShipTo
