import React from 'react'
// import PropTypes from 'prop-types'
import { compose } from 'redux'
import { connect } from 'react-redux'
import * as components from '../components'
import { map, startCase } from 'lodash'

const propTypes = {}

const defaultProps = {}

function Styleguide() {
  return (
    <div className="styleguide">
      <nav className="side-navigation-styleguide">
        <h5>Styleguide</h5>
        <ul>
          {map(components, (Component, name) => (
            <li key={name}>
              <a href={`#${name}`}>{startCase(name)}</a>
            </li>
          ))}
        </ul>
      </nav>
      <main className="content with-sidebar styleguide">
        {map(components, (Component, name) => (
          <div key={name} id={name} className="styleguide-card">
            <h3>{startCase(name)}</h3>
            <Component />
          </div>
        ))}
      </main>
    </div>
  )
}

Styleguide.propTypes = propTypes

Styleguide.defaultProps = defaultProps

function mapStateToProps() {
  return {}
}

const mapDispatchToProps = {}

export default compose(connect(mapStateToProps, mapDispatchToProps))(Styleguide)
