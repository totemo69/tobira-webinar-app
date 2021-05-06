/**
 *
 * Header
 *
 */

import styled  from 'styled-components';
import { Layout } from 'antd';

const { Header } = Layout;

const StyledHeader = styled(Header).withConfig({
  shouldForwardProp: prop => ![].includes(prop),
})`
    width: 100%;
    background: #FFFFFF 0% 0% no-repeat padding-box;
    box-shadow: 0px 2px 4px #00000029;
 `;

export default StyledHeader;