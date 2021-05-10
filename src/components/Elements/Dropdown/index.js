/**
 * 
 * Dropdown
 * 
 * */ 

import styled, {css} from 'styled-components';
import {Menu, Dropdown, Icon} from 'antd';
import {
  DownOutlined,
  UserOutlined,
  ProfileFilled
} from '@ant-design/icons'

const StyledDropdown = styled(Dropdown).withConfig({
  shouldForwardProp: prop => ![].includes(prop),
})`

  /***css here**/
  float: right;
`;

const StyledATag = styled.a`
  font-weight: 600;
`


export default StyledDropdown;