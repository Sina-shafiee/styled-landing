import styled from 'styled-components';

export const Image = styled.img`
  width: 450px;

  @media (max-width: ${({ theme }) => theme.breakPoints.lg}) {
    width: 380px;
  }
  @media (max-width: ${({ theme }) => theme.breakPoints.sm}) {
    width: 300px;
  }
`;
