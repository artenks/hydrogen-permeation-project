import React from 'react';

import Header from '~/app/components/Header';

import { Container, FilterTitle, MethodsList } from './styles';

export default function Calculator() {
  return (
    <Container>
      <Header activeTab="calculator" />

      <FilterTitle>Condição de Carregamento</FilterTitle>

      <FilterTitle>Métodos</FilterTitle>

      <MethodsList>
        <label htmlFor="tb">
          <input type="checkbox" checked name="" id="tb" />
          TB
        </label>

        <label htmlFor="tl">
          <input type="checkbox" name="" id="tl" />
          TL
        </label>

        <label htmlFor="ti">
          <input type="checkbox" name="" id="ti" />
          TI
        </label>
      </MethodsList>
    </Container>
  );
}
