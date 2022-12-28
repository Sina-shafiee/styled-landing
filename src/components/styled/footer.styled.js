import styled from 'styled-components';

export const StyledFooter = styled.footer`
  padding: 3rem 0 2rem 0;
  background-color: ${({ theme }) => theme.colors.footer};
  color: #fefefe;

  p {
    text-align: center;
  }
  a {
    display: block;
    margin-top: 0.4rem;
    text-align: center;
    color: inherit;
  }
`;
