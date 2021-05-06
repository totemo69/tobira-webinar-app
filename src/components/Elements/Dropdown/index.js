/**
 * 
 * Dropdown
 * 
 * */ 

import style, {css} from 'styled-components';
import {Menu, Dropdown, Icon} from 'antd';
import {
  DownOutlined,
  UserOutlined,
  ProfileFilled
} from '@ant-design/icons'

const StyledDropdown = style(Dropdown).withConfig({
  shouldForwardProp: prop => ![].includes(prop),
})`
  float: right;
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
)


const Drop = () =>{
  return(
      <StyledDropdown overlay={menu} trigger={['click']}>
        <a>tobirauser <DownOutlined/></a>
      </StyledDropdown>
  )
};

Drop.prototype = {}

export default Drop;