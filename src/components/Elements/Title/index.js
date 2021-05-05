import styled, {css} from 'styled-components';
import  { Typography } from 'antd';

const { Title } = Typography;

const SampleTitle = styled(Title).withConfig({
  shouldForwardProp: prop => ![
    'logo',
    'marginBottom',
    'TermsOfService',
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
    props.logo && 
    css`
        font-family: Segoe UI;
        &.ant-typography {
            color: #0e71eb;
            letter-spacing: 0.72px;
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
                }
               
            `
        };
};
    
`;

export default SampleTitle;