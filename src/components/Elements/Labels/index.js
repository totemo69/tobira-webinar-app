import styled, { css } from 'styled-components';

const StyledLabels = styled.label`
  margin-bottom: 0.25rem;
  width: 80%;
  font-size: 12px;
  font-weight: 500;
  color: #4e4e4e;
  letter-spacing: 0.24px;
  display: inline-flex;
  justify-content: flex-start;

  @media screen and (max-width: 768px) {
    display: inline-flex;
    justify-content: flex-start;
    width: 100%;
    margin-top: 0.5rem;
  }

  ${(props) =>
    props.asterisk &&
    css`
      &::after {
        content: '*';
        font-size: 12px;
        color: #ff0033;
      }
    `}

  ${(props) =>
    props.light &&
    css`
      font-size: 10px;
      font-weight: 400;
      color: #b0b0b0;
      letter-spacing: 0.2px;
      line-height: 0.16px;
    `}

    ${(props) =>
    props.center &&
    css`
      margin: 0 auto;
    `}

    ${(props) =>
    props.textCenter &&
    css`
      text-align: center;
    `}

    ${(props) =>
    props.textLg &&
    css`
      font-size: 15px;
    `}

    ${(props) =>
    props.textBlue &&
    css`
      color: #0e71eb;
    `}

    ${(props) =>
    props.bold &&
    css`
      font-weight: 600;
    `}
  
    ${(props) =>
    props.marginBottom &&
    css`
      margin-bottom: 1rem;
    `}    
  
    ${(props) =>
    props.marginTop &&
    css`
      margin-top: 1rem;
    `}

    ${(props) =>
    props.fullWidth &&
    css`
      width: auto;
    `}
`;

export default StyledLabels;
