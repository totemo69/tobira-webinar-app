


import styled, {css} from 'styled-components'
import  { Typography } from 'antd'


const { Title } = Typography;

const SampleTitle = styled(Title).withConfig({
    shouldForwardProp: prop => ![].includes(prop),
})
`
    font-family: Poppins;
    font-weigth: Bold;
    color: red;
    
`;

export default SampleTitle;