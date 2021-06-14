/**
 *
 * Layout
 *
 */

import styled, { css } from 'styled-components';
import { Layout } from 'antd';

const StyledLayout = styled(Layout).withConfig({
  shouldForwardProp: prop => ![
    'bgGray', 'bgPrimary', 'defaultPadding'
  ].includes(prop),
})`
    width: 100%;
    min-height: 100%;

    ${props => 
    props.bgPrimary &&
      css`
        background-color: #FFFFFF;
      `
};    
    
    ${props =>
    props.bgGray &&
      css`
        background-color: #f3f3f3;
      `
};
 `;

export default StyledLayout;