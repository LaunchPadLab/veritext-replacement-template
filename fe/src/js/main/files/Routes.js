import React from 'react'
// import PropTypes from 'prop-types'
import { Route, Switch, useRouteMatch } from 'react-router-dom'
import * as Views from './views'
import Layout from './Layout'

const propTypes = {}
const defaultProps = {}

function Routes() {
  const { path } = useRouteMatch()

  return (
    <Layout>
      <Switch>
        <Route exact path={path}>
          <Views.Files />
        </Route>
        <Route path={`${path}/:id`}>
          <Views.FileShow />
        </Route>
      </Switch>
    </Layout>
  )
}

Routes.propTypes = propTypes
Routes.defaultProps = defaultProps

export default Routes
