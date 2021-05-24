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
