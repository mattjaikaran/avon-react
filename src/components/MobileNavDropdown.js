import React from 'react'
import { Link } from 'react-router-dom'

const MobileNavDropdown = () => {
  return (
    <div className="visible-xs mt-2">
      <div className="btn-group bootstrap-select form-control form-inline ng-pristine ng-untouched ng-invalid ng-invalid-required ng-valid ng-valid-required">
        <button type="button" className="btn dropdown-toggle bs-placeholder btn-select" data-toggle="dropdown" title="Select Category">
          <span className="filter-option pull-left ng-binding" ng-init="categoryName=selectCategoryLbl" ng-bind="categoryName">
            02 Starter Kit
          </span>
          <span className="bs-caret">
            <span className="caret">
            </span>
          </span>
        </button>
        <div className="dropdown-menu open" style={{ maxHeight: '157px', overflow: 'hidden' }}>
          <ul className="dropdown-menu inner" role="listbox" aria-expanded="false" style={{ maxHeight: '156px', overflowY: 'auto' }}>
            <li data-original-index="1" ng-click="changeCategoryDropdownValueList(homePage,null,null)" role="button" tabIndex="0">
              <Link tabIndex="0" className="ng-binding ng-scope" data-tokens="null" role="option" aria-disabled="false" aria-selected="false">
                <span className="text ng-binding">
                  01 Basic Info
                </span>
                <span className="lt-icon glyphicon-ok check-mark">
                </span>
              </Link>
            </li>
            <li data-original-index="1" ng-repeat="category in categoryOptions" ng-click="changeCategoryDropdownValueList(category.categoryName,category.prodCatId,category.indicator)" className="ng-scope" role="button" tabIndex="0">
              <Link tabIndex="0" className="ng-binding ng-scope" data-tokens="null" role="option" aria-disabled="false" aria-selected="false">
                <span className="text ng-binding">
                  02 Starter Kit
                </span>
                <span className="lt-icon glyphicon-ok check-mark">
                </span>
              </Link>
            </li>
            <li data-original-index="1" ng-repeat="category in categoryOptions" ng-click="changeCategoryDropdownValueList(category.categoryName,category.prodCatId,category.indicator)" className="ng-scope" role="button" tabIndex="0">
              <Link tabIndex="0" className="ng-binding ng-scope" data-tokens="null" role="option" aria-disabled="false" aria-selected="false">
                <span className="text ng-binding">
                  03 Pay &amp; Complete
                </span>
                <span className="lt-icon glyphicon-ok check-mark">
                </span>
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </div>
  )
}

export default MobileNavDropdown
