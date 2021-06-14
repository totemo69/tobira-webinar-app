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
    'addBtn',
    'smallBtn',
    'mediumBtn',
    'fullwidth',
    'modalLoginButton',
    'BackButton',
    'NextButton',
    'UpDownButton',
    'connectedButton',
    "defaultButton",
    'addField',
    'noBoxShadow',
    'noMargin',
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
        font-size: 14px;
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
    props.type === 'default' &&
      css`
        color: #828282;
        border: 1px solid #828282;
        &:hover {
          color: #828282;
        }
        &:focus {
          color: #828282;
          outline: none;
          border-color: #828282;
        }
        margin: 0;
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
    props.addBtn &&
      css`
        margin: 0 0 10px 10px;
        width: 20%;
        background-color: transparent;
        color: #0e71eb;
        font-size: 15px;
        font-weight: 500;
        border-color: transparent;
        box-shadow: none;

        &:hover {
          border-color: transparent;
          color: #4678B5;

        }
        &:focus {
          border-color: transparent;
          color: #0e71eb;
          outline: none;
        }
      `
};

    ${ props =>
    props.smallBtn &&
      css`
        width: 35%;
        @media screen and (max-width: 480px) {
            width: 48%;
        }           
      `
};

    ${ props =>
    props.mediumBtn &&
      css`
        width: 388px;
      `
};

    ${ props =>
    props.fullwidth &&
      css`
        width: 100%;
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


  ${props => 
    props.chooseAdvance &&
      css`
      width: 140px;
      color: #0E71EB;
      margin-top: 10px;
      border: 1px solid #0E71EB;
      `
};

  ${props => 
    props.chooseStandard &&
      css`
      width: 140px;
      color: #0E71EB;
      margin-top: 50px;
      border: 1px solid #0E71EB;
      `
};

  ${props => 
    props.chooseProfessional &&
      css`
      width: 140px;
      color: #FFFFFF;
      margin-top: 50px;
      border: 1px solid #0E71EB;
      background: #0E71EB;
      `
};

  ${props => 
    props.noBoxShadow &&
      css`
      box-shadow: none;
      `
};
  ${props => 
    props.noMargin &&
      css`
      margin:0;
      `
};
`;
 
export default StyledButton;