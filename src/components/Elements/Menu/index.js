/**
 * 
 * Menu
 * 
 */

import styled ,{ css } from 'styled-components';
import { Menu } from 'antd';

const StyledMenu = styled(Menu).withConfig({
  shouldForwardProp: prop => ![
    'marginTop',
  ].includes(prop),
})`
  ${ props =>
    props.marginTop &&
    css`
      margin-top: 1rem;
    `
}
`;

export default StyledMenu;
