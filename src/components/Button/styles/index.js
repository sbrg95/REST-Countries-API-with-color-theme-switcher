import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const Container = styled(Link)`
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
