/**
 *
 * Input Password
 *
 */
import React from 'react';
import styled from 'styled-components';
import { Input } from 'antd';
import PropTypes from 'prop-types';
import { EyeInvisibleOutlined, EyeTwoTone } from '@ant-design/icons';

const StyledPassword = styled(Input.Password).withConfig({
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
`;

const WrapPasswordInput = ({ field, ...props }) => {
  const inputProps = { ...props };
  return (
    <StyledPassword
      {...field}
      type="password"
      {...inputProps}
      iconRender={(visible) =>
        visible ? <EyeTwoTone /> : <EyeInvisibleOutlined />
      }
    />
  );
};

WrapPasswordInput.propTypes = {
  field: PropTypes.any,
};

export default WrapPasswordInput;
