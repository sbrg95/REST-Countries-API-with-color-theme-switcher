import { Header } from '../components';

export default function HeaderContainer({ theme, toggleTheme }) {
  return (
    <Header>
      <Header.Title>Where in the world?</Header.Title>
      <Header.ThemeToggle onClick={toggleTheme}>
        <Header.ThemeIcon theme={theme} />
        {theme === 'light' ? 'Dark Mode' : 'Light Mode'}
      </Header.ThemeToggle>
    </Header>
  );
}
