import { GlobalStyles, Header, Home } from './components';
import { useLocalStorageState } from './hooks';
import { ThemeProvider } from 'styled-components';

function getTheme(theme) {
  return {
    name: theme,
    color: {
      background: theme === 'light' ? 'hsl(0, 0%, 98%)' : 'hsl(207, 26%, 17%)',
      element: theme === 'light' ? '#fff' : 'hsl(209, 23%, 22%)',
      text: theme === 'light' ? 'hsl(200, 15%, 8%)' : '#fff',
      input: theme === 'light' ? 'hsl(0, 0%, 52%)' : '#fff',
      strok: theme === 'light' ? 'hsl(200, 15%, 8%)' : 'hsl(207, 26%, 17%)',
    },
  };
}

function App() {
  const [theme, setTheme] = useLocalStorageState('theme', 'dark');

  function toggleTheme() {
    setTheme(theme === 'light' ? 'dark' : 'light');
  }

  return (
    <>
      <ThemeProvider theme={getTheme(theme)}>
        <GlobalStyles theme={theme} />
        <Header>
          <Header.Title>Where in the world?</Header.Title>
          <Header.ThemeToggle onClick={toggleTheme}>
            <Header.ThemeIcon theme={theme} />
            {theme === 'light' ? 'Dark Mode' : 'Light Mode'}
          </Header.ThemeToggle>
        </Header>
        <Home />
      </ThemeProvider>
    </>
  );
}

export default App;
