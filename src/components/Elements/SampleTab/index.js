/**
 * 
 * 
 * Tab
 *  
 * */ 

import style, {css} from 'styled-components';
import { Tabs } from 'antd';

const { TabPane } = Tabs;

const StyledTab = style(Tabs)`

.ant-tabs-nav {
    margin: 0;
  }
  ${props =>
    props.$centered &&
    css`
      .ant-tabs-tab {
        margin: 0 16px;
      }
    `};
`;

const StyledTabPane = style(TabPane)`

`;


export default StyledTabPane;