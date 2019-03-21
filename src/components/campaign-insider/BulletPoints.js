import React from 'react'

const BulletPoints = (props) => {
  return this.props.bulletPoints.map((bullet, i) => {
    return (
      <li key={i}>
        <p>{bullet}</p>
      </li>
    )
  })
}

export default BulletPoints
