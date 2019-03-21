import React, { Component } from 'react'

class MentorChosen extends Component {
  constructor(props) {
    super(props)
    this.state = {
    }
  }
  render() {
    return (
      <div className="grey-bg mt-5">
        <div className="form-group mb-0">
          <div className="row py-4 mx-0">
            <div className="col-sm-2 col-xs-3 text-right">
              <span>
                <img src="https://01.avoncdn.com/shop/representative/2683004.jpg" className="img-circle img-responsive mentor-image" alt="" />
              </span>
            </div>
            <div className="col-sm-10 col-xs-9 text-left mt-3 mt-md-4 pl-0">
              <div>
                <label className="control-label">
                YOUR MENTOR
                </label>
              </div>
              <div>
                <h5 className="d-inline">
                Tisha Pennington
                </h5>avo
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default MentorChosen
