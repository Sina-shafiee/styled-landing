import styled from 'styled-components';

export const Flex = styled.section`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 30px;
  flex-direction: ${({ order }) => order};

  @media (max-width: ${({ theme }) => theme.breakPoints.md}) {
    flex-wrap: wrap;
    gap: 40px;
  }

  h2 {
    margin-bottom: 1rem;
  }
  p {
    margin-bottom: 1.2rem;
  }
`;
