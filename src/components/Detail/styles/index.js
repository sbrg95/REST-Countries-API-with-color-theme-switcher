import styled from 'styled-components';
import { Link } from 'react-router-dom';

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

  & > a {
    font-size: var(--fs-200);
    margin-bottom: 3rem;
    & svg {
      width: 1.2rem;
      margin-right: 0.5rem;
    }
  }

  @media screen and (max-width: 650px) {
    padding: 2rem 0;
  }
`;

export const Body = styled.div`
  display: flex;
  align-items: flex-start;
  gap: 8rem;

  @media screen and (max-width: 1024px) {
    gap: 4rem;
  }

  @media screen and (max-width: 650px) {
    flex-direction: column;
    align-items: stretch;
    gap: 0;
  }
`;

export const Image = styled.div`
  width: 35rem;
  max-width: 35rem;
  & img {
    width: 100%;
    box-shadow: 0 1px 10px 1px rgba(0, 0, 0, 0.1);
  }

  @media screen and (max-width: 1024px) {
    width: 25rem;
  }

  @media screen and (max-width: 768px) {
    width: 20rem;
  }

  @media screen and (max-width: 650px) {
    width: 100%;
  }
`;

export const Description = styled.div`
  flex: 1;
  max-width: 30rem;
  padding: 2rem 0;
  display: flex;
  justify-content: center;
  flex-direction: column;
`;

export const Title = styled.h2`
  margin-bottom: 1rem;
`;

export const Lists = styled.div`
  font-size: var(--fs-100);
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  align-items: flex-start;
  gap: 0.5rem 8rem;

  @media screen and (max-width: 1250px) {
    gap: 0.5rem 4rem;
  }
`;

export const List = styled.ul``;
export const Item = styled.li``;

export const ItemTitle = styled.span`
  font-weight: var(--fw-200);
`;

export const Button = styled(Link)`
  text-decoration: none;
  display: inline-flex;
  justify-content: center;
  align-items: center;
  padding: 0.2rem 1.8rem;
  border: none;
  border-radius: 5px;
  background-color: ${({ theme }) => theme.color.element};
  box-shadow: 0 1px 5px 1px rgba(0, 0, 0, 0.1),
    0 -1px 5px 1px rgba(0, 0, 0, 0.1);
  cursor: pointer;
`;
