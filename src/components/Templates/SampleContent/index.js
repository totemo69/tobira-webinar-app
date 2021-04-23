/**
 *
 * Content
 *
 */

 import styled, { css } from 'styled-components';
 import { Layout } from 'antd';

 const { Content } = Layout;

 const StyledContent = styled(Content).withConfig({
     shouldForwardProp: prop => ![].includes(prop),
 })`
    padding: 1rem 0.75rem;
    width: 100%;
    background-color: #ffffff;
 `;

export default StyledContent;