import React from 'react'
import PropTypes from 'prop-types'

const propTypes = {
  children: PropTypes.node.isRequired,
  targetId: PropTypes.string.isRequired,
}
const defaultProps = {}

function SkipNavLink({ children, targetId, ...rest }) {
  return (
    <a id="skip-nav-link" href={`#${targetId}`} {...rest}>
      {children}
    </a>
  )
}

SkipNavLink.propTypes = propTypes
SkipNavLink.defaultProps = defaultProps

export default SkipNavLink
