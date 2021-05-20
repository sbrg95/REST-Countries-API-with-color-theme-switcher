import styled from 'styled-components';

export const Container = styled.header`
  padding: 1.5rem 4rem;
  color: ${({ theme }) => theme.color.text};
  background-color: ${({ theme }) => theme.color.element};
  display: flex;
  justify-content: space-between;
  align-items: center;
  border-bottom: 4px solid
    ${({ theme }) =>
      theme.name === 'light' ? 'hsl(0, 0%, 96%)' : 'hsl(207, 26%, 15%)'};

  @media screen and (max-width: 600px) {
    padding: 1.5rem 2rem;
  }
`;

export const Title = styled.h1`
  font-size: 1.5rem;
  font-weight: var(--fw-300);

  @media screen and (max-width: 600px) {
    font-size: 1rem;
  }
`;

export const ThemeToggle = styled.div`
  font-size: 0.8rem;
  font-weight: var(--fw-200);
  display: flex;
  align-items: center;
  cursor: pointer;
`;

export const ThemeIcon = styled.div`
  margin-right: 0.5rem;
  & svg {
    width: 1rem;
    fill: #fff;
  }

  & svg path {
    stroke: ${({ theme }) => theme.color.strok};
  }
`;
