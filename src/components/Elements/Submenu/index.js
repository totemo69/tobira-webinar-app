/**
 * 
 * Submenu
 * 
 */


import style , {css} from 'styled-components';
import { Menu } from 'antd';

const { SubMenu } = Menu;

const StyleSubMenu = style(SubMenu).withConfig({
  shouldForwardProp: prop => ![].includes(prop),
})`

`;


export default StyleSubMenu;