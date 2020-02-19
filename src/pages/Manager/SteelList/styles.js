import styled from 'styled-components';

import Scrollbar from 'react-perfect-scrollbar';

export const Container = styled(Scrollbar)`
  display: flex;
  flex-direction: column;

  width: 100%;
  height: 400px;

  div + div {
    margin-bottom: 8px;
  }
`;

export const Steel = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;

  border-radius: 4px;
  margin-bottom: 8px;
  padding: 12px 16px;

  strong {
    color: #999;
    font-weight: 500;
  }

  aside {
    button {
      background: none;
      border: none;
    }

    button + button {
      margin-left: 16px;
    }
  }

  &:hover {
    background: #f0f0f0;
  }
`;

export const ModalTitle = styled.div`
  color: #333;
  font-size: 20px;
  font-weight: 500;
`;

export const ModalContainer = styled.div`
  display: flex;
  flex-direction: column;

  div + div {
    margin-top: 16px;
  }
`;

export const ModalActionContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-end;

  button + button {
    margin-left: 8px;
  }
`;
