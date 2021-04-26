/**
 *
 * Layout
 *
 */

 import styled, { css } from 'styled-components';
 import { Layout } from 'antd';

 const StyledLayout = styled(Layout).withConfig({
     shouldForwardProp: prop => ![].includes(prop),
 })`
    width: 100%;
    background-color: #fffff;
 `;

export default StyledLayout;