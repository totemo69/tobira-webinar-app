/**
 *
 * Button
 *
 */

 import PropTypes from 'prop-types';
 import styled, { css } from 'styled-components';
 import { Button } from 'antd';

 const StyledButton = styled(Button).withConfig({
     shouldForwardProp: prop => ![
       'BtnSignUp'
     ].includes(prop),
 })`
    margin: 0 auto 10px;
    width: 80%;
    height: 40px;
    background-color: #0E71EB;
    border-radius: 5px;
    border: 0px;
    color: #ffffff;
    &:hover {
      background-color: #4678B5;
      color: #ffffff;
    }
    &:focus {
      background-color: #0e71eb;
      border: 2px solid #4678b5;
      color: #ffffff;
      outline: none;
    }
    
    ${props =>
      props.type === "disabled" &&
      css`
        background-color: #abc9ee;
        cursor: not-allowed;
    `};

    ${props =>
      props.BtnSignUp &&
      css`
      margin: 0 auto 10px;
      width: 441px;
      height: 40px;
      top: 31px;
      background-color: #0E71EB;
      border-radius: 5px;
      border: 0px;
      color: #ffffff;
      &:hover {
        background-color: #4678B5;
        color: #ffffff;
      }
      &:focus {
        background-color: #0e71eb;
        border: 2px solid #4678b5;
        color: #ffffff;
        outline: none;
      }
      
    `};
`;
 
export default StyledButton;