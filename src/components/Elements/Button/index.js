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
    'marginTopMedium',
    'marginTopLarge',
    'marginBottom',
    'marginBottomLarge',
    'marginLeftAuto',
    'smallBtn',
    'mediumBtn',
    'modalLoginButton',
    'BackButton',
    'NextButton',
    'UpDownButton',
    'connectedButton',
    "defaultButton",
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
    props.marginTopMedium &&
      css`
        margin-top: 2.25rem;
      `
};

    ${ props =>
    props.marginTopLarge &&
      css`
        margin-top: 3.5rem;
      `
};

    ${ props =>
    props.marginBottom &&
      css`
        margin-bottom: 1rem;
      `
};

    ${ props =>
    props.marginBottomLarge &&
      css`
        margin-bottom: 2rem;
      `
};

    ${ props =>
    props.marginLeftAuto &&
      css`
        margin-right: 0;
        margin-left: auto;
      `
};

    ${ props =>
    props.smallBtn &&
      css`
        width: 35%;
      `
};

    ${ props =>
    props.mediumBtn &&
      css`
        width: 388px;
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
};

  ${props => 
    props.BackButton &&
      css`
        width: 140px;
        float: right;
        margin-left: 30.52px;
        margin-top: 55px;
        
      `
};

  ${props => 
    props.connectedButton &&
      css`
      width: 140px;
      color: #4CAF50;
      border: 1px solid #4CAF50;

        
      `
};

  ${props => 
    props.defaultButton &&
      css`
      width: 140px;
      color: #4678B5;
      border: 1px solid #4678B5;
      margin-left: 20px;
        
      `
};



  ${props => 
    props.UpDownButton && 
    css`
      background: #4678B5;
      width: 50px;
      margin-top: 20px;
    `
};

 ${props => 
    props.addField && 
    css`
      color: #0E71EB;
      width: 20%;
      text-align: left;
      font-size: medium;
      border: none;
      box-shadow: none;
      margin-top: 20px;
    `
};
`;
 
export default StyledButton;