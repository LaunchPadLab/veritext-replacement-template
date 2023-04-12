import React from 'react'
import App from './App'
import ReactDOM from 'react-dom'
import { api } from '../services/api'

const root = document.getElementById('root')

api.get('/api/v1/health').then((response) => {
  if (response.healthy) {
    root.classList.add('backend-healthy')
  }
})

ReactDOM.render(<App />, root)
