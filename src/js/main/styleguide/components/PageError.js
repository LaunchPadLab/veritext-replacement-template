import React from 'react'

// Note: this component is only used for providing example markup to the styleguide.
// Do not import it directly into the application.

function PageError() {
  return (
    <section className="page-error">
      <h1>Page Not Found</h1>
      <p>
        Sorry, looks like the page you're looking for was moved or doesn't
        exist.
      </p>
      <a href="/" className="button-primary-outline">
        Back to Homepage
      </a>
    </section>
  )
}

export default PageError
