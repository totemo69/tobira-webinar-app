/**
 * 
 * Dropdown
 * 
 * */ 

import styled from 'styled-components';
import { Dropdown } from 'antd';
import { DownOutlined } from '@ant-design/icons';

const StyledDropDown = styled(Dropdown).withConfig({
  shouldForwardProp: prop => ![].includes(prop),
})`
  font-size: 14px;
  font-weight: 600;
  letter-spacing: 0.28px;
  color: #4E4E4E;
`;

const Drop = ({ username , items }) =>{
  return(
    <StyledDropDown overlay={items} placement="bottomRight" trigger={['click']}>
      <a className="ant-dropdown-link">
        {username} <DownOutlined />
      </a>
    </StyledDropDown>
  );
};

export default Drop;