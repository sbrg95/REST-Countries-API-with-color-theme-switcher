import styled from 'styled-components';

export const Container = styled.header`
  padding: 0 2rem;
  color: ${({ theme }) => theme.color.text};
  background-color: ${({ theme }) => theme.color.element};
  border-bottom: 4px solid
    ${({ theme }) =>
      theme.name === 'light' ? 'hsl(0, 0%, 96%)' : 'hsl(207, 26%, 16%)'};

  @media screen and (max-width: 600px) {
    padding: 0 1rem;
  }
`;

export const Inner = styled.div`
  max-width: 1440px;
  margin: auto;
  padding: 1.5rem 0;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const Title = styled.h1`
  font-size: var(--fs-400);
  font-weight: var(--fw-300);

  @media screen and (max-width: 600px) {
    font-size: var(--fs-100);
  }
`;

export const ThemeToggle = styled.div`
  font-size: var(--fs-100);
  font-weight: var(--fw-200);
  display: flex;
  align-items: center;
  cursor: pointer;
`;

export const ThemeIcon = styled.div`
  margin-right: 0.5rem;
  margin-top: 0.25rem;
  & svg {
    width: 1.1rem;
    fill: #fff;
  }

  & svg path {
    stroke: ${({ theme }) => theme.color.strok};
  }
`;
