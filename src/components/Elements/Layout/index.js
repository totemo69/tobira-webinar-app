/**
 *
 * Layout
 *
 */

 import styled, { css } from 'styled-components';
 import { Layout } from 'antd';

 const StyledLayout = styled(Layout).withConfig({
     shouldForwardProp: prop => ![
         'bgGray',
     ].includes(prop),
 })`
    width: 100%;
    height: 100%;
    background-color: #ffffff;

    ${props =>
        props.bgGray &&
        css`
            background-color: #f3f3f3;
        `
    };
 `;

export default StyledLayout;