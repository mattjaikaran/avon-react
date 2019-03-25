import React from 'react'

const AllKitsInclude = () => {
  return (
    <div className="grey-bg mt-5 p-5" style={{ backgroundColor: '#f7f7f7', padding: '2%' }}>
      <h5 className="text-center">All Kits Include
      </h5>
      <div className="row all-kits-include">
        <div className="col-sm-6">
          <ul className="tiny">
            <li>
              Moisture Therapy Intensive Healing &amp; Repair Hand Cream
            </li>
            <li className="all-kits-include">
              Skin So Soft Original Oil Spray
            </li>
          </ul>
        </div>
        <div className="col-sm-6">
          <ul className="tiny">
            <li>Anew AHA Refining Cream</li>
            <li className="all-kits-include">Mega Effects Mascara</li>
            <li className="all-kits-include">FREE Shipping</li>
          </ul>
        </div>
      </div>
    </div>
  )
}

export default AllKitsInclude
