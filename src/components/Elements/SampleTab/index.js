/**
 * 
 * 
 * Tab
 *  
 * */ 

import style, {css} from 'styled-components'
import { Tabs } from 'antd'

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

const TabsList = () =>{
    return (
        <>
            <StyledTab defaultActiveKey="1">
                <StyledTabPane tab="Tab 1" key="1">
                  Content 1
                </StyledTabPane>
                <StyledTabPane tab="Tab 2" key="2">
                    Content 2
                </StyledTabPane>
            </StyledTab>
        </>
    )
}
export default TabsList;