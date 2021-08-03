/**
 *
 * Button
 *
 */

import styled, { css } from 'styled-components';
import { Button } from 'antd';

const StyledButton = styled(Button).withConfig({
  shouldForwardProp: (prop) =>
    ![
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
      'defaultButton',
      'addField',
      'noBoxShadow',
      'noMargin',
      'marginRight',
      'btnTransferFund',
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

  ${(props) =>
    props.type === 'primary' &&
    css`
      background-color: #0e71eb;
      font-size: 14px;
      &:hover {
        background-color: #4678b5;
        color: #ffffff;
      }
      &:focus {
        background-color: #0e71eb;
        color: #ffffff;
        outline: none;
      }
    `};

  ${(props) =>
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
    `};

  ${(props) =>
    props.type === 'link' &&
    css`
      color: var(--linkColor);
      margin: 0;
      font-weight: bold;
    `};

  ${(props) =>
    props.size === 'large' &&
    css`
      height: 3em;
      @media screen and (max-width: 480px) {
        min-height: 3em !important;
        height: auto !important ;
        white-space: unset !important;
      }
    `};

  ${(props) =>
    props.marginTop &&
    css`
      margin-top: 1.75rem;
    `};

  ${(props) =>
    props.marginTopMedium &&
    css`
      margin-top: 2.25rem;
    `};

  ${(props) =>
    props.marginTopLarge &&
    css`
      margin-top: 3.5rem;
    `};

  ${(props) =>
    props.marginBottom &&
    css`
      margin-bottom: 1rem;
    `};

  ${(props) =>
    props.marginBottomLarge &&
    css`
      margin-bottom: 2rem;
    `};

  ${(props) =>
    props.marginLeftAuto &&
    css`
      margin-right: 0;
      margin-left: auto;
    `};

  ${(props) =>
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
        color: #4678b5;
      }
      &:focus {
        border-color: transparent;
        color: #0e71eb;
        outline: none;
      }
    `};

  ${(props) =>
    props.smallBtn &&
    css`
      width: 35%;
      @media screen and (max-width: 480px) {
        width: 48%;
        margin-top: 10px;
      }
    `};

  ${(props) =>
    props.mediumBtn &&
    css`
      width: 388px;
    `};

  ${(props) =>
    props.fullwidth &&
    css`
      width: 100%;
    `};

  ${(props) =>
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
        background-color: #4678b5;
        color: #ffffff;
      }
      &:focus {
        background-color: #0e71eb;
        color: #ffffff;
        outline: none;
      }
    `};

  ${(props) =>
    props.BackButton &&
    css`
      width: 140px;
      color: #0e71eb;
      float: right;
      margin-top: 55px;
    `}

  ${(props) =>
    props.NextButton &&
    css`
      width: 140px;
      float: right;
      margin-left: 30.52px;
      margin-top: 55px;
    `};

  ${(props) =>
    props.BackButton &&
    css`
      width: 140px;
      float: right;
      margin-left: 30.52px;
      margin-top: 55px;
    `};

  ${(props) =>
    props.connectedButton &&
    css`
      width: 140px;
      color: #4caf50;
      border: 1px solid #4caf50;
    `};

  ${(props) =>
    props.defaultButton &&
    css`
      width: 140px;
      color: #4678b5;
      border: 1px solid #4678b5;
      margin-left: 20px;
    `};

  ${(props) =>
    props.UpDownButton &&
    css`
      background: #4678b5;
      width: 50px;
      margin-top: 20px;
    `};

  ${(props) =>
    props.addField &&
    css`
      color: #0e71eb;
      width: 20%;
      text-align: left;
      font-size: medium;
      border: none;
      box-shadow: none;
      margin-top: 20px;
    `};

  ${(props) =>
    props.chooseAdvance &&
    css`
      width: 140px;
      color: #0e71eb;
      margin-top: 10px;
      border: 1px solid #0e71eb;
    `};

  ${(props) =>
    props.chooseStandard &&
    css`
      width: 140px;
      color: #0e71eb;
      margin-top: 50px;
      border: 1px solid #0e71eb;
    `};

  ${(props) =>
    props.chooseProfessional &&
    css`
      width: 140px;
      color: #ffffff;
      margin-top: 50px;
      border: 1px solid #0e71eb;
      background: #0e71eb;
    `};

  ${(props) =>
    props.noBoxShadow &&
    css`
      box-shadow: none;
    `};
  ${(props) =>
    props.noMargin &&
    css`
      margin: 0;
    `};
  ${(props) =>
    props.marginRight &&
    css`
      margin: 0 20px;

      @media screen and (max-width: 480px) {
        margin: 0 12px;
      }
    `};

  ${(props) =>
    props.btnTransferFund &&
    css`
      height: 50px;
      width: 50%;

      @media screen and (max-width: 480px) {
        height: 50px;
        width: 96%;
      }
    `};
`;

export default StyledButton;
