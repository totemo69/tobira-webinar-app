/**
 *
 * PhoneInput
 *
 */

import styled from 'styled-components';
import PhoneInput from "react-phone-input-2";
import 'react-phone-input-2/lib/material.css';
import PropTypes from 'prop-types';
  
const StyledPhoneInput = styled(PhoneInput).withConfig({
  shouldForwardProp: prop => ![].includes(prop),
})`
    /***CSS here**/
  `;


const WrapInput = ({
  field,
  ...props
}) => {
  const inputProps = { ...props };
  return (
    <StyledPhoneInput
      {...field}
      {...inputProps}
    />
  );
};

WrapInput.propTypes = {
  field: PropTypes.any,
};

export default WrapInput;