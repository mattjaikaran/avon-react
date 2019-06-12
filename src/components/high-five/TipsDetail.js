import React from 'react'

const TipsDetails = (props) => {
  const { tipsDesktopImg, tipsMobileImg, title, paragraph } = props
  return (
    <div className="col-md-4 mt-5 mt-lg-0 pt-5 pt-lg-0">
      <img src={tipsDesktopImg} className="img-responsive hidden-xs" alt="" />
      <img src={tipsMobileImg} className="img-responsive visible-xs" alt="" />
      <div className="m-top-s2">
        <h1 className="title-secondary">{title}</h1>
        <p className="lp text-left">
        {paragraph}
        </p>
      </div>
    </div>
  )
}

export default TipsDetails
