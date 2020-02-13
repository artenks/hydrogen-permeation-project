import React from 'react';
import { Bar } from 'react-chartjs-2';
import { Container, Filters, Title, Form, Input } from './styles';

export default function Articles() {
  const infos = [65, 59, 80, 81, 56, 55, 40];
  const data = {
    labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July'],
    datasets: [
      {
        label: 'My First dataset',
        backgroundColor: 'rgba(255, 0, 0, 0.2)',
        borderColor: 'rgba(255, 0, 0,1)',
        borderWidth: 1,
        hoverBackgroundColor: 'rgba(255, 0, 0, 0.4)',
        hoverBorderColor: 'rgba(255, 0, 0, 1)',
        data: infos,
      },
    ],
  };

  return (
    <Container>
      <Bar
        data={data}
        options={{
          legend: {
            display: false,
          },
          responsive: true,
          tooltips: {
            callbacks: {
              label(tooltipItem, _data) {
                const valor = infos[tooltipItem.index];
                return `Difusividade ${1}: ${valor} 10-10m²s-1`; // dataInicial[tooltipItem.index].Tipo
              },
            },
          },
          onClick: _evt => {
            // const clickedElementIndex = this.getElementsAtEvent(evt)[0]._index;
            // const value = this.data.datasets[0].data[clickedElementIndex];
            // let metodologia = '';
            // if (dataInicial[clickedElementIndex]['Métodologia de Cálculo'].tb) {
            //   metodologia += 'TB, ';
            // }
            // if (dataInicial[clickedElementIndex]['Métodologia de Cálculo'].tl) {
            //   metodologia += 'TL, ';
            // }
            // if (dataInicial[clickedElementIndex]['Métodologia de Cálculo'].ti) {
            //   metodologia += 'TI, ';
            // }
            // if (metodologia == '') {
            //   metodologia = '-, ';
            // }
            // $('#modal-aco')
            //   .empty()
            //   .append(`Aço: ${dataInicial[clickedElementIndex].Aço}`);
            // $('#modal-difusividade')
            //   .empty()
            //   .append(
            //     `Difusividade: ${dataInicial[clickedElementIndex].Difusividade.value}`
            //   );
            // $('#modal-metodologia')
            //   .empty()
            //   .append(
            //     `Métodologia(s): ${metodologia.substring(
            //       0,
            //       metodologia.length - 2
            //     )}`
            //   );
            // $('#modal-revestimento')
            //   .empty()
            //   .append(
            //     `Revestimento: ${dataInicial[clickedElementIndex].Revestimento}`
            //   );
            // $('#modal-autor')
            //   .empty()
            //   .append(dataInicial[clickedElementIndex].Autor);
            // $('#modal-title')
            //   .empty()
            //   .append(dataInicial[clickedElementIndex].Título);
            // $('#modal-button').click(function() {
            //   window
            //     .open(dataInicial[clickedElementIndex].Link, '_blank')
            //     .focus();
            // });
            // if (dataInicial[clickedElementIndex].Link === '') {
            //   $('#modal-button').addClass('disabled');
            // } else {
            //   $('#modal-button').removeClass('disabled');
            // }
            // $('.ui.modal').modal('show');
          },
          scales: { yAxes: [{ ticks: { beginAtZero: true } }] },
        }}
      />

      <Filters>
        <Title>Filtros</Title>

        <Form>
          <Input name="steel" placeholder="Aço" />
          <Input
            name="charging_condition"
            placeholder="Condição de Carregamento"
          />
          <Input name="method" placeholder="Método" />
          <Input name="coating" placeholder="Revestimento" />
          <Input name="difusivity" placeholder="Difusividade" />
        </Form>
      </Filters>
    </Container>
  );
}
