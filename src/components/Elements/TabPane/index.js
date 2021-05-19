/***
 * 
 * 
 * TabPane
 * 
 * 
 */


import styled from 'styled-components';
import { Tabs } from 'antd';

const { TabPane } = Tabs;
 
const StyledTabpane = styled(TabPane).withConfig({
  shouldForwardProp: prop => ![].includes(prop),
})`
 `;
 
 
export default StyledTabpane;