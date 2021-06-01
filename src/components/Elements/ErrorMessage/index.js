/**
 *
 * ErrorMessage
 *
 */

import { ErrorMessage } from 'formik';
import styled from 'styled-components';
 
const TextRed = styled.span`
     margin: 0 auto 10px;
     color: #eb4034;
     font-size: 11px;
     font-weight: 600;
  `;
 
const ErrorMsg = ({ name }) => {
  return (
    <ErrorMessage name={name} component={TextRed} />
  );
};
   
export default ErrorMsg;