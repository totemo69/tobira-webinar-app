/**
 *
 * Checkbox
 *
 */

import styled from 'styled-components';
import { Checkbox } from 'antd';

const StyledSpan = styled.span`
  color: #4e4e4e;
  font-size: 12px;
  letter-spacing: 0.24px;
`;

const StyledCheckBox = ({ content }) => (
  <Checkbox>
    <StyledSpan>{content}</StyledSpan>
  </Checkbox>
);

export default StyledCheckBox;
