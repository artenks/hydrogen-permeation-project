import React, { useEffect, useRef } from 'react';
import TextFieldBase from '@material-ui/core/TextField';
import { useField } from '@unform/core';

// import { Container } from './styles';

function TextField({ name, label }) {
  const inputRef = useRef(null);
  const { fieldName, defaultValue, registerField } = useField(name); // error

  useEffect(() => {
    registerField({
      name: fieldName,
      ref: inputRef.current,
      path: 'value',
    });
  }, [fieldName, registerField]);

  return (
    <TextFieldBase
      inputRef={inputRef}
      defaultValue={defaultValue}
      variant="filled"
      // value={value}
      // onChange={onChange}
      label={label}
    />
  );
}

export default TextField;
