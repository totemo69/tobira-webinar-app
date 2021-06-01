/**
 *
 * ErrorMessage
 *
 */

 import { ErrorMessage } from 'formik';
 import styled from 'styled-components';
 
 const TextRed = styled.a`
     margin: 0 auto 10px;
     color: #eb4034;
     font-size: 12px;
     font-weight: 600;
  `;
 
 const ErrorMsg = ({ name }) => {
   return (
     <ErrorMessage name={name} component={TextRed} />
   );
 };
   
 export default ErrorMsg;