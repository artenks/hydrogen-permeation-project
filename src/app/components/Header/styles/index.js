import styled from 'styled-components';

export const Wrapper = styled.div`
  position: fixed;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  top: 0;
  left: 0;
  right: 0;
  width: 100%;
  background: #333;
`;

export const Container = styled.div`
  width: 100%;
  padding-right: 10px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  max-width: 960px;
  margin: 0 auto;
  height: 48px;
`;

export const Logo = styled.div`
  cursor: pointer;
  padding: 0 20px;
  display: flex;
  height: 100%;
  align-items: center;

  @media (max-width: 630px) {
    strong {
      display: none;
    }
  }

  strong {
    margin-left: 20px;
    padding-left: 20px;
    border-left: 1px solid rgba(255, 255, 255, 0.3);

    font-size: 15px;
    font-weight: 500;
    color: #fff;
  }

  &:hover {
    background: rgba(255, 255, 255, 0.1);

    span {
      color: #fff;
    }

    svg {
      fill: #fff;
    }
  }
`;

export const InfoActions = styled.div`
  display: flex;
  align-items: center;
`;

export const InfoAction = styled.div`
  cursor: pointer;
  display: flex;
  height: 48px;
  padding: 0 10px;
  align-items: center;

  svg {
    margin-right: 8px;
  }

  span {
    user-select: none;
    color: #999;
  }

  &:hover {
    background: rgba(255, 255, 255, 0.1);

    span {
      color: #fff;
    }

    svg {
      fill: #fff;
    }
  }
`;
