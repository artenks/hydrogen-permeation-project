import styled from 'styled-components';

export const Container = styled.div`
  width: 100%;
  max-width: 960px;
  padding: 20px 30px 50px;
  margin: 0 auto;

  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const Title = styled.strong`
  margin: 30px 0;
  color: #333;
  font-size: 32px;
  text-align: center;
  font-weight: 500;
`;

export const Subtitle = styled.p`
  margin: 30px 0;
  color: #555;
  font-size: 20px;
  font-weight: 500;

  margin-top: 0;
`;

export const Caption = styled.span`
  font-size: 16px;
  color: #666;
  text-align: center;
`;

export const InformationList = styled.ul`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  margin: 50px 0 30px;

  @media (max-width: 700px) {
    li + li {
      margin-top: 30px;
    }
  }
`;

export const Information = styled.li`
  display: flex;
  margin: 0px 10px;
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
    font-size: 16px;
    color: #666;
    line-height: 20px;
    text-align: center;
  }
`;

export const ParagraphContainer = styled.div`
  flex: 1;

  p {
    text-align: justify;
  }

  p + p {
    margin-top: 15px;
  }
`;

export const Paragraph = styled.p`
  font-size: 16px;
  text-align: center;
  color: #666;
  line-height: 20px;
`;

export const Observation = styled.p`
  font-size: 14px;
  text-align: center;
  color: #777;
  line-height: 20px;
`;

export const Image = styled.img`
  max-width: ${props => (props.size ? `${props.size}px` : '450px')};
  margin: ${props => (props.margin ? `${props.margin}px` : '0')} 0 !important;
  width: 100%;
  margin: 0 auto;
`;
