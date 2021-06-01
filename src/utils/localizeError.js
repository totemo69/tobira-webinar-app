import React from 'react';
import PropTypes from 'prop-types';
import { message } from 'antd';
import { injectIntl } from 'react-intl'; 
import { APIErrorMsgLookup } from '@/utils/errorCodeLookup';
import globalMessages from '@/messages/global';

export const translateApiError = (
  apiErrors,
  formikActions = null,
  intl = null,
) => {
  if (typeof apiErrors === 'string') {
    message.error(apiErrors);
  } else if (apiErrors && apiErrors.length > 0) {
    const errors = {};
    apiErrors.forEach(errItem => {
      if (APIErrorMsgLookup[errItem.messages[0]]) {
        errors[errItem.field] = APIErrorMsgLookup[errItem.messages[0]];
      } else {
        // eslint-disable-next-line prefer-destructuring
        errors[errItem.field] = errItem.messages[0];
      }
    });
    formikActions.setErrors(errors);
  } else if (apiErrors && apiErrors.message.errorCode) {
    const { errorCode = null } = apiErrors.message;
    const translateErrCode = APIErrorMsgLookup[errorCode];
    if (errorCode && translateErrCode && intl) {
      const translatedMessages = globalMessages[translateErrCode]
        ? intl.formatMessage(globalMessages[translateErrCode])
        : translateErrCode;
      message.error(translatedMessages);
    } else {
      message.error(apiErrors.message);
    }
  }
};

function localizeError({
  intl,
  errorCode,
  joinChar = ' ',
  stringMode = false,
}) {
  if (!errorCode) {
    return null;
  }
  const additionalMsg = {};
  const getLiterals = errorCode.includes('[')
    ? errorCode.match(/\[(.*?)]/gim)
    : [];

  if (getLiterals.length > 0) {
    getLiterals.forEach(literals => {
      // eslint-disable-next-line no-useless-escape
      const sanitize = literals.replace(/[\[\]&]+/g, '');
      const [key, value = null] = sanitize.split('=');
      const pathIndex = value && value.match(/\d+$/)[0];
      if (pathIndex !== null && pathIndex !== undefined) {
        additionalMsg[key] = parseInt(pathIndex, 10);
      } else {
        additionalMsg[key] = value;
      }
    });
  }

  const errCodes = errorCode
    .split('.')
    .filter(
      item =>
        !getLiterals.includes(item) &&
        !item.startsWith('[') &&
        !item.endsWith(']'),
    );
  const messages = errCodes.map(code =>
    globalMessages[code]
      ? intl.formatMessage(globalMessages[code], additionalMsg)
      : errorCode,
  );
  return !stringMode ? <>{messages.join(joinChar)}</> : messages.join(joinChar);
}

localizeError.propTypes = {
  intl: PropTypes.any,
  errorCode: PropTypes.string,
  joinChar: PropTypes.string,
  stringMode: PropTypes.bool,
};

export default injectIntl(localizeError);