import { StyledHeader, Nav, Logo } from './styled/header.Styled';
import { Image } from './styled/image.styled';
import { Container } from './styled/container.styled';
import { Button } from './styled/button.styled';
import { Flex } from './styled/flex.styled';
import { Desc } from './styled/desc.styled';

const Header = () => {
  return (
    <StyledHeader>
      <div>
        <Container>
          <Nav>
            <Logo src='./images/logo.svg' alt='logo' />
            <Button>Try it free</Button>
          </Nav>
          <Flex>
            <Desc>
              <h2>Build The Community Your Fans Will Love</h2>
              <p>
                There are many variations of passages of available, but the
                majority have suffered alteration in some form, by injected
                humour, or randomized words which don't look even slightly
                believable.
              </p>
              <Button bg='#ff0099' color='#fff'>
                Try it free
              </Button>
            </Desc>
            <Image src='./images/illustration-mockups.svg' alt='hero img' />
          </Flex>
        </Container>
      </div>
    </StyledHeader>
  );
};

export default Header;
