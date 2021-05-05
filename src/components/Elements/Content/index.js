/**
 *
 * Content
 *
 */

import styled, { css } from 'styled-components';
import { Layout } from 'antd';

const { Content } = Layout;

const StyledContent = styled(Content).withConfig({
  shouldForwardProp: prop => ![
    'bgNone',
    'contentTOS',
    'contentTOSgray',
  ].includes(prop),
})`
    padding: 1rem 0.75rem;
    width: 100%;
    height: 100vh;
    background-color: #ffffff;

    ${props => 
    props.bgNone &&
        css`
            background-color: transparent;
        `
    };

    ${props => 
      props.contentTOS &&
          css`
            width: 960px;
            height: 100vh;
            margin-left: auto;
            margin-right: auto;
            margin-top: 42.16px;
            margin-bottom: 50px;
            box-shadow: 0px 1px 2px #00000029;
          `
      };

      ${props => 
        props.contentTOSgray &&
            css`
            background-color: #f3f3f3;
            `
        };
 `;

export default StyledContent;