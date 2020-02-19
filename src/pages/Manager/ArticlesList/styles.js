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
  padding: 12px 16px;

  strong {
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
    color: #999;
    font-weight: 500;
    flex: 1;
  }

  aside {
    button {
      background: none;
      border: none;
      margin-left: 16px;
    }
  }

  &:hover {
    background: #f0f0f0;
  }
`;
