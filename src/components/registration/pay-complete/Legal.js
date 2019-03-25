import React, { Component } from 'react'
import { Link } from 'react-router-dom'

import LegalModal from './LegalModal'
import Checkbox from './Checkbox'

class Legal extends Component {
  render() {
    return (
      <div>
        <LegalModal
          link={'#'}
          title={'Consent to Proceed Electronically'}
          />
        <LegalModal
          link={'#'}
          title={'Independent Sales Representative Contract Terms and Conditions'}
          />
        <Checkbox />
      </div>
    )
  }
}

export default Legal
