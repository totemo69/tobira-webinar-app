/**
 *
 * Button
 *
 */

 import PropTypes from 'prop-types';
 import styled, { css } from 'styled-components';
 import { Button } from 'antd';

 const StyledButton = styled(Button).withConfig({
     shouldForwardProp: prop => ![].includes(prop),
 })`
    margin: 0 auto 10px;
    width: 80%;
    height: 40px;
    background-color: #0e71eb;
    border-radius: 5px;
    border: 0px;
    color: #ffffff;
    &:hover {
      background-color: #4678b5;
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
`;
 
export default StyledButton;