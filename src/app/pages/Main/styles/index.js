import styled from 'styled-components';

export const Container = styled.div`
  width: 100%;
  max-width: 960px;
  padding: 20px 50px 0;
  margin: 0 auto;
  padding-top: 80px;

  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const Title = styled.strong`
  margin: 30px 0;
  font-size: 32px;
  text-align: center;
  font-weight: 500;
`;

export const Caption = styled.span`
  font-size: 16px;
  text-align: center;
`;

export const InformationList = styled.ul`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
`;

export const Information = styled.li`
  display: flex;
  margin: 50px 10px 0;
  flex-direction: column;
  align-items: center;

  @media (min-width: 700px) {
    flex: 1;
  }

  strong {
    text-align: center;
    font-weight: 500;
    color: #333;
    font-size: 18px;
    margin: 10px 0;
  }

  span {
    font-size: 14px;
    color: #666;
    text-align: center;
  }
`;
