import React, { useRef, useEffect, useState } from 'react';

import { useField } from '@unform/core';

import InputLabel from '@material-ui/core/InputLabel';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
import MenuItem from '@material-ui/core/MenuItem';

const DifusivityType = ({ name = 'difusivityType' }) => {
  const inputRef = useRef(null);
  const { fieldName, defaultValue, registerField } = useField(name); // error

  const [value, setValue] = useState(defaultValue || 'Aparente');

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
      <InputLabel id="tipo-label">Tipo da Difusividade</InputLabel>
      <Select
        labelId="tipo-label"
        id="tipo"
        inputRef={inputRef}
        value={value}
        onChange={e => setValue(e.target.value)}
      >
        <MenuItem value="Aparente">Aparente</MenuItem>
        <MenuItem value="Efetiva">Efetiva</MenuItem>
      </Select>
    </FormControl>
  );
};

export default DifusivityType;
