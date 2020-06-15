import React, { useRef, useEffect, useState } from 'react';

import { useField } from '@unform/core';

import InputLabel from '@material-ui/core/InputLabel';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
import MenuItem from '@material-ui/core/MenuItem';

const ChargeCondition = ({ name = 'chargeCondition' }) => {
  const inputRef = useRef(null);
  const { fieldName, defaultValue, registerField } = useField(name); // error

  const [value, setValue] = useState(defaultValue || 'Potenciostático');

  useEffect(() => {
    registerField({
      name: fieldName,
      ref: inputRef.current,
      path: 'value',
      getValue: () => value,
      setValue,
    });
  }, [fieldName, registerField, value]);

  return (
    <FormControl variant="filled">
      <InputLabel id="demo-simple-select-filled-label">
        Condição de Carregamento
      </InputLabel>
      <Select
        labelId="demo-simple-select-filled-label"
        id="demo-simple-select-filled"
        inputRef={inputRef}
        value={value}
        onChange={e => setValue(e.target.value)}
      >
        <MenuItem value="Potenciostático">Potenciostático</MenuItem>
        <MenuItem value="Galvanostático">Galvanostático</MenuItem>
        <MenuItem value="Potencial de Circuito Aberto">
          Potencial de Circuito Aberto
        </MenuItem>
      </Select>
    </FormControl>
  );
};

export default ChargeCondition;
