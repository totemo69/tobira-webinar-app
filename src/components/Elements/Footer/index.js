/**
 *
 * Footer 
 *
 */

import styled, {css} from 'styled-components';
import { Layout } from 'antd';

const { Footer } = Layout;

const StyledFooter = styled(Footer).withConfig({
  shouldForwardProp: prop => !['TermsOfService'].includes(prop),
})`
    width: 100%;
    background-color: #b0b0b0;

    ${props => 
    props.TermsOfService && 
      css`
        text-align: center;
      `
}
 `;

export default StyledFooter;