import { useState } from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import CssBaseline from '@mui/material/CssBaseline';
import AuthContext from './components/context/loggin-context';
import ProtectedRoute from './components/Navigation/ProtectedRoute';
import TopNavigation from './components/Navigation/TopNavigation';
import Login from './components/Pages/Login';
import Home from './components/Pages/Home';
import AdultSymptom from './components/Pages/Adult';
import BabySymptom from './components/Pages/Baby';

const App = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const loginHandler = (password) => {
    if (password === '123456') {
      setIsLoggedIn(true);
    }
  };
  return (
    <AuthContext.Provider value={{ isLoggedIn: isLoggedIn }}>
      <CssBaseline />
      <Router>
        <TopNavigation />
        <Switch>
          {!isLoggedIn && (
            <Route exact path="/">
              {' '}
              <Login onLogin={loginHandler} />
            </Route>
          )}
          <ProtectedRoute exact path="/" component={Home} />
          <ProtectedRoute exact path="/dewasa" component={AdultSymptom} />
          <ProtectedRoute exact path="/bayidanbalita" component={BabySymptom} />
        </Switch>
      </Router>
    </AuthContext.Provider>
  );
};

export default App;

