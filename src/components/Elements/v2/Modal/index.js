/**
 * 
 * v2 Modal
 * 
 */

import styled, {css} from 'styled-components';
import { Modal } from 'antd';


const StyledModal = styled(Modal).withConfig({
  shouldForwardProp: prop => ![
    'noPadding',
    'marginTop',
  ].includes(prop),
})`
    .ant-modal-header{
        text-align: center;
        border-bottom: none;
        .ant-modal-title{
            color: var(--textColorPrimary);
        }
    }
    
    .ant-modal-content, .ant-modal-header{
        border-radius: 8px;
    }
    border-radius: 8px;

  ${props =>
    props.noPadding &&
    css`
      padding: 0;
  `};

  ${props =>
    props.marginTop &&
    css`
      margin-top: 10rem;
  `};
`;

export default StyledModal;