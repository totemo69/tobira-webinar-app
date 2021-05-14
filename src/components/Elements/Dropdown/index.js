/**
 * 
 * Dropdown
 * 
 * */ 

import styled, { css } from 'styled-components';
import { Dropdown } from 'antd';
import { DownOutlined } from '@ant-design/icons'

const StyledDropdown = styled(Dropdown).withConfig({
  shouldForwardProp: prop => ![].includes(prop),
})`
  font-size: 14px;
  font-weight: 600;
  letter-spacing: 0.28px;
  color: #4E4E4E;
`;

const Drop = ({ username , items }) =>{
  return(
    <StyledDropdown overlay={items} placement="bottomRight" trigger={['click']}>
      <a className="ant-dropdown-link">
        {username} <DownOutlined />
      </a>
    </StyledDropdown>
  )
};

export default Drop;