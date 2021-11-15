import React, { Fragment } from 'react';
import { Route, Switch } from 'react-router-dom';
import Footer from './components/Footer.js';
import Header from './components/Header.js';
import HomePage from './pages/HomePage.js';
import ProjectPage from './pages/ProjectPage.js';
function App() {
  return (
    <Fragment>
      <Header />
      <main>
        <Switch>
        
          <Route path="/projects">
            <ProjectPage />
          </Route>
          <Route path="/" excat>
            <HomePage />
          </Route>
        </Switch>
      </main>
      <Footer />
    </Fragment>
  );
}

export default App;
