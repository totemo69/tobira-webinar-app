/**
 * 
 * TimePicker
 * 
 */

import style, {css} from 'styled-components';
import {TimePicker} from 'antd';

const StyledTimePicker = style(TimePicker).withConfig({
  shouldForwardProp: prop => ![].includes(prop)
})`
  margin: 0 auto;
  width: 100%;
  height: 40px;
  background-color: #ffffff;
  border-radius: 8px;
  border: 1px solid #b0b0b0;
  font-size: 12px;
    
  &:hover {
      border-color: #0e71eb;
  }
  
  &:focus {
      border: 1px solid #0e71eb;
      box-shadow: 0px 1px 1px #0E71EB;
  }

  ${props =>
    props.error &&
      css`
          border: 1px solid #ff0033;
  `};
`;


export default StyledTimePicker;