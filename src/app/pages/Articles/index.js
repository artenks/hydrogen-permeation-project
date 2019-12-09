import React from 'react';

import Header from '~/app/components/Header';

import { Container } from './styles';

export default function Articles() {
  return (
    <Container>
      <Header activeTab="articles" />
    </Container>
  );
}
