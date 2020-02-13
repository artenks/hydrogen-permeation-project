import React, { useState, useCallback } from 'react';

import { createMuiTheme, ThemeProvider } from '@material-ui/core/styles';
import Checkbox from '@material-ui/core/Checkbox';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import MenuItem from '@material-ui/core/MenuItem';
import FormControl from '@material-ui/core/FormControl';
import InputLabel from '@material-ui/core/InputLabel';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Select from '@material-ui/core/Select';
import grey from '@material-ui/core/colors/grey';
import Modal from '../../components/Modal';
import {
  Container,
  Form,
  Title,
  Caption,
  Filled,
  Subtitle,
  MethodsList,
  ModalTitle,
  ModalContainer,
  Separator,
} from './styles';

const theme = createMuiTheme({
  palette: {
    primary: grey,
    secondary: grey,
  },
});

export default function Calculator() {
  const [isOpenned, setOpenned] = useState(true);

  const [isTB, setTB] = useState(true);
  const [isTL, setTL] = useState(false);
  const [isTI, setTI] = useState(false);
  const [chargeCondition, setChargeCondition] = useState(0);

  const handleChange = event => {
    setChargeCondition(event.target.value);
  };

  const handleTBChange = useCallback(e => {
    setTB(e.target.checked);
  }, []);

  const handleTLChange = useCallback(e => {
    setTL(e.target.checked);
  }, []);

  const handleTIChange = useCallback(e => {
    setTI(e.target.checked);
  }, []);

  const handleCalc = useCallback(() => {
    console.log({
      isTB,
      isTL,
      isTI,
      age: chargeCondition,
    });

    setOpenned(true);
  }, [chargeCondition, isTB, isTI, isTL]);

  return (
    <>
      <Container>
        <Title>Calculadora</Title>
        <Caption>
          FAÇA USO DAS NOSSAS FORMULAS, PREENCHA O FORMULÁRIO E OBTENHA O
          RESULTADO
        </Caption>

        <ThemeProvider theme={theme}>
          <Form>
            <FormControl variant="filled">
              <InputLabel id="demo-simple-select-filled-label">
                Condição de Carregamento
              </InputLabel>
              <Select
                labelId="demo-simple-select-filled-label"
                id="demo-simple-select-filled"
                value={chargeCondition}
                onChange={handleChange}
              >
                <MenuItem value={0}>Potenciostático</MenuItem>
                <MenuItem value={1}>Galvanostático</MenuItem>
                <MenuItem value={2}>Potencial de Circuito Aberto</MenuItem>
              </Select>
            </FormControl>

            <Filled>
              <Subtitle>Métodos</Subtitle>
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

            <TextField label="Espessura (m)" variant="filled" />

            {isTB && <TextField label="Tempo - TB (s)" variant="filled" />}

            {isTL && <TextField label="Tempo - TL (s)" variant="filled" />}

            {isTI && <TextField label="Tempo - TI (s)" variant="filled" />}

            <Button
              style={{ color: 'white', marginTop: 16, alignSelf: 'flex-end' }}
              variant="contained"
              color="primary"
              onClick={handleCalc}
            >
              Calcular
            </Button>
          </Form>
        </ThemeProvider>
      </Container>

      <Modal isOpen={isOpenned} onRequestClose={() => setOpenned(false)}>
        <ModalContainer>
          <ModalTitle>Resultado(s)</ModalTitle>
          <ThemeProvider theme={theme}>
            {isTB && (
              <TextField
                style={{ minWidth: 280 }}
                disabled
                id="filled-disabled"
                label="TB"
                defaultValue="Hello World"
                variant="filled"
              />
            )}
            {isTL && (
              <TextField
                style={{ minWidth: 280 }}
                disabled
                id="filled-disabled"
                label="TL"
                defaultValue="Hello World"
                variant="filled"
              />
            )}
            {isTI && (
              <TextField
                style={{ minWidth: 280 }}
                disabled
                id="filled-disabled"
                label="TI"
                defaultValue="Hello World"
                variant="filled"
              />
            )}

            <Separator />

            <TextField
              style={{ minWidth: 280 }}
              disabled
              id="filled-disabled"
              label="Média"
              defaultValue="Hello World"
              variant="filled"
            />

            <Button
              style={{ color: 'white', marginTop: 16, alignSelf: 'flex-end' }}
              variant="contained"
              color="primary"
              onClick={() => setOpenned(false)}
            >
              Fechar
            </Button>
          </ThemeProvider>
        </ModalContainer>
      </Modal>
    </>
  );
}
