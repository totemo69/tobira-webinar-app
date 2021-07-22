/**
 *
 * Submenu
 *
 */

import styled from 'styled-components';
import { Menu } from 'antd';

const { SubMenu } = Menu;

const StyleSubMenu = styled(SubMenu).withConfig({
  shouldForwardProp: (prop) => ![].includes(prop),
})`
  width: 90%;
  font-size: 14px;
  font-weight: 600;
  letter-spacing: 0.28px;
  color: #b0b0b0;
  border-style: none;

  .ant-menu-submenu-title {
    border-radius: 0px 8px 8px 0px;
  }

  .ant-menu-submenu-arrow {
    color: #b0b0b0;
  }

  .ant-menu-submenu-title,
  .ant-menu-item-only-child {
    &:hover {
      color: #0e71eb;
    }
  }

  .ant-menu-inline {
    background-color: transparent;
    color: #b0b0b0;
  }

  .ant-menu .ant-menu-item-selected {
    background-color: transparent;
    color: #0e71eb;
  }
`;

export default StyleSubMenu;
