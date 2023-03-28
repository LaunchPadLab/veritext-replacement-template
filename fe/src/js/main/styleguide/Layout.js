import React from 'react'
import PropTypes from 'prop-types'
import { isProduction } from 'config'

const propTypes = {
  children: PropTypes.node.isRequired,
}

const defaultProps = {}

const SHOW_STYLEGUIDE =
  !isProduction() || process.env.REACT_APP_DISPLAY_STYLEGUIDE

function Layout({ children }) {
  if (!SHOW_STYLEGUIDE) return null
  return <div>{children}</div>
}

Layout.propTypes = propTypes

Layout.defaultProps = defaultProps

export default Layout
