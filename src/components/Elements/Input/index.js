/**
 *
 * Input
 *
 */
import React from 'react';
import styled, { css } from 'styled-components';
import { Input } from 'antd';
import PropTypes from 'prop-types';

const StyledInput = styled(Input).withConfig({
  shouldForwardProp: (prop) => !['error'].includes(prop),
})`
  margin: 0 auto;
  width: 100%;
  height: 40px;
  background-color: #ffffff;
  border-radius: 8px;
  border: 1px solid #b0b0b0;
  font-size: 12px;

  &:hover {
    border-color: #0e71eb;
  }

  &:focus {
    border: 1px solid #0e71eb;
    box-shadow: 0px 1px 1px #0e71eb;
  }

  ${(props) =>
    props.error &&
    css`
      border: 1px solid #ff0033;
    `};
  ${(props) =>
    props.addonAfter &&
    css`
      border: none;
      .ant-input-wrapper.ant-input-group input {
        border-top-left-radius: 8px;
        border-bottom-left-radius: 8px;
      }
      .ant-input-group-addon {
        cursor: pointer;
        opacity: 0.85;
        border-top-right-radius: 8px;
        border-bottom-right-radius: 8px;
        background-color: var(--backgroundColorAccent);
      }
    `};
`;

const WrapInput = ({ field, type, ...props }) => {
  const inputProps = { ...props };
  return <StyledInput {...field} type={type} {...inputProps} />;
};

WrapInput.propTypes = {
  field: PropTypes.any,
  type: PropTypes.string,
};

export default WrapInput;
