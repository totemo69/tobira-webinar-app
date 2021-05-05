import styled, {css} from 'styled-components';
import  { Typography } from 'antd';

const { Title } = Typography;

const SampleTitle = styled(Title).withConfig({
  shouldForwardProp: prop => ![
    'modalTitle',
    'marginBottom',
    'TermsOfService',
    'privacypolicyHeader',
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