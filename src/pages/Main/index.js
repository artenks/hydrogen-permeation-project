import React from 'react';
import { FaRegChartBar, FaBolt, FaSlidersH } from 'react-icons/fa';
import {
  Container,
  Title,
  Subtitle,
  Caption,
  Observation,
  InformationList,
  Information,
  Paragraph,
  ParagraphContainer,
  Image,
} from './styles';

import galvanostatic from '~/assets/galvanostatic.png';
import potenciostatic from '~/assets/potenciostatic.png';
import doubleopenedcircuit from '~/assets/doubleopenedcircuit.png';

import tf1 from '~/assets/theorical_fundation/1.png';
import tf2 from '~/assets/theorical_fundation/2.png';
import tf3 from '~/assets/theorical_fundation/3.png';
import tf4 from '~/assets/theorical_fundation/4.png';
import tf5 from '~/assets/theorical_fundation/5.png';
import tf6 from '~/assets/theorical_fundation/6.png';
import tf7 from '~/assets/theorical_fundation/7.png';
import tf8 from '~/assets/theorical_fundation/8.png';
import tf9 from '~/assets/theorical_fundation/9.png';
import tf10 from '~/assets/theorical_fundation/10.png';
import tf11 from '~/assets/theorical_fundation/11.png';
import tf12 from '~/assets/theorical_fundation/12.png';
import tf13 from '~/assets/theorical_fundation/13.png';
import tf14 from '~/assets/theorical_fundation/14.png';
import tf15 from '~/assets/theorical_fundation/15.png';
import tf16 from '~/assets/theorical_fundation/16.png';
import tf17 from '~/assets/theorical_fundation/17.png';

