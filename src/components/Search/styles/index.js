import styled from 'styled-components';

export const Container = styled.div`
  width: 25rem;
  background-color: ${({ theme }) => theme.color.element};
  color: ${({ theme }) => theme.color.text};
  border-radius: 5px;
  box-shadow: 0 1px 10px 1px rgba(0, 0, 0, 0.1);

  @media screen and (max-width: 700px) {
    width: 100%;
  }
`;

export const Label = styled.label`
  width: 100%;
  display: flex;
  align-items: center;
`;

export const Input = styled.input`
  width: 100%;
  padding: 1rem;
  font-size: var(--fs-200);
  border: none;
  &::placeholder {
    color: ${({ theme }) => theme.color.text};
  }
`;

export const Image = styled.div`
  padding: 1rem 0.5rem 1rem 2rem;
  display: flex;
  align-items: center;
  & svg {
    stroke: ${({ theme }) => theme.color.text};
    width: 1.3rem;
  }
`;
