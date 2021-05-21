import { useEffect, useState } from 'react';
import { GlobalStyles } from './components';
import { Header } from './containers';
import { Home } from './pages';
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
        setCountries({ status: 'resolved', error });
      });
  }, []);

  return (
    <>
      <ThemeProvider theme={getTheme(theme)}>
        <GlobalStyles />
        <Header theme={theme} toggleTheme={toggleTheme} />
        <Home countries={countries} />
      </ThemeProvider>
    </>
  );
}

export default App;
