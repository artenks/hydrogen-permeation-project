import React, { useState, useCallback, useMemo } from 'react';

import { toast } from 'react-toastify';
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

import { gpTb, gpTl, gpTi, ppTb, ppTl, ppTi } from './calcs';

const theme = createMuiTheme({
  palette: {
    primary: grey,
    secondary: grey,
  },
});

export default function Calculator() {
  const [isOpenned, setOpenned] = useState(false);

  const [isTB, setIsTB] = useState(true);
  const [isTL, setIsTL] = useState(false);
  const [isTI, setIsTI] = useState(false);
  const [chargeCondition, setChargeCondition] = useState(0);

  const [tb, setTB] = useState(0);
  const [tl, setTL] = useState(0);
  const [ti, setTI] = useState(0);
  const [width, setWidth] = useState(0);

  const handleChange = event => {
    setChargeCondition(event.target.value);
  };

  const handleTBChange = useCallback(e => {
    setIsTB(e.target.checked);
  }, []);

  const handleTLChange = useCallback(e => {
    setIsTL(e.target.checked);
  }, []);

  const handleTIChange = useCallback(e => {
    setIsTI(e.target.checked);
  }, []);

  const resultTB = useMemo(() => {
    if (!isTB) return 0.0;

    if (chargeCondition === 1) {
      return gpTb(tb, width);
    }

    return ppTb(tb, width);
  }, [chargeCondition, isTB, tb, width]);

  const resultTL = useMemo(() => {
    if (!isTL) return 0.0;

    if (chargeCondition === 1) {
      return gpTl(tl, width);
    }

    return ppTl(tl, width);
  }, [chargeCondition, isTL, tl, width]);

  const resultTI = useMemo(() => {
    if (!isTI) return 0.0;

    if (chargeCondition === 1) {
      return gpTi(ti, width);
    }

    return ppTi(ti, width);
  }, [chargeCondition, isTI, ti, width]);

  const average = useMemo(() => {
    const allResults = [resultTB, resultTL, resultTI];
    const amount = allResults.reduce((total, value) => total + value);
    const nonZero = allResults.filter(value => value !== 0).length;

    return amount / nonZero;
  }, [resultTB, resultTI, resultTL]);

  const handleCalc = useCallback(() => {
    if (!isTB && !isTL && !isTI) {
      toast.error('Selecione ao menos um método');
      return;
    }

    if (width === 0) {
      toast.error('Valor para Espessura não informado');
      return;
    }

    if (isTB && tb === 0) {
      toast.error('Valor para TB não informado');
      return;
    }

    if (isTL && tl === 0) {
      toast.error('Valor para TL não informado');
      return;
    }

    if (isTI && ti === 0) {
      toast.error('Valor para TI não informado');
      return;
    }

    setOpenned(true);
  }, [isTB, isTI, isTL, tb, ti, tl, width]);

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

            <TextField
              value={width || ''}
              onChange={e => setWidth(e.target.value)}
              label="Espessura (m)"
              variant="filled"
            />

            {isTB && (
              <TextField
                value={tb || ''}
                onChange={e => setTB(e.target.value)}
                label="Tempo - TB (s)"
                variant="filled"
              />
            )}

            {isTL && (
              <TextField
                value={tl || ''}
                onChange={e => setTL(e.target.value)}
                label="Tempo - TL (s)"
                variant="filled"
              />
            )}

            {isTI && (
              <TextField
                value={ti || ''}
                onChange={e => setTI(e.target.value)}
                label="Tempo - TI (s)"
                variant="filled"
              />
            )}

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
                defaultValue={resultTB}
                variant="filled"
              />
            )}
            {isTL && (
              <TextField
                style={{ minWidth: 280 }}
                disabled
                id="filled-disabled"
                label="TL"
                defaultValue={resultTL}
                variant="filled"
              />
            )}
            {isTI && (
              <TextField
                style={{ minWidth: 280 }}
                disabled
                id="filled-disabled"
                label="TI"
                defaultValue={resultTI}
                variant="filled"
              />
            )}

            <Separator />

            <TextField
              style={{ minWidth: 280 }}
              disabled
              id="filled-disabled"
              label="Média"
              defaultValue={average}
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
