import React from 'react'
// import { Link } from 'react-router-dom'

const Footer = () => {
  return(
    <div class="my-5 footer text-center global-footer small clear border-top pt-5">
      <div class="col-md-10 col-md-offset-1">
        <div class="footer-group mb-4">
          <ul class="list-unstyled list-inline">
            <li class="my-1 mx-2">
              Site Map
            </li>
            <li class="my-1 mx-2">
              Privacy Statement
            </li>
            <li class="my-1 mx-2">
              Conditions of Use
            </li>
            <li class="my-1 mx-2">
              Product Recall
            </li>
            <li class="my-1 mx-2">
              Direct Selling Messaging
            </li>
            <li class="my-1 mx-2">
              Product Safety Certificates
            </li>
            <li class="my-1 mx-2">
              California Supply Chains Act
            </li>
            <li class="my-1 mx-2">
              Animal Welfare Policy
            </li>
          </ul>
        </div>
        <div class="footer-group my-4">
          <h6 class="title mb-2 d-inline mx-2">Call Support
          </h6>
          <ul class="list-unstyled list-inline d-inline">
            <li class="my-1 mx-2">English:
              (866) 513-AVON
            </li>
            <li class="my-1 mx-2">Espanol:
              (866) 588-AVON
            </li>
          </ul>
        </div>
        <div class="footer-group my-4">
          © 2019 New Avon LLC
        </div>
      </div>
    </div>
  )
}

export default Footer
