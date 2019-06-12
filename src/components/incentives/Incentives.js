import React, { Component } from 'react'

import Intro from './Intro'
import Incentive from './Incentive'

class Incentives extends Component {
  state = {
    incentives: []
  }

  renderIncentive = () => {
    return <Incentive />
  }

  render() {
    return (
      <div>
        <Intro />
        <div className="row">
          {this.renderIncentive()}
        </div>
      </div>
    )
  }
}

export default Incentives
