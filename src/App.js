import logo from './logo.svg';
import './App.css';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import HomeScreen from './screens/HomeScreen';
import MovieDetails from './screens/movieDetails';

function App() {
  return (
    <Router className='App'>
      <Switch>
        <Route exact path='/' component={HomeScreen} />
        <Route exact path='/movie-details' component={MovieDetails} />
      </Switch>
    </Router>
  );
}

export default App;
