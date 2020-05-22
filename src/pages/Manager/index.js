import React from 'react';

import Scrollbar from 'react-perfect-scrollbar';

import ArticlesList from './ArticlesList';
import SteelList from './SteelList';
import { Container, Subtitle } from './styles';

export default function Manager() {
  return (
    <Scrollbar>
      <Container>
        <Subtitle>Aços</Subtitle>
        <SteelList />
        <Subtitle>Artigos</Subtitle>
        <ArticlesList />
      </Container>
    </Scrollbar>
  );
}
