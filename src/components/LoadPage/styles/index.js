import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-bottom: 3rem;
`;

export const Button = styled.button`
  background-color: ${({ theme }) => theme.color.background};
  color: ${({ theme }) => theme.color.text};
  font-size: var(--fs-200);
  padding: 0;
  border: none;
  cursor: pointer;
  border-bottom: 2px dashed ${({ theme }) => theme.color.text};
`;
