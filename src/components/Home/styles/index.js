import styled from 'styled-components';

export const Container = styled.div`
  padding: 1.5rem 4rem;
  color: ${({ theme }) => theme.color.text};
  background-color: ${({ theme }) => theme.color.background};

  @media screen and (max-width: 600px) {
    padding: 1.5rem 2rem;
  }
`;
