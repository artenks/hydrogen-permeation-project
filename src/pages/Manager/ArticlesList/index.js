import React, { useState, useEffect, useCallback } from 'react';
import { MdEdit, MdDelete } from 'react-icons/md';
import Button from '@material-ui/core/Button';
import { Container, Steel } from './styles';

import firebase from '../../../services/firebase';

export default function SteelList() {
  const [steels, setSteels] = useState([]);

  const handleAdd = useCallback(() => {
    console.log('');
  }, []);

  useEffect(() => {
    (async () => {
      const steelResponse = await firebase
        .firestore()
        .collection('articles')
        .orderBy('title')
        .get();

      if (!steelResponse.empty) {
        setSteels(
          steelResponse.docs.map(doc => ({
            id: doc.id,
            title: doc.data().title,
          }))
        );
      }
    })();
  }, []);

  return (
    <>
      <Container>
        {steels.map(steel => (
          <Steel key={steel.id}>
            <strong>{steel.title}</strong>
            <aside>
              <button type="button">
                <MdEdit size={20} color="#666" />
              </button>
              <button type="button">
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
        Cadastrar Artigo
      </Button>
    </>
  );
}
