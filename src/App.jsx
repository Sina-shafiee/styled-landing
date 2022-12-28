import { Fragment } from 'react';

import Theme from './Theme';
import GlobalStyles from './components/styled/globals';
import { Container } from './components/styled/container.styled';
import cardsData from './data/cardsData';

import Header from './components/Header';
import Card from './components/Card';
import Footer from './components/Footer';

const App = () => {
  return (
    <Fragment>
      <Theme>
        <GlobalStyles />
        <Header />
        <Container>
          {cardsData.map((card, index) => {
            return <Card key={card.id} index={index} data={card} />;
          })}
        </Container>
        <Footer />
      </Theme>
    </Fragment>
  );
};

export default App;
