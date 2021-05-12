/***
 * 
 * 
 * TabPane
 * 
 * 
 */


 import style, { css } from 'styled-components';
 import { Tabs } from 'antd';

 const { TabPane } = Tabs;
 
 const StyledTabpane = style(TabPane).withConfig({
   shouldForwardProp: prop => ![].includes(prop),
 })`
 `;
 
 
 export default StyledTabpane;