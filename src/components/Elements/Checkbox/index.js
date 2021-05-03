/**
 *
 * Checkbox 
 *
 */

 import styled, { css } from 'styled-components';
 import { Checkbox } from 'antd';

 const StyledSpan = styled.span`
    color: #4e4e4e;
    font-size: 12px;
    letter-spacing: 0.24px;
 `;
 
const StyledCheckbox = ({content}) => {
    return (
        <Checkbox>
            <StyledSpan>{content}</StyledSpan>
        </Checkbox>
    )
};

export default StyledCheckbox;