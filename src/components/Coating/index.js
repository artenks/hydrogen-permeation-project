import React, { useRef, useEffect, useState } from 'react';

import { useField } from '@unform/core';

import InputLabel from '@material-ui/core/InputLabel';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
import MenuItem from '@material-ui/core/MenuItem';

const Coating = ({ name = 'coating' }) => {
  const inputRef = useRef(null);
  const { fieldName, defaultValue, registerField } = useField(name); // error

  const [value, setValue] = useState(defaultValue || 'Paládio');

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
      <InputLabel id="revestimento-label">Revestimento</InputLabel>
      <Select
        labelId="revestimento-label"
        id="revestimento"
        inputRef={inputRef}
        value={value}
        onChange={e => setValue(e.target.value)}
      >
        <MenuItem value="Paládio">Paládio</MenuItem>
        <MenuItem value="Níquel">Níquel</MenuItem>
        <MenuItem value="Sem Revestimento">Sem Revestimento</MenuItem>
      </Select>
    </FormControl>
  );
};

export default Coating;
