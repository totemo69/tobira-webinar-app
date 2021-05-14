import styled from 'styled-components';
import { Input } from 'antd';

const { TextArea } = Input;

const StyleTextArea = styled(TextArea).withConfig({
  shouldForwardProp: prop => ![].includes(prop),
})`
  width: 80%;
  heigth: 50%;
  .ant-input{
    border-radius: 8px;
  }
`;

export default StyleTextArea;