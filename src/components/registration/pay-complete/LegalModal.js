import React from 'react'
import { Link } from 'react-router-dom'

const LegalModal = (props) => {
  return (
    <div className="form-group has-feedback">
      <Link href={props.link} className="no-underline" data-toggle="modal" data-target="#terms-conditions">
        <div className="select-block bg-white pt-3 pl-4">
          <p className="line-height">
            <span className="link-plain">
              <small>
                <strong>{props.title}</strong>
              </small>
            </span>
            <span className="pt-0 carat-lg lt-icon lt-carat-right form-control-feedback">
            </span>
          </p>
        </div>
      </Link>
    </div>
  )
}

export default LegalModal
