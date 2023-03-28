import React from 'react'
// import PropTypes from 'prop-types'
import exact from 'prop-types-exact'

const propTypes = {}
const defaultProps = {}

function Header() {
  return <header>Client Template Header</header>
}

Header.propTypes = exact(propTypes)
Header.defaultProps = defaultProps

export default React.memo(Header)
