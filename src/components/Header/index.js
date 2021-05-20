import { Container, Title, ThemeToggle, ThemeIcon } from './styles';

export default function Header({ children, ...props }) {
  return <Container {...props}>{children}</Container>;
}

Header.Title = function HeaderTitle({ children, ...props }) {
  return <Title {...props}>{children}</Title>;
};

Header.ThemeToggle = function HeaderThemeToggle({ children, ...props }) {
  return <ThemeToggle {...props}>{children}</ThemeToggle>;
};

Header.ThemeIcon = function HeaderThemeIcon({ theme }) {
  return (
    <ThemeIcon>
      <svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 512 512'>
        <title>Moon</title>
        <path
          d='M160 136c0-30.62 4.51-61.61 16-88C99.57 81.27 48 159.32 48 248c0 119.29 96.71 216 216 216 88.68 0 166.73-51.57 200-128-26.39 11.49-57.38 16-88 16-119.29 0-216-96.71-216-216z'
          strokeLinecap='round'
          strokeLinejoin='round'
          strokeWidth={theme === 'light' ? 32 : 0}
        />
      </svg>
    </ThemeIcon>
  );
};
