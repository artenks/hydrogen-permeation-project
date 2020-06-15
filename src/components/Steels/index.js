import React, { useRef, useEffect, useState } from 'react';

import { useField } from '@unform/core';

import InputLabel from '@material-ui/core/InputLabel';
import FilledInput from '@material-ui/core/FilledInput';
import InputAdornment from '@material-ui/core/InputAdornment';
import CircularProgress from '@material-ui/core/CircularProgress';
import MenuItem from '@material-ui/core/MenuItem';
import Select from '@material-ui/core/Select';
import FormControl from '@material-ui/core/FormControl';

import firebase from '../../services/firebase';

function Steels({ name = 'steel' }) {
  const inputRef = useRef(null);
  const { fieldName, defaultValue, registerField } = useField(name); // error

  const [value, setValue] = useState(defaultValue || '');
  const [isLoadingSteels, setLoadingSteels] = useState(true);
  const [steels, setSteels] = useState([]);

  useEffect(() => {
    registerField({
      name: fieldName,
      ref: inputRef.current,
      path: 'value',
      getValue: () => value,
      setValue,
    });
  }, [fieldName, registerField, value]);

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

  return (
    <>
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
            id="acos"
            inputRef={inputRef}
            value={value}
            onChange={e => setValue(e.target.value)}
          >
            {steels.map(steel => (
              <MenuItem key={steel.id} value={steel.id}>
                {steel.name}
              </MenuItem>
            ))}
          </Select>
        </FormControl>
      )}
    </>
  );
}

export default Steels;
