import React, { Component } from 'react'
import { BrowserRouter as Router, Route , Switch } from 'react-router-dom'
import './App.css'

import Navbar from './components/Navbar'
import Header from './components/Header'
import Login from './components/registration/Login'
import StarterKit from './components/registration/StarterKit'
import BasicInfo from './components/registration/BasicInfo'
import PayComplete from './components/registration/pay-complete/PayComplete'
import CampaignInsider from './components/campaign-insider/CampaignInsider'
import HighFive from './components/high-five/HighFive'
import Incentives from './components/incentives/Incentives'
import Footer from './components/Footer'

class App extends Component {
  render() {
    return (
      <Router>
        <div className="App container my-5">
          <Header />
          <Navbar />
          <Switch>
            <Route exact path="/" component={Login} />
            <Route exact path="/basic-info" component={BasicInfo} />
            <Route exact path="/starter-kit" component={StarterKit} />
            <Route exact path="/pay-complete" component={PayComplete} />
            <Route exact path="/high-five" component={HighFive} />
            <Route exact path="/incentives" component={Incentives} />
            <Route exact path="/campaign-insider" component={CampaignInsider} />
          </Switch>
        </div>
        <Footer />
      </Router>

    )
  }
}

export default App
