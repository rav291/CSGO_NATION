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

// // Getting player id using this fn.
// HLTV.getPlayerByName({ name: "dupreeh" }).then(res => {
//   console.log(res);
// })

// //Getting player stats using id obtained from above
// HLTV.getPlayerStats({ id: 7998 }).then(res => {
//   console.log(res)
// })

// // All 800 players ranking
// HLTV.getPlayerRanking({}).then(res => {
//   console.log(res)
// })

const getTeam = async () => {
  return await HLTV.getTeamRanking()
    .then(res => Object.entries(res))
    .catch(err => console.log(err));
}

const getEvents = async () => {
  return await HLTV.getEvents()
    .then(res => Object.entries(res))
    .catch(err => console.log(err))
}

function App() {
  const [teams, setTeams] = useState([]);
  const [events, setEvents] = useState([]);


  useEffect(() => {
    getTeam().then(teams => {
      setTeams(teams);
    });

    getEvents().then(data => {
      setEvents(data.map(x => x[1].events));
    });

  }, []); // [] indicates that this side-effect will run only once.


  return (
    <Router>
      <Fragment >
        <Navbar />
        <div>
          <Switch>
            <Route exact path="/" component={Home} />
            <Route exact path="/about" component={About} />
            <Route exact path="/ranking" render={() => <Ranking teams={teams} />} />
            <Route exact path="/events" render={() => <FutureEvents events={events} />} />
            <Route exact path="/search" component={Search} />
          </Switch>
        </div>
      </Fragment>
    </Router>

  )
}

export default App;


