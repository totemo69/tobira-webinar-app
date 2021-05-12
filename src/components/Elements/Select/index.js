/**
 *
 *Select 
 *
 */

import styled, { css } from 'styled-components';
import { Select } from 'antd';

const StyledSelect = styled(Select).withConfig({
  shouldForwardProp: prop => ![
    'error'
  ].includes(prop),
})`
    margin: 0 auto 10px;
    width: 100%;
    height: 40px;
    .ant-select-selection.ant-select-selection--single[aria-expanded="true"]
    > div > div > div > div + div {
        margin-top: -15px;
    }
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
 
export default StyledSelect;