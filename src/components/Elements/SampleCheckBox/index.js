

import styled, {css} from 'styled-components'
import { Checkbox } from 'antd'


const SampleCheckBox = styled(Checkbox).withConfig({
    shouldForwardProp: prop => ![].includes(prop),
})`

`;

export default SampleCheckBox;
