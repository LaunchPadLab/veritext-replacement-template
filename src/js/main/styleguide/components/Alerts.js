import React from 'react'

// Note: this component is only used for providing example markup to the styleguide.
// Do not import it directly into the application.

function Alerts() {
  return (
    <div>
      <div className="flash-message-container" role="alert">
        <div className="flash-message success">
          <p>This is a success message!</p>
        </div>
      </div>

      <div className="flash-message-container" role="alert">
        <div className="flash-message failure">
          <p>This is a failure message!</p>
        </div>
      </div>
    </div>
  )
}

export default Alerts
