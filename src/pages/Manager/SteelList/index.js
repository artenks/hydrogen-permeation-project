import React, { useState, useEffect, useCallback, useRef } from 'react';
import { MdEdit, MdDelete } from 'react-icons/md';
import Button from '@material-ui/core/Button';
import CircularProgress from '@material-ui/core/CircularProgress';
import {
  Container,
  Steel,
  ModalTitle,
  ModalContainer,
  ModalActionContainer,
  Form,
} from './styles';
import Modal from '../../../components/Modal';
import TextField from '../../../components/TextField';
import firebase from '../../../services/firebase';

export default function SteelList() {
  const addFormRef = useRef(null);
  const editFormRef = useRef(null);

  const [steels, setSteels] = useState([]);

  const [addModalOpenned, setAddModalOpenned] = useState(false);
  const [isAdditingSteel, setAdditingSteel] = useState(false);

  const [deleteModalOpenned, setDeleteModalOpenned] = useState(false);
  const [isDeletingSteel, setIsDeletingSteel] = useState(false);
  const [deletingSteel, setDeletingSteel] = useState('');

  const [editModalOpenned, setEditModalOpenned] = useState(false);
  const [isEditingSteel, setEditingSteel] = useState(false);
  const [editingSteelID, setEditingSteelID] = useState('');
  const [editingSteelData, setEditingSteelData] = useState({});

  const handleLoadSteels = useCallback(() => {
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
      }
    })();
  }, []);

  const handleAdd = useCallback(() => {
    setAddModalOpenned(true);
  }, []);

  const handleDelete = useCallback(({ id, name }) => {
    setDeletingSteel({ id, name });
    setDeleteModalOpenned(true);
  }, []);

  const handleEdit = useCallback(data => {
    setEditingSteelID(data.id);
    setEditingSteelData(data);
    setEditModalOpenned(true);
  }, []);

  const handleCloseAddModal = useCallback(() => {
    setAddModalOpenned(false);
  }, []);

  const handleCloseDeleteModal = useCallback(() => {
    setDeleteModalOpenned(false);
  }, []);

  const handleCloseEditModal = useCallback(() => {
    setEditModalOpenned(false);
  }, []);

  const handleSubmitAddSteel = useCallback(() => {
    addFormRef.current.submitForm();
  }, [addFormRef]);

  const handleSubmitEditSteel = useCallback(() => {
    editFormRef.current.submitForm();
  }, [editFormRef]);

  const handleAddSteel = useCallback(
    data => {
      (async () => {
        setAdditingSteel(true);

        await firebase
          .firestore()
          .collection('steels')
          .add(data);

        setAdditingSteel(false);

        handleCloseAddModal();
        handleLoadSteels();
      })();
    },
    [handleCloseAddModal, handleLoadSteels]
  );

  const handleEditSteel = useCallback(
    data => {
      (async () => {
        setEditingSteel(true);

        await firebase
          .firestore()
          .doc(`steels/${editingSteelID}`)
          .set(data);

        setEditingSteel(false);
        setEditingSteelID('');

        handleCloseEditModal();
        handleLoadSteels();
      })();
    },
    [editingSteelID, handleCloseEditModal, handleLoadSteels]
  );

  const handleDeleteSteel = useCallback(() => {
    (async () => {
      setIsDeletingSteel(true);

      await firebase
        .firestore()
        .doc(`steels/${deletingSteel.id}`)
        .delete();

      setIsDeletingSteel(false);
      setDeletingSteel('');

      handleCloseDeleteModal();
      handleLoadSteels();
    })();
  }, [deletingSteel.id, handleCloseDeleteModal, handleLoadSteels]);

  useEffect(() => {
    handleLoadSteels();
  }, [handleLoadSteels]);

  return (
    <>
      <Container>
        {steels.map(steel => (
          <Steel key={steel.id}>
            <strong>{steel.name}</strong>
            <aside>
              <button type="button" onClick={() => handleEdit(steel)}>
                <MdEdit size={20} color="#666" />
              </button>
              <button type="button" onClick={() => handleDelete(steel)}>
                <MdDelete size={20} color="#666" />
              </button>
            </aside>
          </Steel>
        ))}
      </Container>

      <Button
        style={{ color: 'white', marginBottom: 16, alignSelf: 'flex-end' }}
        variant="contained"
        color="primary"
        onClick={handleAdd}
      >
        Cadastrar Aço
      </Button>

      <Modal isOpen={addModalOpenned} onRequestClose={handleCloseAddModal}>
        <ModalContainer>
          <Form onSubmit={handleAddSteel} ref={addFormRef}>
            <TextField label="Nome do aço" name="name" />
          </Form>

          <ModalActionContainer>
            <Button
              style={{ color: 'white', marginTop: 16, alignSelf: 'flex-end' }}
              variant="contained"
              color="primary"
              onClick={handleCloseAddModal}
              disabled={isAdditingSteel}
            >
              Fechar
            </Button>
            <Button
              style={{ color: 'white', marginTop: 16, alignSelf: 'flex-end' }}
              variant="contained"
              color="secondary"
              onClick={handleSubmitAddSteel}
              disabled={isAdditingSteel}
            >
              {isAdditingSteel ? (
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
            onSubmit={handleEditSteel}
            initialData={editingSteelData}
          >
            <TextField label="Nome do aço" name="name" />
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
              onClick={handleSubmitEditSteel}
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
          <ModalTitle>Remover o aço: {deletingSteel.name}</ModalTitle>

          <ModalActionContainer>
            <Button
              style={{ color: 'white', marginTop: 16, alignSelf: 'flex-end' }}
              variant="contained"
              color="primary"
              onClick={handleCloseDeleteModal}
              disabled={isDeletingSteel}
            >
              Fechar
            </Button>
            <Button
              style={{ color: 'white', marginTop: 16, alignSelf: 'flex-end' }}
              variant="contained"
              color="secondary"
              onClick={handleDeleteSteel}
              disabled={isDeletingSteel}
            >
              {isDeletingSteel ? (
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
