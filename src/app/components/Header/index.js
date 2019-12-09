import React from 'react';
import { Link } from 'react-router-dom';
import { DiAtom } from 'react-icons/di';
import { /* FaBook, */ FaRegFilePdf, FaCalculator } from 'react-icons/fa';

import { Wrapper, Container, Logo, InfoActions, InfoAction } from './styles';

export default function Header({ activeTab }) {
  return (
    <Wrapper>
      <Container>
        <Logo to="/" isActive={activeTab === 'home'}>
          <DiAtom color="#FFF" size={32} />
          <strong>Projeto Permeação por Hidrogênio</strong>
        </Logo>

        <InfoActions>
          <InfoActions>
            {/* <InfoAction>
              <FaBook color="#999" size={16} />
              <span>Inicio</span>
            </InfoAction> */}
            <Link to="/articles">
              <InfoAction isActive={activeTab === 'articles'}>
                <FaRegFilePdf color="#999" size={16} />
                <span>Artigos</span>
              </InfoAction>
            </Link>
            <Link to="/calculator">
              <InfoAction isActive={activeTab === 'calculator'}>
                <FaCalculator color="#999" size={16} />
                <span>Cálculos</span>
              </InfoAction>
            </Link>
          </InfoActions>
        </InfoActions>
      </Container>
    </Wrapper>
  );
}
