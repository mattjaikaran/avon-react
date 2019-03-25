import React from 'react'
import { Link } from 'react-router-dom'

const Navbar = () => {
  return (
    <div>
      <div className="no-reverse-bg avon-header">
        <div className="row px-0 mx-0">
          <div className="col-xs-12 px-0">
            <header className="global-header" role="banner">
              <div className="text-right mt-3 mr-4 pr-1">
                <Link
                  className="small small-link-utility ml-auto"
                  to="/campaign-insider">
                  <strong>Ver en Español</strong>
                </Link>
              </div>
              <nav className="navbar navbar--primary-nav navbar-default border-bottom d-flex flex-wrap align-items-center justify-content-center mt-0 pb-3 pt-0" role="navigation">
                <div className="primary-nav__search">
                  <span />
                </div>
                <div className="primary-nav__logo flex-fill">
                  <Link to="/">
                    <img src={require('../images/your-avon-20.png')} className="logo" alt="YourAvon 2.0" />
                  </Link>
                </div>
                <div className="primary-nav__cart">
                </div>
              </nav>
            </header>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Navbar
