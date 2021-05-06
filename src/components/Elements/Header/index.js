/**
 *
 * Header
 *
 */

import styled, { css }  from 'styled-components';
import { Layout } from 'antd';

const { Header } = Layout;

const StyledHeader = styled(Header).withConfig({
  shouldForwardProp: prop => ![].includes(prop),
})`
    width: 100%;
    height: 65px;
    background-color: #ffffff;
    box-shadow: 0px 2px 4px #00000029;

    ${ props =>
      props.noPadding &&
      css`
        padding: 0;
      `
    }

    ${ props =>
      props.noMargin &&
      css`
        margin: 0;
      `
    }
 `;

export default StyledHeader;