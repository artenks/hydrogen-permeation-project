import styled from 'styled-components';

export const Filled = styled.div`
  background: #e8e8e8;
  border-radius: 4px 4px 0 0;
  padding: 8px 12px 0;
  border-bottom: 1px solid #878787;
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
export const MethodTitle = styled.p`
  color: #777;
  font-size: 12px;
`;
