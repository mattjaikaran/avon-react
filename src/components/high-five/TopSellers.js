import React, { Component } from 'react'

class TopSellers extends Component {
  state = {
    topSellers: [
      {
        rank: 1,
        name: 'MARY BERTSCH',
        region: 'NORTHWEST',
        qualifyingCustomers: 97
      },
      {
        rank: 2,
        name: 'KRISTY HANSEL',
        region: 'NORTHWEST',
        qualifyingCustomers: 59
      },
      {
        rank: 3,
        name: 'DIANNE B HERNANDEZ',
        region: 'SOUTHWEST',
        qualifyingCustomers: 42
      },
      {
        rank: 4,
        name: 'CINDY J ARTRIP',
        region: 'NORTHEAST',
        qualifyingCustomers: 40
      },
      {
        rank: 5,
        name: 'ADRIANNE CURRY',
        region: 'NORTHWEST',
        qualifyingCustomers: 36
      },
      {
        rank: 6,
        name: 'EMILY SEAGREN',
        region: 'NORTHWEST',
        qualifyingCustomers: 34
      },
      {
        rank: 7,
        name: 'ANDREYA REZ',
        region: 'NORTHWEST',
        qualifyingCustomers: 34
      },
      {
        rank: 8,
        name: 'TANYA DZIKOVSKY',
        region: 'SOUTHWEST',
        qualifyingCustomers: 28
      },
      {
        rank: 9,
        name: 'VICTORIA MORRISON',
        region: 'SOUTHWEST',
        qualifyingCustomers: 27
      },
      {
        rank: 10,
        name: 'ANN GLENN',
        region: 'SOUTHWEST',
        qualifyingCustomers: 26
      },
    ]
  }

  renderSellers = () => {
    return this.state.topSellers.map(seller => {
      const { rank, name, region, qualifyingCustomers } = seller
      return (
        <tr key={rank}>
          <td className="text-center">{name}</td>
          <td className="text-center">{region}</td>
          <td className="">{qualifyingCustomers}</td>
        </tr>
      )
    })
  }

  render() {
    return (
      <div className="m-top-s4 text-center">
        <h1 className="title-secondary">
          Our Top Sellers
        </h1>
        <div className="m-top-s3 text-center row">
          <div className="col-md-1"></div>
          <div className="col-md-10">
            <table className="table table-responsive table-striped">
              <tbody>
                <tr>
                  <th scope="col" className="text-center align-middle">
                    <strong>NAME</strong>
                  </th>
                  <th scope="col" className="text-center align-middle">
                    <strong>REGION</strong>
                  </th>
                  <th scope="col" className="text-center">
                    <strong>QUALIFYING CUSTOMERS</strong>
                  </th>
                </tr>
                {this.renderSellers()}
              </tbody>
            </table>
          </div>
          <div className="col-md-1"></div>
        </div>
      </div>
    )
  }
}

export default TopSellers
