import React, { Component } from 'react'

class CTA extends Component {
  render() {
    return (
      <div className="m-top-s4 text-left">
      <a href={this.props.ctaLink}>
        <button
        className="btn btn-primary button-full-width-mobile"
        style={{ minWidth: '270px' }}>
        {this.props.btnText}
        </button>
      </a>
    </div>
    )
  }
}

export default CTA
