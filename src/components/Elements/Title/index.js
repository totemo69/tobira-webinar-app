


import styled, {css} from 'styled-components'
import  { Typography } from 'antd'


const { Title } = Typography;

const SampleTitle = styled(Title).withConfig({
    shouldForwardProp: prop => ![
        'SignUp',
        'Webinar',
    ].includes(prop),
})
`
    font-family: Poppins;
    color: #4E4E4E;
    opacity: 1;
    font-size: 40px;
    &.ant-typography {
        color: #4E4E4E;
    }

    ${props => 
        props.SignUp && 
        css `
        font-family: Poppins;
        width: 158px;
        height: 56px;
        font-weigth: Bold;
        text-align: left;
        font: normal normal bold 40px/60px Poppins;
        letter-spacing: 0.8px;
        color: #4E4E4E;
        opacity: 1;
        font-size: 40px;
        &.ant-typography {
            color: #4E4E4E;
        }
        
        `
    };

    ${props => 
        props.Webinar && 
        css`
            margin-right: 146px;
            text-align: right;
            margin-top: 68px;
            font: normal normal bold 36px/48px Segoe UI;
            &.ant-typography {
                color: #0E71EB;
            }
           
        `
    };
    
`;

export default SampleTitle;