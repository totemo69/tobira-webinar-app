/**
 *
 * Header
 *
 */

 import styled, { css } from 'styled-components';
 import { Layout } from 'antd';

 const { Header } = Layout;

 const StyledHeader = styled(Header).withConfig({
     shouldForwardProp: prop => ![].includes(prop),
 })`
    width: 100%;
    background-color: #fffc1c;
 `;

export default StyledHeader;