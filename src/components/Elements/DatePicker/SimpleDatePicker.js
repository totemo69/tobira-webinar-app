/**
 *
 * DatePicker
 *
 */

import React from 'react';
import { DatePicker, Typography } from 'antd';
import PropTypes from 'prop-types';
import styled, { css } from 'styled-components';
import { ErrorMessage } from 'formik';
import LocalizeError from '@/utils/i18nError';

/* istanbul ignore next */
const withConfig = {
  shouldForwardProp: (prop) => !['fullWidth'].includes(prop),
};

const StyledDatePicker = styled(DatePicker).withConfig(withConfig)`
  margin: 0 auto;
  border: 1px solid #b0b0b0;
  border-radius: 8px;
  font-size: 12px;

  ${(props) =>
    props.$fullWidth &&
    css`
      width: 100%;
      font-size: 12px;
    `};
`;

export const StyledErrorText = styled(Typography.Text).withConfig(withConfig)`
  display: block;
  margin: 0;
`;

const WrapDatePicker = ({
  field,
  format,
  fullWidth,
  disabledDate,
  ...props
}) => {
  const inputProps = { ...props };
  return (
    <>
      <StyledDatePicker
        {...field}
        $fullWidth={fullWidth}
        disabledDate={disabledDate}
        {...inputProps}
      />

      {field && (
        <ErrorMessage
          name={field.name}
          render={(msg) => (
            <StyledErrorText type="danger">
              <LocalizeError errorCode={msg} />
            </StyledErrorText>
          )}
        />
      )}
    </>
  );
};

WrapDatePicker.propTypes = {
  field: PropTypes.any,
  form: PropTypes.any,
  fullWidth: PropTypes.any,
  disabledDate: PropTypes.any,
};

export default WrapDatePicker;
