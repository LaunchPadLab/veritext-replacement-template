import React from 'react'

// Note: this component is only used for providing example markup to the styleguide.
// Do not import it directly into the application.

function Pagination() {
  return (
    <div>
      <ul className="pagination">
        <li className="prev">
          <a>Prev</a>
        </li>
        <li>
          <a>1</a>
        </li>
        <li className="active">
          <a>2</a>
        </li>
        <li>
          <a>3</a>
        </li>
        <li>
          <span className="delimiter">...</span>
        </li>
        <li>
          <a>138</a>
        </li>
        <li className="next">
          <a>Next</a>
        </li>
      </ul>
    </div>
  )
}

export default Pagination
