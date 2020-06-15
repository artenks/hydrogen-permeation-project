import React, { useRef, useEffect, useState } from 'react';

import { useField } from '@unform/core';

import Checkbox from '@material-ui/core/Checkbox';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import { Filled, MethodTitle, MethodsList } from './styles';

function Method({ name, label }) {
  const inputRef = useRef(null);
  const { fieldName, defaultValue, registerField } = useField(name); // error

  const [value, setValue] = useState(defaultValue || false);

  useEffect(() => {
    registerField({
      name: fieldName,
      ref: inputRef.current,
      path: 'checked',
      getValue: () => value,
      setValue: newValue => {
        console.log(newValue.target.value);
      },
    });
  }, [fieldName, registerField, value]);

  return (
    <FormControlLabel
      label={label}
      control={
        <Checkbox
          checked={value}
          inputRef={inputRef}
          onChange={e => setValue(e.target.checked)}
        />
      }
    />
  );
}

function Methods() {
  return (
    <Filled>
      <MethodTitle>Métodos</MethodTitle>
      <MethodsList>
        <Method name="calculationMethodology.tb" label="TB" />
        <Method name="calculationMethodology.tl" label="TL" />
        <Method name="calculationMethodology.ti" label="TI" />
      </MethodsList>
    </Filled>
  );
}

export default Methods;
