import styled from 'styled-components';

export const Container = styled.section`
  max-width: 1200px;
  margin: 0 auto;
  width: 85%;

  @media (max-width: ${({ theme }) => theme.breakPoints.md}) {
    width: 90%;
  }
`;
