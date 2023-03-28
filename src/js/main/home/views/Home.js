import React from 'react'
// import PropTypes from 'prop-types'
// import * as Types from 'types'
import { compose } from 'redux'
import { connect } from 'react-redux'
// import { selectors } from '../reducer'
// import * as actions from '../actions'
// import * as apiActions from 'api-actions'

const propTypes = {}
const defaultProps = {}

function Home() {
  return (
    <div>
      <h1>Hello React world!</h1>
      <p>
        This is the home view. You can change what's rendered here by editing
        the file: <b>src/js/main/home/views/Home.js</b>
      </p>
    </div>
  )
}

Home.propTypes = propTypes

Home.defaultProps = defaultProps

function mapStateToProps() {
  return {}
}

const mapDispatchToProps = {}

export default compose(connect(mapStateToProps, mapDispatchToProps))(Home)