export default function Main() {
  return (
    <Container>
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

      <Title>Sobre o Projeto</Title>

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

      <Title>Fundamentação Teórica</Title>

      <ParagraphContainer>
        <Subtitle>
          1.1 FORMULAÇÃO DO PROBLEMA referente à Permeação eletroquímica de
          hidrogênio nos metais e ligas metálicas.
        </Subtitle>

        <Paragraph>
          Átomos de hidrogênio possuem um raio atômico da ordem de 0,25-0,54 A
          (angstrons) o qual comparado com o diâmetro de outros átomos metálicos
          é muito menor. Esta característica dá ao hidrogênio significante
          mobilidade (difusão) em metais (MAMANI, 2005).
        </Paragraph>
        <Paragraph>
          Esses átomos podem ser produzidos eletroquimicamente a partir, por
          exemplo, de uma proteção catódica, bem como podem ser resultantes de
          outras fontes como corrosão, podendo afetar negativamente as
          propriedades do aço durante a sua fabricação e/ou aplicação nas
          condições dos mais diversos serviços (ARAÚJO, 2009).
        </Paragraph>
        <Paragraph>
          Aços de alta resistência mecânica são particularmente susceptíveis ao
          fenômeno de fragilização devido às pressões internas que podem surgir
          no interior do material devido à recombinação do hidrogênio molecular
          durante serviço. Esta susceptibilidade pode ser elevada com o aumento
          do limite de resistência do material, o que tem exigido estudos de
          caracterização deste efeito em condições operacionais mais severas.
        </Paragraph>
        <Paragraph>
          Considerando o efeito do hidrogênio nos materiais metálicos, torna-se
          necessário a realização de experimentos no intuito da determinação de
          parâmetros relacionados à difusão como Difusividade, Permeabilidade e
          Solubilidade (VELASCO 2007 apud OLIVEIRA et al., 2015).
        </Paragraph>
        <Paragraph>
          Para esse tipo de estudo utiliza-se a técnica eletroquímica de
          permeação de hidrogênio. Este método foi primeiro desenvolvido por
          DEVANATHAN e STACHURSKI (1962) e utiliza-se uma célula de permeação
          que é formada por duas células adjacentes denominadas célula de carga
          e célula de detecção.
        </Paragraph>
        <Paragraph>
          Considerando as mais diversas variáveis que podem afetar o fenômeno de
          difusão do hidrogênio em materiais metálicos, órgãos internacionais
          como American Society for Testing and Materials (ASTM), bem como
          International Organization for Standardization (ISO), formularam
          normas que buscam padronizar os procedimentos metodológicos em relação
          à determinação experimental dos parâmetros de difusão citados acima.
        </Paragraph>
        <Paragraph>
          No entanto, muitas são as inconsistências de procedimentos
          metodológicos, bem como dos parâmetros obtidos para as mais diversas
          classes de materiais metálicos. Isso pode estar atrelado ao fato de
          que muitos grupos de pesquisadores podem ter uma formação especifica
          na área de metalurgia, ou ciência dos materiais, porém desconsideram
          alguns aspectos referentes ao fenômeno eletroquímico do problema.
          Assim, alguns resultados apontados na literatura científica são
          questionáveis e uma melhor análise dos métodos empregados, bem como
          dos resultados obtidos, poderia ser realizada se a composição das
          equipes de pesquisa fosse multidisciplinar cientificamente, e então
          pudessem estudar coletivamente o problema. Soma-se, ainda, o fato de
          que as equações propostas por ASTM e ISO não serem suficientes para se
          analisar o problema em sua plenitude e contribuírem para as
          inconsistências dos resultados científicos publicados (CARVALHO et
          al., 2017).
        </Paragraph>

        <Subtitle>
          1.1.1 Resumo histórico da permeação eletroquímica de hidrogênio.
        </Subtitle>

        <Paragraph>
          O objetivo do teste de permeação é a determinação da permeabilidade,
          solubilidade e difusividade (Velasco, 2007).
        </Paragraph>

        <Paragraph>
          O princípio do método consiste em produzir hidrogênio sobre uma das
          faces da membrana metálica situada na célula eletroquímica de carga e
          medir seu fluxo de permeação através da membrana pela oxidação
          eletroquímica na célula adjacente conhecida como célula de detecção.
          Portanto, a intensidade de corrente de oxidação do hidrogênio atômico
          é uma medida direta do fluxo de permeação de hidrogênio através da
          membrana metálica. A célula de permeação (Figura 8), constituída das
          células de carga e detecção, é denominada muitas vezes de célula gêmea
          (twin cell). Como pode ser observado, as células situam-se
          simetricamente sendo divididas pela a membrana metálica que se
          encontra localizada no centro.
        </Paragraph>

        <center>
          <Image src={tf1} margin={20} alt="Formula" />
        </center>

        <Paragraph>
          O hidrogênio produzido na célula de carga é absorvido e difunde-se
          através do metal até a outra superfície da membrana metálica, onde se
          aplica uma polarização anódica com a finalidade de oxidá-lo (H → H+ +
          e-) mantendo sua concentração praticamente próxima de zero nesta
          superfície. Essa intensidade de corrente de oxidação é proporcional ao
          fluxo de massa de hidrogênio que atravessa o metal (Velasco, 2007).
        </Paragraph>
        <Paragraph>
          Estando o lado de geração mantido em potencial constante denomina-se a
          técnica com sendo duplo-potenciostática. Em 1976 Boes & Züchner
          desenvolveram a técnica galvanostática-potenciostática, em que uma
          corrente constante é aplicada.
        </Paragraph>
        <Paragraph>
          A diferença entre as duas técnicas reside no fato de que na
          duplo-potenciostática a condição de contorno na célula de produção de
          hidrogênio assegura uma concentração constante de hidrogênio enquanto
          que no método galvanostático-potenciostático a célula de carga
          assegura um fluxo ou produção constante de hidrogênio. Na prática, o
          primeiro método pode ser comprometido devido à aderência de bolhas de
          hidrogênio coalescidas, aumentando a área de cobertura deste gás na
          superfície do metal. No segundo, devido à produção de hidrogênio por
          unidade de área se manter sempre constante, a condição de contorno é
          assegurada muito mais eficientemente.
        </Paragraph>

        <Subtitle>
          1.1.2 Equações da difusão em testes de permeação de hidrogênio.
        </Subtitle>

        <Paragraph>
          A difusão de hidrogênio em uma membrana metálica é descrita pela
          segunda lei de Fick:
        </Paragraph>

        <center>
          <Image size={220} src={tf2} alt="Formula" />
        </center>

        <Observation>
          * Onde C é a concentração de hidrogênio, x a distância e t é o tempo.
        </Observation>

        <Paragraph>
          Para o caso de uma membrana sem hidrogênio onde a superfície de
          carregamento é exposta a um fluxo constante de hidrogênio e a
          superfície de saída é mantida sob uma concentração zero de hidrogênio,
          as condições de contorno são (Boes & Züchner, 1976):
        </Paragraph>

        <center>
          <Image src={tf3} alt="Formula" />
        </center>

        <Observation>* Onde L é a espessura da membrana.</Observation>

        <Paragraph>
          Para este caso (galvanostático-potenciostático), a solução tem a
          forma:
        </Paragraph>

        <center>
          <Image src={tf4} alt="Formula" />
        </center>

        <Paragraph>
          Para o caso em que temos uma concentração constante
          (duplo-potenciostático) na superfície de carregamento, as condições de
          contorno são:
        </Paragraph>

        <center>
          <Image src={tf5} alt="Formula" />
        </center>

        <Paragraph>Para este caso a solução tem a forma:</Paragraph>

        <center>
          <Image medium src={tf6} alt="Formula" />
        </center>

        <Paragraph>
          A variação no fluxo de permeação através da superfície em x=L é obtida
          através da primeira lei de Fick (Abdul-Hamid, 1993):
        </Paragraph>

        <center>
          <Image size={200} src={tf7} alt="Formula" />
        </center>

        <Paragraph>
          Onde F é a constante de Faraday e J(L,t) é determinado
          experimentalmente a partir da seguinte relação:
        </Paragraph>

        <center>
          <Image size={200} src={tf8} alt="Formula" />
        </center>

        <Observation>
          * Onde i(L,t) é a corrente anódica no tempo t, i(L,0) é corrente de
          background e A é a área de permeação.
        </Observation>

        <Paragraph>
          As Equações (14) e a primeira lei de Fick (16) combinadas produzem:
        </Paragraph>

        <center>
          <Image src={tf9} alt="Formula" />
        </center>

        <Paragraph>A partir de (14):</Paragraph>

        <center>
          <Image size={200} src={tf10} alt="Formula" />
        </center>

        <Paragraph>
          Onde a concentração superficial torna-se constante quando o
          estado-estacionário de permeação é atingido. Se nenhuma perda no fluxo
          (devido a aprisionamento ou reações superficiais) ocorre, o fluxo de
          carga é esperado ser igual ao fluxo de estado-estacionário na
          superfície de saída:
        </Paragraph>

        <center>
          <Image size={240} src={tf11} alt="Formula" />
        </center>

        <Paragraph>
          Igualmente, combinando as equações (15) e a primeira lei de Fick (16),
          tem-se:
        </Paragraph>

        <center>
          <Image size={350} src={tf12} alt="Formula" />
        </center>

        <Paragraph>
          Equivalentemente, para o caso de uma concentração constante de
          carregamento, no estado-estacionário tem-se:
        </Paragraph>

        <center>
          <Image size={200} src={tf13} alt="Formula" />
        </center>

        <Paragraph>
          A partir de tempos característicos obtidos a partir da curva de
          permeação eletroquímica, o coeficiente de difusão pode ser encontrado.
          Tais tempos incluem o break-through time, tb, e o time lag, tL.
        </Paragraph>

        <Paragraph>
          A intersecção da tangente no ponto de inflexão com o nível inicial,
          produz o chamado break-through time, tb (Boes & Züchner, 1976).
        </Paragraph>
        <Paragraph>
          Seguindo o tempo integral de corrente, isto é, a quantidade total de
          hidrogênio emergindo do lado de detecção, a inclinação da curva
          torna-se constante quando um gradiente estacionário de concentração
          foi estabelecido na membrana. A interceptação sobre o eixo do tempo da
          extrapolação da linha reta dá o chamado time lag, tL (Boes & Züchner,
          1976).
        </Paragraph>

        <center>
          <Image size={350} margin={20} src={tf14} alt="Formula" />
        </center>

        <Observation>
          * Identificação dos tempos característicos em um transiente de
          permeação de hidrogênio. (adaptado de Boes & Züchner, 1976).
        </Observation>

        <Paragraph>
          Para condições de teste galvanostático-potenciostático tem-se:
        </Paragraph>

        <center>
          <Image size={200} src={tf15} alt="Formula" />
        </center>

        <Paragraph>
          Para condições de teste potenciostático-potenciostático, tem-se:
        </Paragraph>

        <center>
          <Image size={200} src={tf16} alt="Formula" />
        </center>

        <Observation>
          * O coeficiente de difusão aparente pode ser determinada a partir da
          média aritmética dos coeficientes de difusão obtidos pelos
          break-through time, tb, e o time lag, tL.
        </Observation>

        <Paragraph>
          A permeabilidade e a solubilidade podem ser determinadas mediante as
          Equações abaixo:
        </Paragraph>

        <center>
          <Image size={200} src={tf17} alt="Formula" />
        </center>

        <Subtitle>
          1.1.3 Fatores que afetam a difusão e a permeação eletroquímica de
          hidrogênio
        </Subtitle>

        <Paragraph>
          Os três principais parâmetros físicos citados anteriormente
          (Difusividade, solubilidade e permeabilidade) são fortemente
          influenciados pela microestrutura do aço.
        </Paragraph>

        <Paragraph>
          Para um aço API X65, Park et al. (2008) sugeriram que micro
          constituintes Ferrita Acicular e Bainita agem como sítios
          aprisionadores irreversíveis e a eficiência de aprisionamento foi
          aumentada na ordem de perlita degenerada, bainita e ferrita acicular,
          ou seja apresentaram maiores valores de solubilidade, consequentemente
          a microestrutura afeta os resultados obtidos em testes de permeação
          eletroquímica de hidrogênio.
        </Paragraph>

        <Paragraph>
          Serna et al. (2005) estudaram dois aços catalogados pela API como X52.
          Um apresentava uma microestrutura composta de finos grãos de ferrita
          equaxial com pequenas quantidades de outros constituintes, tal como
          perlita. O outro era composto de finos grãos de ferrita acicular com
          perlita preferencialmente distribuída em contornos de grão. Eles
          concluíram que os principais parâmetros que controlam a difusividade e
          o aprisionamento em aços microligados de resistência similar são: a
          densidade de discordâncias e a forma com quais os precipitados estão
          distribuídos dentro do aço.
        </Paragraph>

        <Paragraph>
          Estudando o aço AISI 430 Yen & Huang (2003) mostraram que o aumento na
          densidade de discordância, como resultado de trabalho a frio, foi
          responsável pela diminuição na difusividade de hidrogênio e aumento na
          solubilidade.
        </Paragraph>

        <Paragraph>
          Dietzel et al. (2006) mostraram que testes de permeação realizados em
          amostras obtidas a partir de chapa de aço ferrítico FeE960T
          apresentaram coeficientes de difusão que dependia da deformação
          plástica e da concentração total de hidrogênio, enquanto que o fluxo
          máximo de hidrogênio permanece quase inalterado.
        </Paragraph>

        <Subtitle>1.1.3.2 Temperatura e uso de envenenadores</Subtitle>

        <Paragraph>
          A temperatura é outro parâmetro que altera as propriedades de
          interação do hidrogênio com o metal. Pequenas variações podem aumentar
          ou diminuir de forma considerável a difusividade e a permeabilidade.
          Geralmente, na literatura propõe-se que essas propriedades obedecem à
          relação de Arrhenius (Hirt, 1980).
        </Paragraph>

        <Paragraph>
          Au (2007) e Addach et al. (2005) mostraram a eficiência do aumento da
          temperatura para se introduzir altos níveis de hidrogênio nos
          materiais em um curto período de tempo.
        </Paragraph>

        <Paragraph>
          É conhecido que se adicionando pequenas quantidades de sais solúveis
          contendo elementos como P, S, As, Se, Sb e Te, tem-se um aumento
          substancial na cinética de entrada de hidrogênio para o ferro e ligas
          ferrosas (Morris, 1998). Esses elementos adicionais são conhecidos
          como envenenadores (Schowen et al, 2007).
        </Paragraph>

        <Paragraph>
          Mamani et al. (2007) estudou o uso de envenenadores em Permeação
          eletroquímica de hidrogênio em Armco-Fe. Ele mostrou que envenenadores
          a base de As apresentaram melhor eficiência para promover a permeação
          de hidrogênio.
        </Paragraph>
      </ParagraphContainer>
    </Container>
  );
}
