import React from 'react'
import icon from 'images/utility-icons/search.svg'

function EmptyState() {
  return (
    <section className="empty-state">
      <img src={icon} alt="" />
      <h2>No Matches Available</h2>
      <p>
        Sorry, looks like the page you're looking for was moved or doesn't
        exist.
      </p>
    </section>
  )
}

export default EmptyState
