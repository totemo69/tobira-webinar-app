/**
 *
 * Radio 
 *
 */

import styled from 'styled-components';
import { Radio } from 'antd';

const StyledRadio = styled(Radio).withConfig({
  shouldForwardProp: prop => ![].includes(prop),
})`
    font-size: 12px;
 `;
 
export default StyledRadio;