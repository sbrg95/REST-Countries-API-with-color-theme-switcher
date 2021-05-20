import styled from 'styled-components';

export const Container = styled.div`
  padding: 0 2rem;
  color: ${({ theme }) => theme.color.text};
  background-color: ${({ theme }) => theme.color.background};

  @media screen and (max-width: 600px) {
    padding: 0 1rem;
  }
`;

export const Inner = styled.div`
  max-width: 1440px;
  margin: auto;
  padding: 3rem 0;
  display: grid;
  grid-template-columns: repeat(4, minmax(280px, 290px));
  justify-content: space-between;
  gap: 3rem;

  @media screen and (max-width: 1300px) {
    grid-template-columns: repeat(3, minmax(280px, 290px));
  }

  @media screen and (max-width: 1000px) {
    grid-template-columns: repeat(2, minmax(280px, 290px));
  }

  @media screen and (max-width: 650px) {
    grid-template-columns: 285px;
  }
`;

export const Item = styled.div``;
