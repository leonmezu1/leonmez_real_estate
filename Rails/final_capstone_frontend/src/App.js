import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { useEffect } from 'react';
import { checkLoggedIn } from './config/axiosConfig';
import { loginStatus } from './actions/authActions';
import Dashboard from './components/Dashboard';
import Home from './components/Home';

function App() {
  const dispatch = useDispatch();

  useEffect(async () => {
    dispatch(loginStatus(await checkLoggedIn()));
    return () => {};
  }, []);

  return (
    <div className="App">
      <Router>
        <Switch>
          <Route exact path="/dashboard" component={Dashboard} />
          <Route exact path="/" component={Home} />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
