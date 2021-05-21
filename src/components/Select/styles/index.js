import styled from 'styled-components';

export const Container = styled.div`
  padding: 1rem 1.5rem 1rem 2rem;
  background-color: ${({ theme }) => theme.color.element};
  color: ${({ theme }) => theme.color.text};
  border-radius: 5px;
  box-shadow: 0 1px 10px 1px rgba(0, 0, 0, 0.1);
  cursor: pointer;
  width: 14rem;
  position: relative;
`;

export const Control = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;
export const Label = styled.div``;
export const Indicator = styled.div`
  stroke: ${({ theme }) => theme.color.text};
  width: 1rem;
  display: flex;
  align-items: center;
`;

export const Options = styled.div`
  position: absolute;
  top: 100%;
  left: 0;
  right: 0;
  background-color: ${({ theme }) => theme.color.element};
  color: ${({ theme }) => theme.color.text};
  box-shadow: 0 1px 10px 1px rgba(0, 0, 0, 0.1);
  border-radius: 5px;
  margin-top: 0.3rem;
  padding: 1rem 1.5rem 1rem 2rem;

  & > * + * {
    margin-top: 0.5rem;
  }
`;
export const Option = styled.div``;
