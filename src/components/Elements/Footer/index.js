/**
 *
 * Footer 
 *
 */

import styled, {css} from 'styled-components';
import { Layout } from 'antd';

const { Footer } = Layout;

const StyledFooter = styled(Footer).withConfig({
  shouldForwardProp: prop => ![].includes(prop),
})`
    width: 100%;
    height: 60px;
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: #b0b0b0;
    font-size: 12px;
    font-weight: 600;
    color: #4e4e4e;
    letter-spacing: 0.20px;
    line-height: 0.18px;
 `;

export default StyledFooter;