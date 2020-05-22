import React from 'react';
import { DiAtom } from 'react-icons/di';
import { FaRegFilePdf, FaCalculator } from 'react-icons/fa';

import { Wrapper, Container, Logo, InfoActions, InfoAction } from './styles';

export default function Header() {
  return (
    <Wrapper>
      <Container>
        <Logo to="/">
          <DiAtom color="#FFF" size={32} />
          <strong>Projeto Permeação por Hidrogênio</strong>
        </Logo>

        <InfoActions>
          <InfoAction to="/articles">
            <FaRegFilePdf color="#999" size={16} />
            <span>Artigos</span>
          </InfoAction>
          <InfoAction to="/calculator">
            <FaCalculator color="#999" size={16} />
            <span>Cálculos</span>
          </InfoAction>
        </InfoActions>
      </Container>
    </Wrapper>
  );
}
