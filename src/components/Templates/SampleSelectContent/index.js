import styled, {css} from 'styled-components'

import { Select } from 'antd'




const StyledSelect = styled(Select).withConfig({
    shouldForwardProp: prop => ![].includes(prop),
})
`
    border-radius: 10px;    
    width: 50%;
    margin-top: 10px;
`;

export default StyledSelect;