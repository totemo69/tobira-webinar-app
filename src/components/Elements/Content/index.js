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
    'paddingNone',
    'contentTOS',
    'TermsAndPolicy',
    'contentTOSgray',
    'privacypolicyContent',
  ].includes(prop),
})`
    margin-top: 0.25em;
    padding: 1rem 0.75rem;
    width: 100%;
    height: auto;
    background-color: #F3F3F3;


    ${props => 
    props.defaultPadding &&
        css`
           padding:  1rem 50px;
            @media screen and (max-width: 480px) {
                padding: 1rem 10px;
            }              
        `
};    
 


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
    props.paddingNone &&
        css`
            padding: 0;
        `
};

    ${props => 
    props.TermsAndPolicy &&
        css`
            padding: 0;
            padding-top: 2rem;
            padding-bottom: 3rem;
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