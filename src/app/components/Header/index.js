import React from 'react';
import { DiAtom } from 'react-icons/di';
import { FaBook, FaRegFilePdf } from 'react-icons/fa';

import { Wrapper, Container, Logo, InfoActions, InfoAction } from './styles';

export default function Header() {
  return (
    <Wrapper>
      <Container>
        <Logo>
          <DiAtom color="#FFF" size={32} />
          <strong>Projeto Permeação por Hidrogênio</strong>
        </Logo>

        <InfoActions>
          <InfoActions>
            <InfoAction>
              <FaBook color="#999" size={16} />
              <span>Inicio</span>
            </InfoAction>
            <InfoAction>
              <FaRegFilePdf color="#999" size={16} />
              <span>Artigos</span>
            </InfoAction>
          </InfoActions>
        </InfoActions>
      </Container>
    </Wrapper>
  );
}
