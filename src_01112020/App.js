import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Home from './pages/Home';
import BarDetail from './components/BarCard/BarDetail';
import BarCardMatch from './components/BarCard/BarCardMatch';
import Reserveii from './components/BarCard/Reserveii';
import Signupchoose from './components/Login/Signupchoose';
import Loginn from './components/Login/Loginn';
import Forgotpw from './components/Login/Forgotpw';
import ConfirmLink from './components/Login/ConfirmLink';
import './App.css';
import CustomerHome from './pages/CustomerHome';
import Testchange from './components/Login/Testchange';

function App() {
  return (
      <Router>
        <Switch>
          <Route path='/' exact component={Home} />
          <Route path='/login' component={Loginn} />
          <Route path='/signup' component={Signupchoose}/>
          <Route path='/searchresult/' component={BarCardMatch} />
          <Route path='/BarDetail/' component={BarDetail} />
          <Route path='/Reserveii/' component={Reserveii} />
          <Route path='/Forgotpw/' component={Forgotpw} />
          <Route path='/ConfirmLink/' component={ConfirmLink} />
          <Route path='/customerhome/' component={CustomerHome} />
          <Route path="/change_password/:Token" component={Testchange} />
        </Switch>
      </Router>
  );
}

export default App;

/*
import React from 'react';
import unsplash from './api/unsplash';
import SearchBar from './components/SearchBar';
import ImageList from './components/ImageList';

class App extends React.Component {
  state = { images: [] };

  onSearchSubmit = async term => {
    const response = await unsplash.get('/search/photos', {
      params: { query: term }
    });

    this.setState({ images: response.data.results });
  };

  render() {
    return (
      <div className="ui container" style={{ marginTop: '10px' }}>
        <SearchBar onSubmit={this.onSearchSubmit} />
        <ImageList images={this.state.images} />
      </div>
    );
  }
}

export default App;
*/

