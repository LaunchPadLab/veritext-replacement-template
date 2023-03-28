import React from 'react'
import { Route, Redirect, Switch } from 'react-router-dom'
import Layout from './Layout'
import { Routes as HomeRoutes } from './home'
import { Routes as StyleguideRoutes } from './styleguide'

const propTypes = {}
const defaultProps = {}

function Routes() {
  return (
    <Layout>
      <Switch>
        <Route path="/home">
          <HomeRoutes />
        </Route>
        <Route path="/styleguide">
          <StyleguideRoutes />
        </Route>
        <Redirect path="*" to="/home" />
      </Switch>
    </Layout>
  )
}

Routes.propTypes = propTypes
Routes.defaultProps = defaultProps

export default Routes
