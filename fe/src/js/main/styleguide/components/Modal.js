import React from 'react'

// Note: this component is only used for providing example markup to the styleguide.
// Do not import it directly into the application.

function Modal() {
  return (
    <div>
      <div className="modal">
        <div className="modal-fade-screen is-active">
          <div className="card modal-inner">
            <h2>Modal Header</h2>
            <button className="modal-close">×</button>
            <p>
              We will notify the team to get in touch with you and help you
              cancel your membership.
            </p>
            <div className="button-block">
              <a href="/#" className="button-primary">
                Yes, Send Cancellation Request
              </a>
              <a href="/#" className="button-primary-outline">
                No, Nevermind!
              </a>
            </div>
          </div>
        </div>
      </div>

      <br />
      <br />
    </div>
  )
}

export default Modal
