/**
 *
 * PhoneInput
 *
 */

import styled from 'styled-components';
import PhoneInput from "react-phone-input-2";
import 'react-phone-input-2/lib/material.css';
  
const StyledPhoneInput = styled(PhoneInput).withConfig({
  shouldForwardProp: prop => ![].includes(prop),
})`
    /***CSS here**/
  `;
  
export default StyledPhoneInput;