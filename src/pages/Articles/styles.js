import styled from 'styled-components';

import { Form as BaseForm } from '@rocketseat/unform';

export const Container = styled.div`
  width: 100%;
  max-width: 960px;
  padding: 20px 30px 50px;
  margin: 0 auto;

  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const MethodTitle = styled.p`
  color: #777;
  font-size: 12px;
`;

export const Filters = styled.div`
  width: 100%;
  max-width: 600px;
  align-self: center;

  margin-top: 32px;

  display: flex;
  flex-direction: column;
`;

export const Title = styled.strong`
  margin: 30px 0;
  color: #333;
  font-size: 32px;
  text-align: center;
  font-weight: 500;
`;

export const Filled = styled.div`
  background: #e8e8e8;
  border-radius: 4px 4px 0 0;
  padding: 8px 12px 0;
  border-bottom: 1px solid #878787;
`;

export const Caption = styled.span`
  font-size: 16px;
  color: #666;
  text-align: center;
  margin-bottom: 24px;
`;

export const Subtitle = styled.p`
  margin: 30px 0;
  color: #555;
  font-size: 20px;
  font-weight: 500;

  margin-top: 0;
`;

export const Form = styled(BaseForm)`
  display: flex;
  flex-direction: column;

  div + div {
    margin-top: 16px;
  }
`;

export const MethodsList = styled.div`
  display: flex;
  align-items: center;

  label + label {
    margin-left: 8px;
  }

  label {
    display: flex;
    align-items: center;
    font-size: 16px;

    input {
      height: 16px;
      width: 16px;
      border-radius: 4px;
      border: 1px solid #666;
      appearance: none;
      margin-right: 8px;
      box-shadow: 0 1px 2px rgba(0, 0, 0, 0.05),
        inset 0px -15px 10px -12px rgba(0, 0, 0, 0.05),
        inset 15px 10px -12px rgba(255, 255, 255, 0.1);

      &:checked {
        content: '';
        background: red 1px 1px;
      }
    }
  }
`;

export const ModalTitle = styled.div`
  color: #333;
  font-size: 20px;
  font-weight: 500;
  text-align: center;
`;

export const ModalContainer = styled.div`
  display: flex;
  flex-direction: column;

  & > div + div {
    margin-top: 16px;
  }
`;

export const ModalHorizontalContainer = styled.div`
  display: flex;

  & > div {
    flex: 1;
  }

  div + div {
    margin-left: 16px;
  }
`;

export const ModalActions = styled.div`
  display: flex;
  justify-content: flex-end;

  button + button {
    margin-left: 16px;
  }
`;

export const Separator = styled.div`
  height: 1px;
  background: #ddd;
`;
