/**
 *
 * Option
 *
 */

 import styled, { css } from 'styled-components';
 import { Select } from 'antd';

const { Option } = Select;

 const StyledOption = styled(Option).withConfig({
     shouldForwardProp: prop => ![].includes(prop),
 })`
    /***type here**/
 `;
 
export default StyledOption;