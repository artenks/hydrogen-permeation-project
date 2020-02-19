import React, { useState, useEffect, useCallback } from 'react';
import TextField from '@material-ui/core/TextField';
import { MdEdit, MdDelete } from 'react-icons/md';
import Button from '@material-ui/core/Button';
import CircularProgress from '@material-ui/core/CircularProgress';
import {
  Container,
  Steel,
  ModalTitle,
  ModalContainer,
  ModalActionContainer,
} from './styles';
import Modal from '../../../components/Modal';
import firebase from '../../../services/firebase';

export default function SteelList() {
  const [steels, setSteels] = useState([]);

  const [addModalOpenned, setAddModalOpenned] = useState(false);
  const [isAdditingSteel, setAdditingSteel] = useState(false);
  const [addedSteelName, setAddedSteelName] = useState('');

  const [deleteModalOpenned, setDeleteModalOpenned] = useState(false);
  const [isDeletingSteel, setDeletingSteel] = useState(false);
  const [deletingSteel, setDeletingSeel] = useState('');

  const [editModalOpenned, setEditModalOpenned] = useState(false);
  const [isEditingSteel, setEditingSteel] = useState(false);
  const [editingSteelName, setEditingSteelName] = useState('');
  const [editingSteelID, setEditingSteelID] = useState('');

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
    setDeletingSeel({ id, name });
    setDeleteModalOpenned(true);
  }, []);

  const handleEdit = useCallback(({ id, name }) => {
    setEditingSteelID(id);
    setEditingSteelName(name);
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

  const handleAddSteel = useCallback(() => {
    (async () => {
      setAdditingSteel(true);

      const addResponse = await firebase
        .firestore()
        .collection('steels')
        .add({
          name: addedSteelName,
        });

      // eslint-disable-next-line no-console
      console.log(addResponse);

      setAdditingSteel(false);
      setAddedSteelName('');

      handleCloseAddModal();
      handleLoadSteels();
    })();
  }, [addedSteelName, handleCloseAddModal, handleLoadSteels]);

  const handleDeleteSteel = useCallback(() => {
    (async () => {
      setDeletingSteel(true);

      await firebase
        .firestore()
        .doc(`steels/${deletingSteel.id}`)
        .delete();

      setDeletingSteel(false);
      setDeletingSeel('');

      handleCloseDeleteModal();
      handleLoadSteels();
    })();
  }, [deletingSteel.id, handleCloseDeleteModal, handleLoadSteels]);

  const handleEditSteel = useCallback(() => {
    (async () => {
      setEditingSteel(true);

      const editResponse = await firebase
        .firestore()
        .doc(`steels/${editingSteelID}`)
        .set({
          name: editingSteelName,
        });

      // eslint-disable-next-line no-console
      console.log(editResponse);

      setEditingSteel(false);
      setEditingSteelID('');
      setEditingSteelName('');

      handleCloseEditModal();
      handleLoadSteels();
    })();
  }, [
    editingSteelID,
    editingSteelName,
    handleCloseEditModal,
    handleLoadSteels,
  ]);

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
          <TextField
            value={addedSteelName}
            onChange={e => setAddedSteelName(e.target.value)}
            label="Nome do aço"
            variant="filled"
          />

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
              onClick={handleAddSteel}
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

      <Modal isOpen={editModalOpenned} onRequestClose={handleCloseEditModal}>
        <ModalContainer>
          <TextField
            value={editingSteelName}
            onChange={e => setEditingSteelName(e.target.value)}
            label="Nome do aço"
            variant="filled"
          />

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
              onClick={handleEditSteel}
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
    </>
  );
}
