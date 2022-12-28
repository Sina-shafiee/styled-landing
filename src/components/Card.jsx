import { StyledCard } from './styled/card.styled';
import { Flex } from './styled/flex.styled';
import { Button } from './styled/button.styled';
import { Image } from './styled/image.styled';
import { Desc } from './styled/desc.styled';

const Card = ({ data: { title, body, image }, index }) => {
  const order = index % 2 === 0 ? 'row' : 'row-reverse';
  console.log(order);
  return (
    <StyledCard>
      <Flex order={order}>
        <Desc>
          <h2>{title}</h2>
          <p>{body}</p>
          <Button bg='#82AAE3' color='#fff'>
            Read more
          </Button>
        </Desc>
        <Image loading='lazy' src={`./images/${image}`} />
      </Flex>
    </StyledCard>
  );
};

export default Card;
