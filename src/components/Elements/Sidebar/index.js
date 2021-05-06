/**
 *
 * Sidebar
 *
 */

 import styled, { css } from 'styled-components';
 import { Layout } from 'antd';
 
 const { Sider } = Layout;
 
 const StyledSidebar = styled(Sider).withConfig({
   shouldForwardProp: prop => ![
     'bgGray',
   ].includes(prop),
 })`
     background-color: #FFFFFF;
`;
 
 export default StyledSidebar;