import React, { useState, useEffect, useCallback } from 'react';
import { Bar } from 'react-chartjs-2';
import InputLabel from '@material-ui/core/InputLabel';

import TextField from '@material-ui/core/TextField';
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
import Modal from '../../components/Modal';
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
  ModalContainer,
  ModalTitle,
  Separator,
  ModalHorizontalContainer,
  ModalActions,
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
  const [currentArticles, setCurrentArticles] = useState([]);
  const [displayArticle, setDisplayArticle] = useState(null);
  const [data, setData] = useState({
    labels: [],
    datasets: [],
  });

  const [isLoadingSteels, setLoadingSteels] = useState(true);

  const [steels, setSteels] = useState([]);

  const [selectedSteel, setSelectedSteel] = useState(0);
  const [selectedChargeCondition, setSelectedChargeCondition] = useState(0);
  const [selectedCoating, setSelectedCoatingCondition] = useState(0);

  const [isTB, setIsTB] = useState(true);
  const [isTL, setIsTL] = useState(true);
  const [isTI, setIsTI] = useState(true);

  const handleSteelChange = useCallback(e => {
    setSelectedSteel(e.target.value);
  }, []);

  const handleChargeConditionChange = useCallback(e => {
    setSelectedChargeCondition(e.target.value);
  }, []);

  const handleCoatingChange = useCallback(e => {
    setSelectedCoatingCondition(e.target.value);
  }, []);

  const handleTBChange = useCallback(e => {
    setIsTB(e.target.checked);
  }, []);

  const handleTLChange = useCallback(e => {
    setIsTL(e.target.checked);
  }, []);

  const handleTIChange = useCallback(e => {
    setIsTI(e.target.checked);
  }, []);

  const applyFilter = useCallback(
    ({
      chargeCondition,
      coating,
      steel,
      methodTB = true,
      methodTL = true,
      methodTI = true,
    }) => {
      const labels = [];
      const infos = [];
      const filteredArticles = [];

      articles
        .filter(article => {
          if (steel && article.steel !== steel) {
            return false;
          }

          if (chargeCondition && article.chargeCondition !== chargeCondition) {
            return false;
          }

          if (coating && article.coating !== coating) {
            return false;
          }

          if (!methodTB && article.calculationMethodology.tb) {
            return false;
          }

          if (!methodTL && article.calculationMethodology.tl) {
            return false;
          }

          if (!methodTI && article.calculationMethodology.ti) {
            return false;
          }

          return true;
        })
        .forEach(article => {
          labels.push(`${article.title.substring(0, 20)}...`);
          infos.push(article.diffusivityValue);
          filteredArticles.push(article);
        });

      setCurrentArticles(filteredArticles);
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
    },
    [articles]
  );

  const handleUpdateChart = useCallback(() => {
    let options = {
      methodTB: isTB,
      methodTL: isTL,
      methodTI: isTI,
    };

    if (selectedSteel !== 0) {
      options = { ...options, steel: selectedSteel };
    }

    if (selectedChargeCondition !== 0) {
      const chargeCondition = changeConditions[selectedChargeCondition - 1];
      options = { ...options, chargeCondition };
    }

    if (selectedCoating !== 0) {
      const coating = coatings[selectedCoating - 1];
      options = { ...options, coating };
    }

    applyFilter(options);
  }, [
    applyFilter,
    isTB,
    isTI,
    isTL,
    selectedChargeCondition,
    selectedCoating,
    selectedSteel,
  ]);

  const handleApplyFilter = useCallback(() => {
    const haveMethodSelected = [isTB, isTL, isTI].filter(m => m).length >= 1;

    if (!haveMethodSelected) {
      toast.error('Selecione ao menos um método');
    } else {
      handleUpdateChart();
    }
  }, [handleUpdateChart, isTB, isTI, isTL]);

  const handleDisplayArticle = useCallback(
    elements => {
      if (elements.length) {
        const article = currentArticles[elements[0]._index];
        console.log(article);

        setDisplayArticle(article);
      }
    },
    [currentArticles]
  );

  const handleCloseArticle = useCallback(() => {
    setDisplayArticle(null);
  }, []);

  useEffect(() => {
    applyFilter({});
  }, [applyFilter, articles]);

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
  }, []);

  useEffect(() => {
    (async () => {
      const articlesResponse = await firebase
        .firestore()
        .collection('articles')
        .orderBy('diffusivityValue')
        .get();

      if (!articlesResponse.empty) {
        setArticles(
          articlesResponse.docs.map(doc => ({
            id: doc.id,
            ...doc.data(),
          }))
        );
      }
    })();
  }, []);

  useEffect(() => {
    (async () => {
      for (let index = 0; index < articles.length; index++) {
        const article = articles[index];

        const updatedData = {
          loadingConditions: firebase.firestore.FieldValue.delete(),
        };

        await firebase
          .firestore()
          .doc(`articles/${article.id}`)
          .update(updatedData);
      }
    })();
  }, [articles]);

  return (
    <>
      <Scrollbar>
        <Container>
          <Title>Artigos</Title>
          <Caption>
            COLEÇÃO DE ARTIGOS PARA VOCÊ SE BASEAR NOS SEUS ESTUDOS
          </Caption>

          <Bar
            data={data}
            options={chartOptions(data, articles)}
            onElementsClick={handleDisplayArticle}
          />

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
                  id="revestimento"
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

      <Modal isOpen={!!displayArticle} onRequestClose={handleCloseArticle}>
        <ModalContainer>
          <ModalTitle>{displayArticle && displayArticle.title}</ModalTitle>
          {displayArticle && (
            <TextField
              disabled
              id="author"
              label="Autor"
              defaultValue={displayArticle && displayArticle.author}
              variant="filled"
            />
          )}
          {displayArticle &&
            steels.find(s => s.id === displayArticle.steel).name && (
              <TextField
                disabled
                id="steel"
                label="Aço"
                defaultValue={
                  displayArticle &&
                  steels.find(s => s.id === displayArticle.steel).name
                }
                variant="filled"
              />
            )}

          <ModalHorizontalContainer>
            {displayArticle && (
              <TextField
                disabled
                id="diffusivityValue"
                label="Valor da Difusividade"
                defaultValue={displayArticle && displayArticle.diffusivityValue}
                variant="filled"
              />
            )}
            {displayArticle && (
              <TextField
                disabled
                id="diffusivityType"
                label="Tipo da Difusividade"
                defaultValue={displayArticle && displayArticle.diffusivityType}
                variant="filled"
              />
            )}
          </ModalHorizontalContainer>

          <ModalHorizontalContainer>
            {displayArticle && (
              <TextField
                disabled
                id="coating"
                label="Revestimento"
                defaultValue={displayArticle && displayArticle.coating}
                variant="filled"
              />
            )}
            {displayArticle && (
              <TextField
                disabled
                id="chargeCondition"
                label="Condição de Carregamento"
                defaultValue={displayArticle && displayArticle.chargeCondition}
                variant="filled"
              />
            )}
          </ModalHorizontalContainer>

          <Filled>
            <MethodTitle>Métodos</MethodTitle>
            <MethodsList>
              <FormControlLabel
                control={
                  <Checkbox
                    checked={
                      displayArticle && displayArticle.calculationMethodology.tb
                    }
                    disabled
                  />
                }
                label="TB"
              />
              <FormControlLabel
                control={
                  <Checkbox
                    checked={
                      displayArticle && displayArticle.calculationMethodology.tl
                    }
                    disabled
                  />
                }
                label="TL"
              />
              <FormControlLabel
                control={
                  <Checkbox
                    checked={
                      displayArticle && displayArticle.calculationMethodology.ti
                    }
                    disabled
                  />
                }
                label="TI"
              />
            </MethodsList>
          </Filled>

          <Separator />
          <ModalActions>
            <Button
              style={{ color: 'white' }}
              variant="contained"
              color="primary"
              onClick={handleCloseArticle}
            >
              Fechar
            </Button>

            {displayArticle && displayArticle.link && (
              <Button
                style={{ color: 'white' }}
                variant="contained"
                color="primary"
                onClick={() => window.open(displayArticle.link)}
              >
                Abrir Artigo
              </Button>
            )}
          </ModalActions>
        </ModalContainer>
      </Modal>
    </>
  );
}
