import React from 'react'
import { Link } from 'react-router-dom'

const Navbar = () => {
  return (
    <div>
      <nav className="mb-5 navbar navbar-expand-sm navbar-dark bg-dark">
        <Link className="navbar-brand" to="/">Menu</Link>
        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon">&times;</span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNavDropdown">
          <ul className="navbar-nav">
            <li className="nav-item list-unstyled">
              <Link className="nav-link" to="/campaign-insider">Campaign Insider</Link>
            </li>
            <li className="nav-item list-unstyled">
              <Link className="nav-link" to="/high-five">High Five Online</Link>
            </li>
            <li className="nav-item list-unstyled">
              <Link className="nav-link" to="/incentives">Incentives</Link>
            </li>
            <li className="nav-item list-unstyled">
              <Link className="nav-link" to="/">Register</Link>
            </li>
          </ul>
        </div>
      </nav>

    </div>
  )
}

export default Navbar
