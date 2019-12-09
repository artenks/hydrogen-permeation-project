import React from 'react';
import { FaRegChartBar, FaBolt, FaSlidersH } from 'react-icons/fa';
import {
  Container,
  Title,
  Caption,
  InformationList,
  Information,
  Paragraph,
  ParagraphContainer,
  Image,
} from './styles';

import Header from '~/app/components/Header';
import galvanostatic from '~/assets/galvanostatic.png';
import potenciostatic from '~/assets/potenciostatic.png';
import doubleopenedcircuit from '~/assets/doubleopenedcircuit.png';

export default function Main() {
  return (
    <Container>
      <Header activeTab="home" />

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

      <Title>Sobre</Title>

      <ParagraphContainer>
        <Paragraph>
          O Projeto Permeação por Hidrogênio tem por objetivo auxiliar
          pesquisadores ou empresas que desejem obter informações sobre os
          parâmetros de difusão de uma determinada especificação de aço.
        </Paragraph>
        <Paragraph>
          Dessa forma, é apresentada no site uma breve revisão bibliográfica
          sobre a permeação por hidrogênio em aços. Através de ferramentas de
          consulta é possível obter uma comparação entre os resultados do
          pesquisador e a bibliografia especializada na área.
        </Paragraph>
        <Paragraph>
          O usuário do site poderá realizar cálculos de difusividade com os
          parâmetros obtidos em seus experimentos, bastando para isso fazer uso
          da calculadaroda de difusão, que é empregada de acordo com a
          metodologia de teste de permeação por hidrogênio empregado:
          duplo-potenciostática, galvanostática-potenciostática, ou em potencial
          de circuito aberto.
        </Paragraph>
        <Paragraph>
          Ao fazer o cálculo de difusividade o usuário pode comparar com a
          literatura através de um gráfico que é gerado com os valores do seu
          experimento e da literatura especializada. Se for do interesse do
          usuário, o mesmo poderá clicar nos resultados da literatura e migrar
          para as páginas dos periódicos onde esses artigos estão
          disponibilizados.
        </Paragraph>
        <Paragraph>
          Dessa forma, espera-se contribuir com a área de pesquisa de dados em
          permação por hidrogênio.
        </Paragraph>
      </ParagraphContainer>

      <Title>Fórmulas a serem empregadas</Title>

      <ParagraphContainer>
        <Paragraph>
          Para condições de teste galvanostático-potenciostático tem-se:
        </Paragraph>

        <center>
          <Image src={galvanostatic} alt="Formula" />
        </center>

        <Paragraph>
          Para condições de teste potenciostático-potenciostático, tem-se:
        </Paragraph>

        <center>
          <Image src={potenciostatic} alt="Formula" />
        </center>

        <Paragraph>
          Para as condições de teste em Potencial de Circuito aberto, é
          amplamente empregado na literatura o método time-lag do método
          duplo-potenciostático:
        </Paragraph>

        <center>
          <Image src={doubleopenedcircuit} alt="Formula" />
        </center>
      </ParagraphContainer>
    </Container>
  );
}
