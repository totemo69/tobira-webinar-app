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
    padding: 1rem 0.75rem;
    width: auto;
    background-color: #f3f3f3;
    border-right: 1px solid #f3f4f6;
 `;

export default StyledSidebar;