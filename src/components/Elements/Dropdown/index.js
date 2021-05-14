/**
 * 
 * Dropdown
 * 
 * */ 

import styled from 'styled-components';
import { Menu, Dropdown } from 'antd';
import { DownOutlined } from '@ant-design/icons';

const StyledDropdown = styled(Dropdown).withConfig({
  shouldForwardProp: prop => ![].includes(prop),
})`
  /***css here**/
`;

const StyledATag = styled.a`
  font-weight: 600;
`;

const menu = (
  <Menu>
    <Menu.Item key="0">
      Profile
    </Menu.Item>
    <Menu.Item key="1">
      Account
    </Menu.Item>
    <Menu.Item key="2">
      Purchase License
    </Menu.Item>
    <Menu.Item key="3">
      Wallet
    </Menu.Item>
    <Menu.Divider></Menu.Divider>
    <Menu.Item key="4">
      Log out
    </Menu.Item>
  </Menu>
);

const Drop = ({ username , items }) =>{
  return(
    <StyledDropdown overlay={items && menu} placement="bottomRight" trigger={['click']}>
      <StyledATag>{username} <DownOutlined/></StyledATag>
    </StyledDropdown>
  );
};

export default Drop;