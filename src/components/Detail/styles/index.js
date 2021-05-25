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

  @media screen and (max-width: 1000px) {
    gap: 4rem;
  }

  @media screen and (max-width: 650px) {
    flex-direction: column;
    gap: 0;
  }
`;

export const Image = styled.div`
  width: 35rem;
  max-width: 35rem;

  & img {
    width: 100%;
  }

  @media screen and (max-width: 1000px) {
    width: 25rem;
  }

  @media screen and (max-width: 750px) {
    width: 20rem;
  }

  @media screen and (max-width: 650px) {
    width: 100%;
  }
`;

export const Description = styled.div`
  flex: 1;
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
  gap: 0.5rem 4rem;
`;

export const List = styled.ul`
  /* margin-bottom: 2rem; */
`;
export const Item = styled.li``;

export const ItemTitle = styled.span`
  font-weight: var(--fw-200);
`;
