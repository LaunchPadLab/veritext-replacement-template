import React from 'react'

// Note: this component is only used for providing example markup to the styleguide.
// Do not import it directly into the application.

function Typography() {
  return (
    <div>
      <table className="styleguide-table">
        <thead>
          <tr>
            <th>Type</th>
            <th>Sample</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>
              <code>h1</code>
            </td>
            <td>
              <h1>The quick brown fox jumps over the lazy dog</h1>
            </td>
          </tr>
          <tr>
            <td>
              <code>h2</code>
            </td>
            <td>
              <h2>The quick brown fox jumps over the lazy dog</h2>
            </td>
          </tr>
          <tr>
            <td>
              <code>h3</code>
            </td>
            <td>
              <h3>The quick brown fox jumps over the lazy dog</h3>
            </td>
          </tr>
          <tr>
            <td>
              <code>h4</code>
            </td>
            <td>
              <h4>The quick brown fox jumps over the lazy dog</h4>
            </td>
          </tr>
          <tr>
            <td>
              <code>h5</code>
            </td>
            <td>
              <h5>The quick brown fox jumps over the lazy dog</h5>
            </td>
          </tr>
          <tr>
            <td>
              <code>h6</code>
            </td>
            <td>
              <h6>The quick brown fox jumps over the lazy dog</h6>
            </td>
          </tr>
          <tr>
            <td>
              <code>p</code>
            </td>
            <td>
              <p>The quick brown fox jumps over the lazy dog</p>
            </td>
          </tr>
          <tr>
            <td>
              <code>a</code>
            </td>
            <td>
              <a href="/#">The quick brown fox jumps over the lazy dog</a>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  )
}

export default Typography
