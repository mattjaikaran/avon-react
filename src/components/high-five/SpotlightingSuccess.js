import React from 'react'
import Video from './Video'

const SpotlightingSuccess = () => {
  return (
    <div className="m-top-s4 text-center">
      <h1 className="title-secondary">Spotlighting Success</h1>
      <p className="lp">
        Get inspired by the Representatives crushing this incentive—and learn how you can, too!
      </p>
      <Video videoSrc={require('../../images/high-five/video.png')}  />
    </div>
  )
}

export default SpotlightingSuccess
