import styled from 'styled-components';

export const Container = styled.div`
  margin-bottom: 3rem;
  display: flex;
  justify-content: space-between;
  align-items: center;

  @media screen and (max-width: 700px) {
    flex-direction: column;
    align-items: flex-start;

    & > * + * {
      margin-top: 2rem;
    }
  }
`;
