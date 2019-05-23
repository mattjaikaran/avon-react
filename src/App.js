import React, { Component } from 'react'
import { BrowserRouter as Router, Route , Switch } from 'react-router-dom'
import './App.css'

import Navbar from './components/Navbar'
import Login from './components/registration/Login'
import StarterKit from './components/registration/StarterKit'
import BasicInfo from './components/registration/BasicInfo'
import PayComplete from './components/registration/pay-complete/PayComplete'
import CampaignInsider from './components/campaign-insider/CampaignInsider'
import Footer from './components/Footer'

class App extends Component {
  render() {
    return (
      <Router>
        <div className="App container my-5">
          <Navbar />
          <Switch>
            <Route exact path="/" component={Login} />
            <Route exact path="/basic-info" component={BasicInfo} />
            <Route exact path="/starter-kit" component={StarterKit} />
            <Route exact path="/pay-complete" component={PayComplete} />
            <Route path="/campaign-insider" component={CampaignInsider} />
          </Switch>
        </div>
        <Footer />
      </Router>

    )
  }
}

export default App
