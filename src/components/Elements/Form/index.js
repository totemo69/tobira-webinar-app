/**
 *
 *  Form
 *
 */

// import { Form } from 'antd';
import { Form } from 'formik';
import styled from 'styled-components';

const StyledForm = styled(Form).withConfig({
  shouldForwardProp: (prop) => ![].includes(prop),
})`
  margin: 5rem auto 0;
  width: 80%;

  @media screen and (max-width: 768px) {
    width: 100%;
  }
`;

export default StyledForm;
