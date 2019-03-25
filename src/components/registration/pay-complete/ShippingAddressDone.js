import React, { Component } from 'react'

class ShippingAddressDone extends Component {
  render() {
    return (
      <div class="mt-0 shipAddressDone">
        <p>
          {this.state.address}
          <br />
          {this.state.city}{' '}
          {this.state.state}{', '}
          {this.state.zip}
        </p>
      </div>
    )
  }
}

export default ShippingAddressDone
