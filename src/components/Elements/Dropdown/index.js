/* eslint-disable jsx-a11y/anchor-is-valid */
/**
 *
 * Dropdown
 *
 * */

import styled from 'styled-components';
import { Dropdown } from 'antd';
import { DownOutlined } from '@ant-design/icons';

const StyledDropDown = styled(Dropdown).withConfig({
  shouldForwardProp: (prop) => ![].includes(prop),
})`
  font-size: 14px;
  font-weight: 600;
  letter-spacing: 0.28px;
  color: #4e4e4e;

  @media screen and (max-width: 768px) {
    font-size: 11px;
  }
`;

const Drop = ({ username, items }) => (
  <StyledDropDown overlay={items} placement="bottomRight" trigger={['click']}>
    <a
      href="#"
      role="button"
      onClick={(e) => e.preventDefault()}
      className="ant-dropdown-link"
    >
      {username} <DownOutlined />
    </a>
  </StyledDropDown>
);

export default Drop;
