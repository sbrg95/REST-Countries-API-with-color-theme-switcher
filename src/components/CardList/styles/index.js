import styled from 'styled-components';

export const Container = styled.div`
  margin-bottom: 3rem;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 3rem;

  & > * {
    flex: 0 1 285px;
  }
`;
