import React from 'react';

import { ExchangeInterface } from './ExchangeInterface';
import { Container } from './Container';
import { TitleGroup } from './TitleGroup';

export const App = () => {
  return (
      <Container>
        <TitleGroup />
        <ExchangeInterface />
      </Container>
  );
};
