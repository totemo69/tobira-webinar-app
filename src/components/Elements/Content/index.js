/**
 *
 * Content
 *
 */

 import styled, { css } from 'styled-components';
 import { Layout } from 'antd';

 const { Content } = Layout;

 const StyledContent = styled(Content).withConfig({
     shouldForwardProp: prop => ![
         'bgNone',
     ].includes(prop),
 })`
    padding: 1rem 0.75rem;
    width: 100%;
    height: 100vh;
    background-color: #ffffff;

    ${props => 
        props.bgNone &&
        css`
            background-color: transparent;
        `
    };
 `;

export default StyledContent;