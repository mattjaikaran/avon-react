import React from 'react'

const Video = (props) => {
  return (
    <div className="m-top-s4 text-center">
      <img src={props.videoSrc} className="img-responsive" alt="video" />
    </div>
  )
}

export default Video
