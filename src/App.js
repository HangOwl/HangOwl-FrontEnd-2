import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Home from './pages/Home';
import BarDetail from './components/BarCard/BarDetail';
import BarCard from './components/BarCard/BarCard';
import Signup from './pages/signup';
import './App.css';

function App() {


  return (

      <Router>
        {/* <Navbar /> */}
        <Switch>
          <Route path='/' exact component={Home} />
          <Route path='/login' component={Home} />
          <Route path='/signup' component={Home} />
          <Route path='/searchresult/' component={BarCard} />
          <Route path='/test1/' component={BarDetail} />
        </Switch>
      </Router>

  );
}

export default App;

