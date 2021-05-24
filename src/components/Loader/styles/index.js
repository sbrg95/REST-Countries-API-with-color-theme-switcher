import styled from 'styled-components';
import ContentLoader from 'react-content-loader';

export const Container = styled.div``;
export const Card = styled(ContentLoader)`
  background-color: ${({ theme }) => theme.color.element};
  border-radius: 5px;
  box-shadow: 0 1px 10px 1px rgba(0, 0, 0, 0.1);
`;
