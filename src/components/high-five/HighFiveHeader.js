import React from 'react'

const HighFiveHeader = (props) => {
  return (
    <div className="m-top-s4 text-center">
        <img 
        src={props.desktopSrc}
        className="img-responsive hidden-xs"
        alt="High Five Online April" />
        <img
        src={props.mobileSrc}
        className="img-responsive visible-xs"
        alt="High Five Online April" />
    </div>
  )
}

export default HighFiveHeader
