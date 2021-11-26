import React from 'react'
import './styles/App.css'

import { BrowserRouter as Router } from 'react-router-dom'
//import { MainRoutes } from './services/routes'
import { Dashboard } from './components/Dashboard'

function App() {

  //const { user } = userAuth()

  return (
    <Router>
     <Dashboard/>
    </Router>
  )
}

export default App
