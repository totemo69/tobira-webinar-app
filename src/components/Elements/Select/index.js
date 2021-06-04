/**
 *
 *Select 
 *
 */

import styled, { css } from 'styled-components';
import { Select } from 'antd';

const StyledSelect = styled(Select).withConfig({
  shouldForwardProp: prop => ![
    'error',
    'showPages',
    'paddingLeft',
  ].includes(prop),
})`
    margin: 0 auto 10px;
    width: 100%;
    background-color: #ffffff;
    font-weight: 600;
    font-size: 12px;

    &:focus {
        border: 1px solid #0e71eb !important;
        box-shadow: 0px 1px 1px #0e71eb !important;
    }
    
    .ant-select-selection.ant-select-selection--single[aria-expanded="true"]
    > div > div > div > div + div {
        margin-top: -15px;
    }

    .ant-select-arrow {
        color: #4E4E4E;
    }

    ${props =>
    props.error &&
        css`
            border: 2px solid #ef4444;
    `};

    ${props =>
    props.paddingLeft &&
        css`
        .ant-select-selection-item {
            padding-left: 18px !important;
        }
    `};

    ${props =>
    props.showPages &&
        css`
            width: 100px;
            margin-left: .50rem;
            margin-right: .50rem;
    `};
`;
 
export default StyledSelect;