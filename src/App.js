import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Analytics from "./Pages/Analytics/Analytics";
import "./App.css";
import Layout from "./Pages/Layout";
import Mainbody from "./Pages/MainBody/Mainbody";
import Profile from "./Pages/Profile/Profile";
import Login from "./Pages/Login/Login";
import Signup from "./Pages/SIgnup/Signup";
import TestPage from "./Pages/TestPage/TestPage";
import BarChart from "./Components/Charts/BarChart";
import RechartPieChart from "./Components/Charts/RechartPieChart";


function App() {
  const pageNotFound = () => {
    return (
      <div>
        <h1>Error : 404</h1>
        <p>Page Not Found</p>
      </div>
    );
  };

  return (
    <Router>
      <div className="App">
        <Switch>
          <Route exact path="/">
            <Layout>
              <Mainbody />
            </Layout>
          </Route>
          <Route path="/event">
            <TestPage />
          </Route>
          <Route path="/analytics">
            <Layout>
              <Analytics />
            </Layout>
          </Route>
          <Route path="/profile">
            <Layout>
              <Profile />
            </Layout>
          </Route>
          <Route path="/login" component={Login} />
          <Route path="/signup" component={Signup} />
          {/* <Route path="/testpage" component={TestPage}/> */}
          <Route path="/testComponent" component ={RechartPieChart}/>
          <Route component={pageNotFound} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
