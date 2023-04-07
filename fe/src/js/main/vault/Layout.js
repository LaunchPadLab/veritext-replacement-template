import React from 'react'
import PropTypes from 'prop-types'

const propTypes = {
  children: PropTypes.node.isRequired,
}

const defaultProps = {}

function Layout({ children }) {
  return <div className="vault">{children}</div>
}

Layout.propTypes = propTypes

Layout.defaultProps = defaultProps

export default Layout
