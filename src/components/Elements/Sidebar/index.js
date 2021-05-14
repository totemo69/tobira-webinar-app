/**
 *
 * Sidebar
 *
 */

import styled from 'styled-components';
import { Layout } from 'antd';

const { Sider } = Layout;

const StyledSidebar = styled(Sider).withConfig({
  shouldForwardProp: prop => ![].includes(prop),
})`
     background-color: #FFFFFF;
`;

export default StyledSidebar; 
