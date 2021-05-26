import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const Container = styled(Link)`
  text-decoration: none;
  background-color: ${({ theme }) => theme.color.element};
  border-radius: 5px;
  box-shadow: 0 1px 10px 1px rgba(0, 0, 0, 0.1);
  cursor: pointer;
`;

export const Image = styled.img`
  width: 100%;
  height: 10.4rem;
  object-fit: cover;
  border-radius: 5px 5px 0 0;
`;

export const Body = styled.div`
  padding: 1.5rem 1.5rem 2.5rem 1.5rem;
`;

export const Title = styled.h2`
  font-weight: var(--fw-300);
  font-size: var(--fs-200);
  margin-bottom: 0.7rem;
`;

export const Description = styled.p`
  font-size: var(--fs-100);
`;

export const DescriptionTitle = styled.span`
  font-weight: var(--fw-200);
`;
