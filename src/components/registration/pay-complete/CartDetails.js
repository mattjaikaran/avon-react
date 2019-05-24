import React, { Component } from 'react'

class CartDetails extends Component {
  render() {
    return (
      <div id="carts-details" className="mt-lg-4" data-split-content-chunk="content">
        <dl className="clearfix mb-2">
          <dt className="pull-left ng-binding" ng-bind-html="totalContentJson.orderTotal">Subtotal (1 item)
          </dt>
          <dd className="pull-right subtotal ng-binding">$0.00</dd>
        </dl>
        <dl className="clearfix mb-2">
          <dt className="pull-left ng-binding text-muted" ng-bind-html="totalContentJson.totalWithOffers" ng-show="!showGomacErr" aria-hidden="false">Shipping
          </dt>
          <dd className="pull-right offers-total text-muted ng-hide" ng-show="showRefreshButton || showNoCartBtn" aria-hidden="true">$-10.00</dd>
        </dl>
        <dl className="clearfix pb-3 mb-3 border-bottom">
          <dt className="pull-left text-muted ng-binding" ng-bind-html="totalContentJson.discount" ng-show="!showGomacErr" aria-hidden="false">Taxes
          </dt>
          <dd className="pull-right discount text-muted ng-hide" ng-show="showRefreshButton || showNoCartBtn" aria-hidden="true">$10.00</dd>
        </dl>
        <dl className="clearfix pb-3 mb-3 border-bottom text-primary">
          <dt className="pull-left text-primary ng-binding" aria-hidden="false">
          </dt>
          <strong>Pay This Amount
          </strong>
          <dd className="pull-right discount font-weight-bold ng-hide" ng-show="showRefreshButton || showNoCartBtn" aria-hidden="true">$10.00</dd>
        </dl>
      </div>
    )
  }

}

export default CartDetails
