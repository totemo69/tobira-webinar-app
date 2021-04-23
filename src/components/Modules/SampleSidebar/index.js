/**
 *
 * Sidebar
 *
 */

 import styled, { css } from 'styled-components';
 import { Layout } from 'antd';

 const { Sider } = Layout;

 const StyledSidebar = styled(Sider).withConfig({
     shouldForwardProp: prop => ![].includes(prop),
 })`
    padding: 1rem 0.75rem;
    width: auto;
    background-color: #ffffff;
    box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06);
 `;

export default StyledSidebar;