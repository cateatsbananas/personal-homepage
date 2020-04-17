import React from 'react';
import './assets/scss/main.scss';
/* import Backdrop from './components/Backdrop/Backdrop'; */
import SideDrawer from './components/Header/SideDrawer';
import ToggleButton from './components/Header/ToggleButton';
import Home from './components/Main/Title';
import SimpleCollapse from './components/Projects';
import AboutMe from './components/Main/AboutMe';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { AnimatePresence } from 'framer-motion';
import { NavToggleProvider, ToggleButtonProvider } from './components/ToggleStateContext';

function App() {
  return (
    <Router>
      <div className="App">
        <ToggleButtonProvider>
          <NavToggleProvider>
            <header className="App-header">
              <SideDrawer />
              <ToggleButton />
            </header>
            <main className="App-main">
              <AnimatePresence exitBeforeEnter>
                <Switch>
                  <Route path="/" exact component={Home} />
                  <Route path="/projects" component={SimpleCollapse} />
                  <Route path="/about" component={AboutMe} />
                </Switch>
              </AnimatePresence>
            </main>
          </NavToggleProvider>
        </ToggleButtonProvider>
      </div>
    </Router>
  );
}

export default App;
