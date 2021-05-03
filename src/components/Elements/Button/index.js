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
`;
 
export default StyledButton;