import React from 'react'

// Note: this component is only used for providing example markup to the styleguide.
// Do not import it directly into the application.

function Table() {
  return (
    <div>
      <div className="scrollable-table">
        <table>
          <thead>
            <tr>
              <th className="sortable order-descend">Date</th>
              <th>Card Number</th>
              <th>Amount Charged</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>April 5, 2018</td>
              <td>Ending in 1234</td>
              <td>$55.00</td>
            </tr>
            <tr>
              <td>March 5, 2018</td>
              <td>Ending in 1234</td>
              <td>$55.00</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  )
}

export default Table
