/**
 *
 * Checkbox 
 *
 */

 import styled, { css } from 'styled-components';
 import { Checkbox } from 'antd';

 const StyledCheckbox = styled(Checkbox).withConfig({
     shouldForwardProp: prop => ![].includes(prop),
 })`
    /***type here**/
 `;
 
export default StyledCheckbox;