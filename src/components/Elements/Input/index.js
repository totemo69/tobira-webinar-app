/**
 *
 * Input
 *
 */

 import styled, { css } from 'styled-components';
 import { Input } from 'antd';

 const StyledInput = styled(Input).withConfig({
     shouldForwardProp: prop => ![
         'error'
     ].includes(prop),
 })`
    margin: 0 auto 10px;
    width: 80%;
    height: 40px;
    border-radius: 5px;
    border: 1px solid #d1d5db;
    &:hover {
        border-color: #0e71eb;
    }
    &:focus {
        border: 2px solid #0e71eb;
    }

    ${props =>
        props.error &&
        css`
            border: 2px solid #ef4444;
    `};
`;
 
export default StyledInput;