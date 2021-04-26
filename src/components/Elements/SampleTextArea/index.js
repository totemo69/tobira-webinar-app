

import styled, {css} from 'styled-components'
import { Input } from 'antd'

const { TextArea } = Input;

const StyleTextArea = styled(TextArea).withConfig({
    shouldForwardProp: prop => ![].includes(prop),
})
`
    width: 80%;
    border-radius: 10px
    heigth: 50%;
`;

export default StyleTextArea;