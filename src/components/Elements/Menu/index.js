/**
 * 
 * Menu
 * 
 */

import style ,{css} from 'styled-components';
import { Menu } from 'antd';


const StyledMenu = style(Menu).withConfig({
  shouldForwardProp: prop => ![].includes(prop),
})`

`;

export default StyledMenu;
