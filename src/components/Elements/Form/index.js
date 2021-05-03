/**
 *
 *  Form
 *
 */

import { Form } from 'antd';
import styled, { css } from 'styled-components';

const StyledForm = styled(Form).withConfig({
    shouldForwardProp: prop => ![].includes(prop),
})`
   margin: 5rem auto 0;
   width: 80%;
`;

export default StyledForm;