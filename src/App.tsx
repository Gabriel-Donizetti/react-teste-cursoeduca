import React from 'react'
import './styles/App.css'

import { BrowserRouter as Router } from 'react-router-dom'
import { MainRoutes } from './services/routes'

function App() {
  return (
    <Router>
     <MainRoutes/>
    </Router>
  )
}

export default App
