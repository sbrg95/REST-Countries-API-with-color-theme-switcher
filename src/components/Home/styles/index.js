import styled from 'styled-components';

export const Container = styled.main`
  padding: 0 2rem;

  @media screen and (max-width: 600px) {
    padding: 0 1rem;
  }
`;

export const Inner = styled.div`
  max-width: 1440px;
  margin: auto;
  padding: 3rem 0;

  @media screen and (max-width: 650px) {
    padding: 2rem 0;
  }
`;
