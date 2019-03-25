import React, { Component } from 'react'

class IntroVideo extends Component {
  render() {
    return (
      <div className="mt-4 text-center">
        <img src={require('../util/video.png')} className="img-responsive" alt="video" />
      </div>
    )
  }

}

export default IntroVideo
