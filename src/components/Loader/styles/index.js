import styled from 'styled-components';
import ContentLoader from 'react-content-loader';

export const Container = styled.div``;

export const Card = styled(ContentLoader)`
  background-color: ${({ theme }) => theme.color.element};
  border-radius: 5px;
  box-shadow: 0 1px 10px 1px rgba(0, 0, 0, 0.1);
  & > defs > linearGradient > stop:nth-of-type(1) {
    stop-color: ${({ theme }) => theme.color.background};
  }

  & > defs > linearGradient > stop:nth-of-type(2) {
    stop-color: ${({ theme }) =>
      theme.name === 'light' ? 'hsl(0, 0%, 97%)' : 'hsl(207, 26%, 16%)'};
  }

  & > defs > linearGradient > stop:nth-of-type(3) {
    stop-color: ${({ theme }) => theme.color.background};
  }
`;

export const Detail = styled.div`
  /* background-color: ${({ theme }) => theme.color.element}; */
  max-width: 1440px;
  margin: auto;
  padding: 3rem 2rem;
  display: flex;
  align-items: flex-start;

  @media screen and (max-width: 650px) {
    padding: 2rem 1rem;
    flex-direction: column;
    align-items: stretch;
  }

  & defs > linearGradient > stop:nth-of-type(1) {
    stop-color: ${({ theme }) => theme.color.element};
  }

  & defs > linearGradient > stop:nth-of-type(2) {
    stop-color: ${({ theme }) =>
      theme.name === 'light' ? 'hsl(0, 0%, 98%)' : 'hsl(207, 26%, 21%)'};
  }

  & defs > linearGradient > stop:nth-of-type(3) {
    stop-color: ${({ theme }) => theme.color.element};
  }
`;

export const Body = styled.div`
  flex: 1;
`;

export const Image = styled(ContentLoader)`
  margin-right: 8rem;
  width: 35rem;
  height: 30rem;

  @media screen and (max-width: 1250px) {
    margin-right: 6rem;
  }

  @media screen and (max-width: 1024px) {
    width: 25rem;
    height: 20rem;
    margin-right: 4rem;
  }

  @media screen and (max-width: 768px) {
    width: 20rem;
    height: 15rem;
  }

  @media screen and (max-width: 650px) {
    width: 100%;
    margin-right: 0;
    margin-bottom: 2rem;
  }
`;

export const Title = styled(ContentLoader)`
  margin-bottom: 2rem;
`;

export const Lists = styled.div`
  display: flex;
  max-width: 30rem;
  flex-wrap: wrap;
  justify-content: space-between;
  align-items: flex-start;
  margin-bottom: 1rem;

  @media screen and (max-width: 1250px) {
    gap: 0.5rem 4rem;
  }
`;
export const List = styled(ContentLoader)`
  margin-bottom: 1rem;
`;
