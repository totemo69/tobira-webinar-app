import styled from 'styled-components';
import { Input } from 'antd';


const StyledInput = styled(Input).withConfig({
  shouldForwardProp: prop => ![].includes(prop),
})
`
    border-radius: 10px;
    width: 80%;
    margin-bottom: 10px;
`;

export default StyledInput;