import React, { useState, useEffect } from 'react'
import { api } from 'api'

const propTypes = {}
const defaultProps = {}

function isFetchError(e) {
  return e instanceof TypeError && e.message === 'Failed to fetch'
}

const API_URL = api.defaults.root

function ServerStatusOverlay() {
  const [showOverlay, setShowOverlay] = useState(false)
  useEffect(() => {
    // Ping server on mount
    if (API_URL) {
      api.get('/').catch((e) => {
        if (isFetchError(e)) setShowOverlay(true)
      })
    }
  }, [])
  if (process.env.REACT_APP_HIDE_SERVER_STATUS_OVERLAY || !showOverlay)
    return null
  return (
    <div className="server-status-overlay">
      Warning: there is no server running at your configured API url: {API_URL}
    </div>
  )
}

ServerStatusOverlay.propTypes = propTypes
ServerStatusOverlay.defaultProps = defaultProps

export default React.memo(ServerStatusOverlay)
