/* eslint-disable no-console */
import React, { useState, useEffect, useCallback } from 'react';
import { Bar } from 'react-chartjs-2';
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
import Scrollbar from 'react-perfect-scrollbar';
import { toast } from 'react-toastify';
import firebase from '../../services/firebase';
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

import chartOptions from './options';

const changeConditions = [
  'Potenciostático',
  'Galvanostático',
  'Potencial de Circuito Aberto',
];

const coatings = ['Paládio', 'Níquel', 'Sem Revestimento'];

export default function Articles() {
  const [articles, setArticles] = useState([]);
  const [data, setData] = useState({
    labels: [],
    datasets: [],
  });

  const [isLoadingArticles, setLoadingArticles] = useState(true);
  const [isLoadingSteels, setLoadingSteels] = useState(true);

  const [steels, setSteels] = useState([]);

  const [selectedSteel, setSelectedSteel] = useState(0);
  const [selectedChargeCondition, setSelectedChargeCondition] = useState(0);
  const [selectedCoating, setSelectedCoatingCondition] = useState(0);

  const handleSteelChange = useCallback(e => {
    setSelectedSteel(e.target.value);
  }, []);

  const handleChargeConditionChange = useCallback(e => {
    setSelectedChargeCondition(e.target.value);
  }, []);

  const handleCoatingChange = useCallback(e => {
    setSelectedCoatingCondition(e.target.value);
  }, []);

  const [isTB, setIsTB] = useState(true);
  const [isTL, setIsTL] = useState(true);
  const [isTI, setIsTI] = useState(true);

  const handleTBChange = useCallback(e => {
    setIsTB(e.target.checked);
  }, []);

  const handleTLChange = useCallback(e => {
    setIsTL(e.target.checked);
  }, []);

  const handleTIChange = useCallback(e => {
    setIsTI(e.target.checked);
  }, []);

  async function makeCall({ chargeCondition, coating }) {
    setLoadingArticles(true);

    console.log({ chargeCondition, coating });

    let query = firebase
      .firestore()
      .collection('articles')
      .orderBy('diffusivity.value');

    if (chargeCondition) {
      query = query.where('loadingConditions', '==', chargeCondition);
    }

    if (coating) {
      query = query.where('coating', '==', coating);
    }

    const articlesResponse = await query.get();

    const labels = [];
    const infos = [];
    const rawData = [];

    articlesResponse.docs.forEach(article => {
      const articleData = article.data();

      labels.push(`${articleData.title.substring(0, 20)}...`);
      infos.push(articleData.diffusivity.value);

      rawData.push(articleData);
    });

    setArticles(rawData);
    setData({
      labels,
      datasets: [
        {
          label: 'id',
          backgroundColor: 'rgba(255, 0, 0, 0.2)',
          borderColor: 'rgba(255, 0, 0,1)',
          borderWidth: 1,
          hoverBackgroundColor: 'rgba(255, 0, 0, 0.4)',
          hoverBorderColor: 'rgba(255, 0, 0, 1)',
          data: infos,
        },
      ],
    });

    setLoadingArticles(false);
  }

  const handleUpdateChart = useCallback(() => {
    let options = {};

    if (selectedChargeCondition !== 0) {
      const chargeCondition = changeConditions[selectedChargeCondition - 1];
      options = { ...options, chargeCondition };
    }

    if (selectedCoating !== 0) {
      const coating = coatings[selectedCoating - 1];
      options = { ...options, coating };
    }
    makeCall(options);
  }, [selectedChargeCondition, selectedCoating]);

  const handleApplyFilter = useCallback(() => {
    const haveMethodSelected = [isTB, isTL, isTI].filter(m => m).length >= 1;

    if (!haveMethodSelected) {
      toast.error('Selecione ao menos um método');
    } else {
      handleUpdateChart();
    }
  }, [handleUpdateChart, isTB, isTI, isTL]);

  useEffect(() => {
    (async () => {
      const steelResponse = await firebase
        .firestore()
        .collection('steels')
        .orderBy('name')
        .get();

      if (!steelResponse.empty) {
        setSteels(
          steelResponse.docs.map(doc => ({ id: doc.id, name: doc.data().name }))
        );

        setLoadingSteels(false);
      }
    })();
  }, [handleUpdateChart]);

  return (
    <Scrollbar>
      <Container>
        <Title>Artigos</Title>
        <Caption>
          COLEÇÃO DE ARTIGOS PARA VOCÊ SE BASEAR NOS SEUS ESTUDOS
        </Caption>

        {!isLoadingArticles && (
          <Bar
            data={data}
            options={chartOptions(data, articles)}
            onElementsClick={elements => console.log(elements)}
          />
        )}

        <Filters>
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
                  value={selectedSteel}
                  onChange={handleSteelChange}
                >
                  <MenuItem value={0}>Todos</MenuItem>
                  {steels.map(steel => (
                    <MenuItem key={steel.id} value={steel.id}>
                      {steel.name}
                    </MenuItem>
                  ))}
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
                value={selectedChargeCondition}
                onChange={handleChargeConditionChange}
              >
                <MenuItem value={0}>Todas</MenuItem>
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
                value={selectedCoating}
                onChange={handleCoatingChange}
              >
                <MenuItem value={0}>Todos</MenuItem>
                <MenuItem value={1}>Paládio</MenuItem>
                <MenuItem value={2}>Níquel</MenuItem>
                <MenuItem value={3}>Sem Revestimento</MenuItem>
              </Select>
            </FormControl>

            {/* <TextField label="Difusividade" variant="filled" type="number" /> */}

            <Button
              style={{ color: 'white', marginTop: 16, alignSelf: 'flex-end' }}
              variant="contained"
              color="primary"
              disabled={isLoadingSteels}
              onClick={handleApplyFilter}
            >
              Aplicar Filtros
            </Button>
          </Form>
        </Filters>
      </Container>
    </Scrollbar>
  );
}
