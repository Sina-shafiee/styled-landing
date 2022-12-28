import styled from 'styled-components';

export const Button = styled.button`
  border-radius: 20px;
  border: none;
  box-shadow: 0 0 6px rgba(0, 0, 0, 0.11);
  font-size: 1.2em;
  font-weight: 500;
  padding: 10px 20px;
  outline: unset;
  cursor: pointer;
  background-color: ${({ bg }) => bg || '#fff'};
  color: ${({ color }) => color || '#000'};

  &:hover {
    opacity: 0.9;
    scale: 0.999;
  }
  &:active {
    box-shadow: 0 0 4px rgba(0, 0, 0, 0.1);
  }
  @media (max-width: ${({ theme }) => theme.breakPoints.lg}) {
    padding: 10px 20px;
  }
  @media (max-width: ${({ theme }) => theme.breakPoints.md}) {
    padding: 8px 15px;
    font-size: 1.1em;
  }
`;
