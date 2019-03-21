import React, { Component } from 'react'
import Autocomplete from 'react-autocomplete'

import MentorChosen from './MentorChosen'

class Mentor extends Component {
  constructor(props) {
    super(props)
    this.state = {
      value: ''
    }
  }
  render() {
    let { value } = this.state
    return (
      <div className="form-group" style={{ marginBottom: '60px' }}>
        <Autocomplete
          className="form-control"
          getItemValue={(item) => item.label}
          items={[
            { key: 1, label: 'Kat' },
            { key: 2, label: 'Iria' },
            { key: 3, label: 'Troll' }
          ]}
          renderItem={(item, isHighlighted) =>
            <div style={{ background: isHighlighted ? 'lightgray' : 'white' }}>
              {item.label}
            </div>
          }
          value={value}
          onChange={(e) => value = e.target.value}
          onSelect={(val) => value = val}
      />
      <MentorChosen />
      </div>
    )
  }
}

export default Mentor
