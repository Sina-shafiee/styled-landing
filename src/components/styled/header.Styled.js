import styled from 'styled-components';

export const StyledHeader = styled.header`
  background-color: ${({ theme }) => theme.colors.header};
  background-image: url('./images/bg.jpg');
  background-position: center;
  background-size: cover;
  background-repeat: no-repeat;
  backdrop-filter: blur('2px');

  & > div {
    padding: 40px 0;
    background-color: rgba(255, 255, 255, 0.8);
    height: 100%;
  }
`;

export const Nav = styled.nav`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 80px;
`;

export const Logo = styled.img`
  width: 180px;
  user-select: none;
  @media (max-width: ${({ theme }) => theme.breakPoints.md}) {
    width: 120px;
  }
`;
