/***
 * 
 * 
 * Tabs
 * 
 * 
 */


 import style, { css } from 'styled-components';
 import { Tabs } from 'antd';

 const { TabPane } = Tabs;
 
 const StyledTabpane = style(TabPane).withConfig({
   shouldForwardProp: prop => ![].includes(prop),
 })`
    font-size: 14px;
    font-size: 600;
    color: #0e71eb;
    letter-spacing: 0.20px;
    line-height: 0.21px

    &:hover{
        opacity: 1;
        color: #0e71eb;
    }
 `;
 
 
 export default StyledTabpane;