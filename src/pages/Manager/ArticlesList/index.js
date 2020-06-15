import React, { useState, useEffect, useCallback, useRef } from 'react';
import { MdEdit, MdDelete } from 'react-icons/md';
import Button from '@material-ui/core/Button';
import CircularProgress from '@material-ui/core/CircularProgress';
import TextField from '../../../components/TextField';
import ChargeCondition from '../../../components/ChargeCondition';
import Methods from '../../../components/Methods';
import Coating from '../../../components/Coating';
import DifusivityType from '../../../components/DifusivityType';
import Steels from '../../../components/Steels';

import {
  Container,
  Article,
  ModalTitle,
  ModalActionContainer,
  ModalContainer,
  Form,
} from './styles';

import Modal from '../../../components/Modal';
import firebase from '../../../services/firebase';

export default function SteelList() {
  const addFormRef = useRef(null);
  const editFormRef = useRef(null);

  const [articles, setArticles] = useState([]);

  const [addModalOpenned, setAddModalOpenned] = useState(false);
  const [isAdditingArticle, setIsAdditingArticle] = useState(false);

  const [editModalOpenned, setEditModalOpenned] = useState(false);
  const [isEditingSteel, setIsEditingArticle] = useState(false);
  const [editingSteelID, setEditingArticleID] = useState('');
  const [editingArticleData, setEditingArticleData] = useState({});

  const [deleteModalOpenned, setDeleteModalOpenned] = useState(false);
  const [isDeletingArticle, setIsDeletingArticle] = useState(false);
  const [deletingArticle, setDeletingArticle] = useState('');

  const handleAdd = useCallback(() => {
    setAddModalOpenned(true);
  }, []);

  const handleEdit = useCallback(data => {
    console.log({ data });

    setEditingArticleID(data.id);
    setEditingArticleData(data);
    setEditModalOpenned(true);
  }, []);

  const handleDelete = useCallback(({ id, title }) => {
    setDeletingArticle({ id, title });
    setDeleteModalOpenned(true);
  }, []);

  const handleSubmitAddArticle = useCallback(() => {
    addFormRef.current.submitForm();
  }, [addFormRef]);

  const handleSubmitEditArticle = useCallback(() => {
    editFormRef.current.submitForm();
  }, [editFormRef]);

  const handleLoadArticles = useCallback(() => {
    (async () => {
      const steelResponse = await firebase
        .firestore()
        .collection('articles')
        .orderBy('title')
        .get();

      if (!steelResponse.empty) {
        setArticles(
          steelResponse.docs.map(doc => ({
            id: doc.id,
            ...doc.data(),
          }))
        );
      }
    })();
  }, []);

  const handleCloseAddModal = useCallback(() => {
    setAddModalOpenned(false);
  }, []);

  const handleCloseEditModal = useCallback(() => {
    setEditModalOpenned(false);
  }, []);

  const handleCloseDeleteModal = useCallback(() => {
    setDeleteModalOpenned(false);
  }, []);

  const handleAddArticle = useCallback(
    ({ diffusivityValue, ...rest }) => {
      (async () => {
        setIsAdditingArticle(true);

        await firebase
          .firestore()
          .collection('articles')
          .add({
            diffusivityValue: parseFloat(diffusivityValue || 0),
            ...rest,
          });

        setIsAdditingArticle(false);

        handleCloseAddModal();
        handleLoadArticles();
      })();
    },
    [handleCloseAddModal, handleLoadArticles]
  );

  const handleEditArticle = useCallback(
    ({ diffusivityValue, ...rest }) => {
      (async () => {
        setIsEditingArticle(true);

        await firebase
          .firestore()
          .doc(`steels/${editingSteelID}`)
          .set({
            diffusivityValue: parseFloat(diffusivityValue || 0),
            ...rest,
          });

        setIsEditingArticle(false);
        setEditingArticleID('');

        handleCloseEditModal();
        handleLoadArticles();
      })();
    },
    [editingSteelID, handleCloseEditModal, handleLoadArticles]
  );

  const handleDeleteArticle = useCallback(() => {
    (async () => {
      setIsDeletingArticle(true);

      await firebase
        .firestore()
        .doc(`articles/${deletingArticle.id}`)
        .delete();

      setIsDeletingArticle(false);
      setDeletingArticle('');

      handleCloseDeleteModal();
      handleLoadArticles();
    })();
  }, [deletingArticle.id, handleCloseDeleteModal, handleLoadArticles]);

  useEffect(() => {
    handleLoadArticles();
  }, [handleLoadArticles]);

  return (
    <>
      <Container>
        {articles.map(article => (
          <Article key={article.id}>
            <strong>{article.title}</strong>
            <aside>
              <button type="button" onClick={() => handleEdit(article)}>
                <MdEdit size={20} color="#666" />
              </button>
              <button type="button" onClick={() => handleDelete(article)}>
                <MdDelete size={20} color="#666" />
              </button>
            </aside>
          </Article>
        ))}
      </Container>
      <Button
        style={{ color: 'white', marginBottom: 16, alignSelf: 'flex-end' }}
        variant="contained"
        color="primary"
        onClick={handleAdd}
      >
        Cadastrar Artigo
      </Button>

      <Modal isOpen={addModalOpenned} onRequestClose={handleCloseAddModal}>
        <ModalContainer>
          <Form ref={addFormRef} onSubmit={handleAddArticle}>
            <TextField label="Autor" name="author" />

            <TextField label="Título" name="title" />

            <TextField label="Link" name="link" />

            <Methods />

            <ChargeCondition />

            <Coating />

            <DifusivityType />

            <TextField label="Valor da Difusividade" name="diffusivityValue" />

            <Steels />
          </Form>

          <ModalActionContainer>
            <Button
              style={{ color: 'white', marginTop: 16, alignSelf: 'flex-end' }}
              variant="contained"
              color="primary"
              onClick={handleCloseAddModal}
              disabled={isAdditingArticle}
            >
              Fechar
            </Button>
            <Button
              style={{ color: 'white', marginTop: 16, alignSelf: 'flex-end' }}
              variant="contained"
              color="secondary"
              onClick={handleSubmitAddArticle}
              disabled={isAdditingArticle}
            >
              {isAdditingArticle ? (
                <CircularProgress size={25} color="primary" />
              ) : (
                'Cadastrar'
              )}
            </Button>
          </ModalActionContainer>
        </ModalContainer>
      </Modal>

      <Modal isOpen={editModalOpenned} onRequestClose={handleCloseEditModal}>
        <ModalContainer>
          <Form
            ref={editFormRef}
            onSubmit={handleEditArticle}
            initialData={editingArticleData}
          >
            <TextField label="Autor" name="author" />

            <TextField label="Título" name="title" />

            <TextField label="Link" name="link" />

            <Methods />

            <ChargeCondition />

            <Coating />

            <DifusivityType />

            <TextField label="Valor da Difusividade" name="diffusivityValue" />

            <Steels />
          </Form>

          <ModalActionContainer>
            <Button
              style={{ color: 'white', marginTop: 16, alignSelf: 'flex-end' }}
              variant="contained"
              color="primary"
              onClick={handleCloseEditModal}
              disabled={isEditingSteel}
            >
              Fechar
            </Button>
            <Button
              style={{ color: 'white', marginTop: 16, alignSelf: 'flex-end' }}
              variant="contained"
              color="secondary"
              onClick={handleSubmitEditArticle}
              disabled={isEditingSteel}
            >
              {isEditingSteel ? (
                <CircularProgress size={25} color="primary" />
              ) : (
                'Atualizar'
              )}
            </Button>
          </ModalActionContainer>
        </ModalContainer>
      </Modal>

      <Modal
        isOpen={deleteModalOpenned}
        onRequestClose={handleCloseDeleteModal}
      >
        <ModalContainer>
          <ModalTitle>Remover o artigo: {deletingArticle.title}</ModalTitle>

          <ModalActionContainer>
            <Button
              style={{ color: 'white', marginTop: 16, alignSelf: 'flex-end' }}
              variant="contained"
              color="primary"
              onClick={handleCloseDeleteModal}
              disabled={isDeletingArticle}
            >
              Fechar
            </Button>
            <Button
              style={{ color: 'white', marginTop: 16, alignSelf: 'flex-end' }}
              variant="contained"
              color="secondary"
              onClick={handleDeleteArticle}
              disabled={isDeletingArticle}
            >
              {isDeletingArticle ? (
                <CircularProgress size={25} color="primary" />
              ) : (
                'Remover'
              )}
            </Button>
          </ModalActionContainer>
        </ModalContainer>
      </Modal>
    </>
  );
}
