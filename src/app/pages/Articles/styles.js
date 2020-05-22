import styled from 'styled-components';

import { Form as BaseForm, Input as BaseInput } from '@rocketseat/unform';

export const Container = styled.div`
  width: 100%;
  max-width: 960px;
  padding: 20px 30px 50px;
  margin: 0 auto;
  padding-top: 80px;

  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const Filters = styled.div`
  width: 100%;
  max-width: 600px;

  padding-top: 30px;
`;

export const Title = styled.strong`
  margin: 30px 0;
  color: #333;
  font-size: 20px;
  font-weight: 500;
`;

export const Form = styled(BaseForm)`
  display: flex;
  flex-direction: column;

  margin-top: 20px;

  input + input {
    margin-top: 15px;
  }
`;

export const Input = styled(BaseInput)`
  border-radius: 4px;
  border: 1px solid #ddd;
  padding: 12px 16px;
`;
