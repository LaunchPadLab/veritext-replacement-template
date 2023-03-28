import React from 'react'

// Note: this component is only used for providing example markup to the styleguide.
// Do not import it directly into the application.

function Buttons() {
  return (
    <div>
      <table className="styleguide-table">
        <thead>
          <tr>
            <th>Type</th>
            <th>Default</th>
            <th>
              <code>in-progress</code>
            </th>
            <th>
              <code>is-disabled</code>
            </th>
            <th>
              <code>button-small</code>
            </th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>
              <code>button-primary</code>
            </td>
            <td>
              <button className="button-primary">Submit</button>
            </td>
            <td>
              <button className="button-primary in-progress">Submit</button>
            </td>
            <td>
              <button className="button-primary is-disabled">Submit</button>
            </td>
            <td>
              <button className="button-primary button-small">Submit</button>
            </td>
          </tr>
          <tr>
            <td>
              <code>button-primary-outline</code>
            </td>
            <td>
              <button className="button-primary-outline">Submit</button>
            </td>
            <td>
              <button className="button-primary-outline in-progress">
                Submit
              </button>
            </td>
            <td>
              <button className="button-primary-outline is-disabled">
                Submit
              </button>
            </td>
            <td>
              <button className="button-primary-outline button-small">
                Submit
              </button>
            </td>
          </tr>
          <tr>
            <td>
              <code>button-secondary</code>
            </td>
            <td>
              <button className="button-secondary">Submit</button>
            </td>
            <td>
              <button className="button-secondary in-progress">Submit</button>
            </td>
            <td>
              <button className="button-secondary is-disabled">Submit</button>
            </td>
            <td>
              <button className="button-secondary button-small">Submit</button>
            </td>
          </tr>
          <tr>
            <td>
              <code>button-secondary-outline</code>
            </td>
            <td>
              <button className="button-secondary-outline">Submit</button>
            </td>
            <td>
              <button className="button-secondary-outline in-progress">
                Submit
              </button>
            </td>
            <td>
              <button className="button-secondary-outline is-disabled">
                Submit
              </button>
            </td>
            <td>
              <button className="button-secondary-outline button-small">
                Submit
              </button>
            </td>
          </tr>
          <tr>
            <td>
              <code>button-warn</code>
            </td>
            <td>
              <button className="button-warn">Submit</button>
            </td>
            <td>
              <button className="button-warn in-progress">Submit</button>
            </td>
            <td>
              <button className="button-warn is-disabled">Submit</button>
            </td>
            <td>
              <button className="button-warn button-small">Submit</button>
            </td>
          </tr>
          <tr>
            <td>
              <code>button-warn-outline</code>
            </td>
            <td>
              <button className="button-warn-outline">Submit</button>
            </td>
            <td>
              <button className="button-warn-outline in-progress">
                Submit
              </button>
            </td>
            <td>
              <button className="button-warn-outline is-disabled">
                Submit
              </button>
            </td>
            <td>
              <button className="button-warn-outline button-small">
                Submit
              </button>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  )
}

export default Buttons
