import React from 'react'

// Note: this component is only used for providing example markup to the styleguide.
// Do not import it directly into the application.

function Pagination() {
  return (
    <div>
      <ul className="pagination">
        <li className="prev">
          <a href="/#">Prev</a>
        </li>
        <li>
          <a href="/#">1</a>
        </li>
        <li className="active">
          <a href="/#">2</a>
        </li>
        <li>
          <a href="/#">3</a>
        </li>
        <li>
          <span className="delimiter">...</span>
        </li>
        <li>
          <a href="/#">138</a>
        </li>
        <li className="next">
          <a href="/#">Next</a>
        </li>
      </ul>
    </div>
  )
}

export default Pagination
