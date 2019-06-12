import React, { Component } from 'react'

class IntroParagraph extends Component {
  state = {
    introParagraphHeader: 'GET REWARDED WHEN YOU GET DIGITAL!',
    introParagraph: 'Score $25 for every 5 unique online customers who place a $50+ order on your store. It’s the perfect way to get new online customers—and every single one means potential repeat orders and higher earnings!'
  }
  render() {
    return (
      <div className="text-center">
        <h1 className="title-secondary">
          {this.state.introParagraphHeader}
        </h1>
        <p className="lp blurb">
        {this.state.introParagraph}
        </p>
        <p className="lp blurb">
          You can keep an eye on all your sales rolling in on your <a href="!#">order activity dashboard</a>.
        </p>
      </div>
    )
  }
}

export default IntroParagraph
