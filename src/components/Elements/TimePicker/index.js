/***
 * 
 * TimePicker
 * 
 */


import style, {css} from 'styled-components';
import {TimePicker} from 'antd';

const StyleTimePicker = style(TimePicker).withConfig({
  shouldForwardProp: prop => ![].includes(prop)
})`

  border-radius: 8px;
  width: 30rem;

`;


export default StyleTimePicker;