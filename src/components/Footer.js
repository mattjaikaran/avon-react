import React from 'react'
// import { Link } from 'react-router-dom'

const Footer = () => {
  return(
    <div className="my-5 footer text-center global-footer small clear border-top pt-5">
      <div className="col-md-10 col-md-offset-1">
        <div className="footer-group mb-4">
          <ul className="list-unstyled list-inline">
            <li className="my-1 mx-2">
              Site Map
            </li>
            <li className="my-1 mx-2">
              Privacy Statement
            </li>
            <li className="my-1 mx-2">
              Conditions of Use
            </li>
            <li className="my-1 mx-2">
              Product Recall
            </li>
            <li className="my-1 mx-2">
              Direct Selling Messaging
            </li>
            <li className="my-1 mx-2">
              Product Safety Certificates
            </li>
            <li className="my-1 mx-2">
              California Supply Chains Act
            </li>
            <li className="my-1 mx-2">
              Animal Welfare Policy
            </li>
          </ul>
        </div>
        <div className="footer-group my-4">
          <h6 className="title mb-2 d-inline mx-2">Call Support
          </h6>
          <ul className="list-unstyled list-inline d-inline">
            <li className="my-1 mx-2">English:
              (866) 513-AVON
            </li>
            <li className="my-1 mx-2">Espanol:
              (866) 588-AVON
            </li>
          </ul>
        </div>
        <div className="footer-group my-4">
          © 2019 New Avon LLC
        </div>
      </div>
    </div>
  )
}

export default Footer
