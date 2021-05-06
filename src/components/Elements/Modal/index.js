/**
 * 
 * Modal
 * 
 */

import styled, {css} from 'styled-components';
import Modal from 'react-modal';


const StyledModal = styled(Modal).withConfig({
  shouldForwardProp: prop => ![
    'noPadding',
    'marginTop',
  ].includes(prop),
})`
  margin: 0 auto;
  height: 400px;
  width: 400px;
  background-color: #ffffff;
  box-shadow: 0px 3px 6px #00000029;

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