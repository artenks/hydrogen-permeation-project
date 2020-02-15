import React, { useState, useCallback } from 'react';
import { Bar } from 'react-chartjs-2';
import TextField from '@material-ui/core/TextField';
import InputLabel from '@material-ui/core/InputLabel';
import FilledInput from '@material-ui/core/FilledInput';
import MenuItem from '@material-ui/core/MenuItem';
import Select from '@material-ui/core/Select';
import Checkbox from '@material-ui/core/Checkbox';
import Button from '@material-ui/core/Button';
import CircularProgress from '@material-ui/core/CircularProgress';
import InputAdornment from '@material-ui/core/InputAdornment';
import FormControl from '@material-ui/core/FormControl';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import { createMuiTheme, ThemeProvider } from '@material-ui/core/styles';
import grey from '@material-ui/core/colors/grey';
import Scrollbar from 'react-perfect-scrollbar';

import {
  Container,
  Subtitle,
  Filters,
  Filled,
  Title,
  Caption,
  MethodTitle,
  MethodsList,
  Form,
} from './styles';

const theme = createMuiTheme({
  palette: {
    primary: grey,
    secondary: grey,
  },
});

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

  const [isLoadingSteels, setLoadingSteels] = useState(true);

  const [isTB, setIsTB] = useState(true);
  const [isTL, setIsTL] = useState(false);
  const [isTI, setIsTI] = useState(false);

  const handleTBChange = useCallback(e => {
    setIsTB(e.target.checked);
  }, []);

  const handleTLChange = useCallback(e => {
    setIsTL(e.target.checked);
  }, []);

  const handleTIChange = useCallback(e => {
    setIsTI(e.target.checked);
  }, []);

  return (
    <Scrollbar>
      <Container>
        <Title>Artigos</Title>
        <Caption>
          COLEÇÃO DE ARTIGOS PARA VOCÊ SE BASEAR NOS SEUS ESTUDOS
        </Caption>

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
            scales: {
              yAxes: [
                {
                  scaleLabel: {
                    display: true,
                    labelString: 'Difusividade (10-10m²s-1)',
                  },
                  ticks: { beginAtZero: true },
                },
              ],
            },
          }}
        />

        <Filters>
          <ThemeProvider theme={theme}>
            <Subtitle>Filtros</Subtitle>
            <Form>
              {isLoadingSteels ? (
                <FilledInput
                  disabled
                  startAdornment={
                    <InputAdornment position="start">Aços</InputAdornment>
                  }
                  endAdornment={
                    <InputAdornment position="end">
                      <CircularProgress size={24} />
                    </InputAdornment>
                  }
                />
              ) : (
                <FormControl variant="filled">
                  <InputLabel id="acos-label">Aços</InputLabel>
                  <Select
                    labelId="acos-label"
                    id="acos  "
                    // value={chargeCondition}
                    // onChange={handleChange}
                  >
                    <MenuItem value={0}>Todos</MenuItem>
                  </Select>
                </FormControl>
              )}

              <FormControl variant="filled">
                <InputLabel id="demo-simple-select-filled-label">
                  Condição de Carregamento
                </InputLabel>
                <Select
                  labelId="demo-simple-select-filled-label"
                  id="demo-simple-select-filled"
                  // value={chargeCondition}
                  // onChange={handleChange}
                >
                  <MenuItem value={0}>Todos</MenuItem>
                  <MenuItem value={1}>Potenciostático</MenuItem>
                  <MenuItem value={2}>Galvanostático</MenuItem>
                  <MenuItem value={3}>Potencial de Circuito Aberto</MenuItem>
                </Select>
              </FormControl>

              <Filled>
                <MethodTitle>Métodos</MethodTitle>
                <MethodsList>
                  <FormControlLabel
                    control={
                      <Checkbox checked={isTB} onChange={handleTBChange} />
                    }
                    label="TB"
                  />
                  <FormControlLabel
                    control={
                      <Checkbox checked={isTL} onChange={handleTLChange} />
                    }
                    label="TL"
                  />
                  <FormControlLabel
                    control={
                      <Checkbox checked={isTI} onChange={handleTIChange} />
                    }
                    label="TI"
                  />
                </MethodsList>
              </Filled>

              <FormControl variant="filled">
                <InputLabel id="revestimento-label">Revestimento</InputLabel>
                <Select
                  labelId="revestimento-label"
                  id="revestimento  "
                  // value={chargeCondition}
                  // onChange={handleChange}
                >
                  <MenuItem value={0}>Todos</MenuItem>
                  <MenuItem value={1}>Paládio</MenuItem>
                  <MenuItem value={2}>Níquel</MenuItem>
                  <MenuItem value={3}>Sem Revestimento</MenuItem>
                </Select>
              </FormControl>

              <TextField label="Difusividade" variant="filled" type="number" />

              <Button
                style={{ color: 'white', marginTop: 16, alignSelf: 'flex-end' }}
                variant="contained"
                color="primary"
                // onClick={handleCalc}
              >
                Aplicar Filtros
              </Button>
            </Form>
          </ThemeProvider>
        </Filters>
      </Container>
    </Scrollbar>
  );
}
