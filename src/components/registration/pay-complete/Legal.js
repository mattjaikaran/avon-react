import React, { Component } from 'react'

import LegalModal from './LegalModal'
import Checkbox from './Checkbox'

class Legal extends Component {
  render() {
    return (
      <div className="mt-5">
        <LegalModal
          link={'#'}
          title={'Consent to Proceed Electronically'}
          />
        <LegalModal
          link={'#'}
          title={'Terms and Conditions'}
          />
        <Checkbox />
      </div>
    )
  }
}

export default Legal
