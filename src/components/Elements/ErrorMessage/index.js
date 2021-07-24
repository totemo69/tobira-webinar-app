/**
 *
 * ErrorMessage
 *
 */

import { ErrorMessage } from 'formik';
import styled from 'styled-components';
import LocalizeError from '@/utils/i18nError';

const TextRed = styled.span`
  margin: 0 auto 10px;
  color: #eb4034;
  font-size: 11px;
  font-weight: 600;
`;

const ErrorMsg = ({ name }) => (
  <ErrorMessage
    name={name}
    render={(msg) => (
      <TextRed>
        <LocalizeError errorCode={msg} />
      </TextRed>
    )}
  />
);

export default ErrorMsg;
