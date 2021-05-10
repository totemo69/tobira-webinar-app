/**
 * 
 * Dropdown
 * 
 * */ 

import style, {css} from 'styled-components';
import {Dropdown, Icon} from 'antd';


const StyledDropdown = style(Dropdown).withConfig({
  shouldForwardProp: prop => ![].includes(prop),
})`
  float: right;
  
`;


export default StyledDropdown;