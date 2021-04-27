/**
 *
 * Radio 
 *
 */

 import styled, { css } from 'styled-components';
 import { Radio } from 'antd';

 const StyledRadio = styled(Radio).withConfig({
     shouldForwardProp: prop => ![].includes(prop),
 })`
    /***type here**/
 `;
 
export default StyledRadio;