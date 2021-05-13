import styled, {css} from 'styled-components';
import  { Typography } from 'antd';

const { Title } = Typography;

const SampleTitle = styled(Title).withConfig({
  shouldForwardProp: prop => ![
    'modalTitle',
    'marginRight',
    'marginBottom',
    'TermsOfService',
    'privacypolicyHeader',
    'secondary',
    'profileName',
  ].includes(prop),
})
`
    font-family: Poppins;
    &.ant-typography {
        color: #4e4e4e;
        font-weight: bold;
        letter-spacing: 0.8px;
        
    };

    ${props => 
    props.modalTitle && 
    css`
        &.ant-typography {  
            margin-top: 1rem;
            font-size: 16px;
            font-weight: 600;
            color: #4E4E4E;
            letter-spacing: 0.32px;
        }
    `
    };

    ${props => 
    props.secondary && 
    css`
        &.ant-typography {  
            font-size: 20px;
            text-transform: uppercase;
            font-weight: 600;
            color: #0E71EB;
            letter-spacing: 0.80px;
            line-height: 0.30px;
        }
    `
    };

    ${props => 
    props.profileName && 
    css`
        &.ant-typography {  
            font-size: 14px;
            font-weight: 700;
            color: #4e4e4e;
            letter-spacing: 0.20px;
            line-height: 0.21px;
        }
    `
    };

    ${props => 
    props.marginRight && 
        css`
            &.ant-typography{
                margin-right: 0.25rem;
            }
        `
    };

    ${props => 
    props.marginBottom && 
        css`
            &.ant-typography{
                margin-bottom: 3rem;
            }
        `
    };

    ${props => 
        props.TermsOfService && 
            css`
                &.ant-typography{
                   color: #0E71EB;
                   font: normal normal 600 20px/30px Poppins;
                    letter-spacing: 0.4px;
                    color: #0E71EB;
                    opacity: 1;
                    text-align: center;
                    margin-top: 45.84px;
                    
                }
               
            `
        };

        ${props => 
            props.privacypolicyHeader &&
            css`
            &.ant-typography{
                color: #0E71EB;
                font: normal normal 600 20px/30px Poppins;
                letter-spacing: 0.4px;
                color: #0E71EB;
                opacity: 1;
                text-align: center;
                margin-top: 45.84px;
             }
            
         `
        };
    
`;

export default SampleTitle;