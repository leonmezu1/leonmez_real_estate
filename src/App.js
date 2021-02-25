import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { useEffect } from 'react';
import { checkLoggedIn } from './config/axiosConfig';
import { loginStatus } from './actions/authActions';
import Dashboard from './components/pages/Dashboard';
import Home from './components/pages/Home';
import Navbar from './components/Navbar';
import Homes from './components/pages/Homes';
import About from './components/pages/About';
import Rentals from './components/pages/Rentals';

const App = () => {
  const dispatch = useDispatch();

  useEffect(async () => {
    dispatch(loginStatus(await checkLoggedIn()));
    return () => {};
  }, []);

  return (
    <div className="App">
      <Router>
        <Navbar />
        <Switch>
          <Route path="/rentals" exact component={Rentals} />
          <Route path="/about" exact component={About} />
          <Route path="/homes" exact component={Homes} />
          <Route path="/homes/:id" exact component={Homes} />
          <Route path="/dashboard" exact component={Dashboard} />
          <Route path="/" component={Home} />
        </Switch>
      </Router>
    </div>
  );
};

export default App;
