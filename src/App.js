import { useState, useMemo } from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import CssBaseline from '@mui/material/CssBaseline';
import { createTheme, ThemeProvider } from '@mui/material';
import AuthContext from './components/context/loggin-context';
import ColorModeContext from './components/context/colormode-contex';
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

  const [mode, setMode] = useState('light');
  const colorMode = useMemo(
    () => ({
      toggleColorMode: () => {
        setMode((prevMode) => (prevMode === 'light' ? 'dark' : 'light'));
      },
    }),
    []
  );
  const theme = useMemo(
    () =>
      createTheme({
        palette: {
          mode,
        },
      }),
    [mode]
  );

  return (
    <AuthContext.Provider value={{ isLoggedIn: isLoggedIn }}>
      <ColorModeContext.Provider value={colorMode}>
        <ThemeProvider theme={theme}>
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
              <ProtectedRoute
                exact
                path="/bayidanbalita"
                component={BabySymptom}
              />
            </Switch>
          </Router>
        </ThemeProvider>
      </ColorModeContext.Provider>
    </AuthContext.Provider>
  );
};

export default App;
