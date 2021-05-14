/**
 *
 * Radio 
 *
 */

import styled from 'styled-components';
import { Radio } from 'antd';

const StyledRadioButton = styled(Radio).withConfig({
  shouldForwardProp: prop => ![].includes(prop),
})`
    /***type here**/
 `;
 
export default StyledRadioButton;