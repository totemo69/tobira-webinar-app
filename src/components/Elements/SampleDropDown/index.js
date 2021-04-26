

import styled, {css} from 'styled-components'

import { Select } from 'antd'

const { Option } = Select;


const StyledDropDown = styled(Option).withConfig({
    shouldForwardProp: prop => ![].includes(prop),
})
`

`;

export default StyledDropDown;