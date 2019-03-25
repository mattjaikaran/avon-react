import React from 'react'
import { Link } from 'react-router-dom'

const Checkbox = (props) => {
  return (
    <div className="my-5">
      <div className="checkbox wrap-label">
        <label className="text-muted">
          <input type="checkbox" id="checkbox1" name="checkbox1" value="option1" />
          <span className="">
            <i className="lt-icon lt-checkbox-checkmark lt-small" />
            <i className="indeterminate lt-icon lt-checkbox-minus" />
          </span>
          <small>
            By clicking this box, I affirm that I have read and agree to the
            <a href="#" className="link-underline" data-toggle="modal" data-target="#electronic-consent">Consent to Proceed Electronically
            </a>.
          </small>
        </label>
      </div>
      <div className="checkbox wrap-label mt-3">
        <label className="text-muted">
          <input type="checkbox" id="checkbox2" name="checkbox2" value="option2" />
          <span className="">
            <i className="lt-icon lt-checkbox-checkmark lt-small" />
            <i className="indeterminate lt-icon lt-checkbox-minus" />
          </span>
          <small>
            By clicking this box, I agree that I have read, understand, and accept the
            <a href="#" className="link-underline" data-toggle="modal" data-target="#terms-conditions">Independent Sales Representative Contract Terms and Conditions
            </a>, including the
            dispute resolution provisions contained therein.
          </small>
        </label>
      </div>
    </div>
  )
}

export default Checkbox
