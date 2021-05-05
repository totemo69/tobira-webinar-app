/**
 * 
 * Modal
 * 
 */

import style, {css} from 'styled-components';
import { Modal } from 'antd';


const StyledModal = style(Modal).withConfig({
  shouldForwardProp: prop => !['noPadding'].includes(prop),
})`

.ant-modal-header {
    padding: 28px 0 10px;
  }
  .ant-modal-title {
    display: flex;
    justify-content: center;
  }
  margin: 0 auto;
  ${props =>
    props.noPadding &&
    css`
      padding: 0;
    `};
`;

export default StyledModal;