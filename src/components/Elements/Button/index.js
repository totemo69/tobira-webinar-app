/**
 *
 * Button
 *
 */

import styled, { css } from 'styled-components';
import { Button } from 'antd';

const StyledButton = styled(Button).withConfig({
  shouldForwardProp: prop => ![
    'marginTop',
    'TermsOfService',
    'modalLoginButton',
    'BackButton',
    'NextButton',
  ].includes(prop),
})`
    margin: 0 auto 10px;
    width: 80%;
    height: 40px;
    border-radius: 8px;
    font-size: 12px;
    color: #ffffff;
    letter-spacing: 0.24px;
    box-shadow: 0px 2px 4px #00000029;
    
    ${ props =>
    props.type === 'primary' &&
      css`
        background-color: #0e71eb;
        &:hover {
          background-color: #4678B5;
          color: #ffffff;
        }
        &:focus {
          background-color: #0e71eb;
          color: #ffffff;
          outline: none;
        }
      `
};

    ${ props =>
    props.marginTop &&
      css`
        margin-top: 1.75rem;
      `
};

  ${ props =>
    props.TermsOfService &&
      css`
        width: 387.5px;
        height: 40px;
        display: flex;
        justify-content: center;
        align-items: center;
        margin-top: 86.4px;
        
      `
  };

  ${props => 
    props.modalLoginButton &&
    css`
      width: 279px;
      height: 40px;
      margin-left: auto;
      margin-rigth: auto;
      margin-top: 40px;
      display: block;
      background-color: #0e71eb;
        &:hover {
          background-color: #4678B5;
          color: #ffffff;
        }
        &:focus {
          background-color: #0e71eb;
          color: #ffffff;
          outline: none;
        }
    `
  };

  ${props => 
    props.BackButton &&
    css`
      width: 140px;
      color: #0E71EB;
      float: right;
      margin-top: 55px;
    `
  }

  ${props => 
    props.NextButton &&
    css`
      width: 140px;
      float: right;
      margin-left: 30.52px;
      margin-top: 55px;
      
    `
  }
`;
 
export default StyledButton;