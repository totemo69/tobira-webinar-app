/**
 * 
 * 
 * Sidebar
 * 
 * */ 

import style, {css} from 'styled-components';
import { Layout } from 'antd';


const { Sider } = Layout;

const StyledSidbar = style(Sider).withConfig({
  shouldForwardProp: prop => ![].includes(prop),
})`
  background: #FFFFFF 0% 0% no-repeat padding-box;
  padding: none;
  .ant-layout-sider{
    width: 303px !important;
  }
`;


export default StyledSidbar;