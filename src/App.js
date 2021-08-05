import React, {useState} from "react";
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Analytics from './Pages/Analytics/Analytics';
import Sidebar from './Components/Sidebar/Sidebar';
import Header from './Components/Header/Header';
import EventPage from './Pages/EventPage/EventPage'
import './App.css'
import Layout from "./Pages/Layout";
import Mainbody from "./Pages/MainBody/Mainbody";
import Profile from "./Pages/Profile/Profile";


function App() {

  const pageNotFound = () => {
    (
      <div>
        <h1>Error : 404</h1>
        <p>Page Not Found</p>
      </div>
    )
  }


  return (
    <Router>
      <div className="App">
        <Switch>
              <Route exact path="/">
                <Layout ><Mainbody/></Layout>  
              </Route>
              <Route path="/event">
                <EventPage/>
              </Route>
              <Route path="/analytics">
                <Layout><Analytics/></Layout>
              </Route>
              <Route path="/profile">
                <Layout><Profile/></Layout>
              </Route>
        </Switch>
      </div>
      </Router>
  );
}

export default App;
