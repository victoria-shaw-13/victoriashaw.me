import React from 'react';
import Navbar from './components/Navbar';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import './App.css';
import Home from './components/pages/Home';
import Resume from './components/pages/Resume';
import Coding from './components/pages/Coding';
import Art from './components/pages/Art';



function App() {
  return (
    <>
      <Router>
        <Navbar />
        <Switch>
            <Route path='/' exact component={Home} />
            <Route path='/resume' component={Resume} />
            <Route path='/coding' component={Coding} />
            <Route path='/art-portfolio' component={Art} />
        </Switch>
      </Router>
    </>
  );
}

export default App;
