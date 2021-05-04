/**
 *
 * Footer 
 *
 */

import styled from 'styled-components';
import { Layout } from 'antd';

const { Footer } = Layout;

const StyledFooter = styled(Footer).withConfig({
  shouldForwardProp: prop => ![].includes(prop),
})`
    width: 100%;
    background-color: #b0b0b0;
 `;

export default StyledFooter;