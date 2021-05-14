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
    'heightScreen',
    'heightFull',
    'contentTOS',
    'contentTOSgray',
    'privacypolicyContent',
  ].includes(prop),
})`
    padding: 1rem 0.75rem;
    width: 100%;
    height: auto;
    background-color: #F3F3F3;

    ${props => 
    props.bgNone &&
        css`
            background-color: transparent;
        `
};

    ${props => 
    props.heightScreen &&
        css`
            height: 100vh;
        `
};

    ${props => 
    props.heightFull &&
        css`
            height: 100%;
        `
};

    ${props => 
    props.contentTos &&
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
    props.contentTosgray &&
            css`
            background-color: #f3f3f3;
            `
};

    ${props => 
    props.privacypolicyContent && 
      css`
      width: 960px;
      height: auto;
      padding-bottom: 48.16px;
      margin-left: auto;
      margin-right: auto;
      margin-top: 42.16px;
      margin-bottom: 50px;
      box-shadow: 0px 1px 2px #00000029;
      `
};
 `;

export default StyledContent;