import React, { useState, useEffect, Fragment } from 'react';
import './App.css';
import HLTV from 'hltv';

import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'


import Navbar from './components/Layout/Navbar'
import FutureEvents from './components/Events/FutureEvents'
import Ranking from './components/Teams/Ranking'
import Home from './components/pages/Home';
import About from './components/pages/About';
import Search from './components/pages/Search'

const getTeam = async () => {
  return await HLTV.getTeamRanking()
    .then(res => Object.entries(res))
    .catch(err => console.log(err));
}

// .then(data => console.log(data))

const getEvents = async () => {
  return await HLTV.getEvents()
    .then(res => Object.entries(res))
    .catch(err => console.log(err))
}



function App() {
  const [teamNames, setTeamNames] = useState([]);
  const [events, setEvents] = useState([]);


  useEffect(() => {
    getTeam().then(teams => {
      setTeamNames(teams.map(x => x[1].team.name));
    });

    getEvents().then(data => {
      setEvents(data.map(x => x[1].events));
    });

  }, []); // [] indicates that this side-effect will run only once.


  return (
    <Router>
      <Fragment >
        <Navbar />
        <div className="grid-2">
          <Switch>
            <Route exact path="/" component={Home} />
            <Route exact path="/about" component={About} />
            <Route exact path="/ranking" render={() => <Ranking teamNames={teamNames} />} />
            <Route exact path="/events" render={() => <FutureEvents events={events} />} />
            <Route exact path="/search" component={Search} />

          </Switch>
        </div>
      </Fragment>
    </Router>

  )
}

export default App;


