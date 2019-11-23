import React from 'react';
import { FaRegChartBar, FaBolt, FaSlidersH } from 'react-icons/fa';
import {
  Container,
  Title,
  Caption,
  InformationList,
  Information,
} from './styles';

import Header from '~/app/components/Header';

export default function Main() {
  return (
    <Container>
      <Header />

      <Title>Aprofunde seu conhecimento.</Title>
      <Caption>
        ENCONTRE ARTIGOS QUE AJUDEM A SUA PESQUISA SOBRE PERMEAÇÃO POR
        HIDROGÊNIO EM AÇOS.
      </Caption>
      <InformationList>
        <Information>
          <FaBolt color="#333" size={64} />
          <strong>Velocidade na busca</strong>
          <span>
            Utilize filtros para facilmente encontrar conteúdo e resultados que
            sejam úteis à sua pesquisa.
          </span>
        </Information>
        <Information>
          <FaRegChartBar color="#333" size={64} />
          <strong>Gráficos</strong>
          <span>
            Visualize gráficos que irão ajudar a comparar seus resultados com a
            literatura.
          </span>
        </Information>
        <Information>
          <FaSlidersH color="#333" size={64} />
          <strong>Fácil ajuste</strong>
          <span>
            Com ferramentas de fácil ajuste você ajusta os resultados exibidos.
          </span>
        </Information>
      </InformationList>
    </Container>
  );
}
