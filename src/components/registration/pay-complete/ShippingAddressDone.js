import React, { Component } from 'react'

class ShippingAddressDone extends Component {
  constructor(props) {
    super(props)
    this.state = {
      address: '',
      city: '',
      state: '',
      zip: ''
    }
  }
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
