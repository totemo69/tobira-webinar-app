import styled from 'styled-components';
import { Radio } from 'antd';


const StyledRadioButton = styled(Radio).withConfig({
  shouldForwardProp: prop => ![].includes(prop),
})
`
`;

export default StyledRadioButton;