import { useEffect, useState } from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { GlobalStyles } from './components';
import { Header } from './containers';
import { Home, Detail } from './pages';
import { useLocalStorageState } from './hooks';
import { ThemeProvider } from 'styled-components';
import { getTheme, fetchCountries } from './utils/functions';

function App() {
  const [theme, setTheme] = useLocalStorageState('theme', 'dark');
  const [countries, setCountries] = useState({
    data: null,
    status: 'idle',
    error: null,
  });

  function toggleTheme() {
    setTheme(theme === 'light' ? 'dark' : 'light');
  }

  useEffect(() => {
    setCountries({ status: 'pending' });
    fetchCountries()
      .then((data) => {
        setCountries({ status: 'resolved', data });
      })
      .catch((error) => {
        setCountries({ status: 'rejected', error });
      });
  }, []);

  return (
    <>
      <ThemeProvider theme={getTheme(theme)}>
        <GlobalStyles theme={getTheme(theme)} />
        <Router>
          <Header theme={theme} toggleTheme={toggleTheme} />
          <Switch>
            <Route path='/detail/:country'>
              <Detail />
            </Route>
            <Route path='/'>
              <Home countries={countries} />
            </Route>
          </Switch>
        </Router>
      </ThemeProvider>
    </>
  );
}

export default App;
