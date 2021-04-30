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
         'SignUp'
     ].includes(prop),
 })`
    padding: 1rem 0.75rem;
    width: 100%;
    height: 100vh;
    background-color: #ffffff;

    ${props => 
        props.SignUp && 
        css `
            background-color: #F3F3F3;
        `
    };
 `;

export default StyledContent;