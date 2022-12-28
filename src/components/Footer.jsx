import { Container } from './styled/container.styled';
import { StyledFooter } from './styled/footer.styled';

const Footer = () => {
  return (
    <StyledFooter>
      <Container>
        <p>Landing page created with React js and styled component. </p>
        <a href='https://github.com/Sina-shafiee' target='_blank'>
          @sina-shafiee
        </a>
      </Container>
    </StyledFooter>
  );
};

export default Footer;
