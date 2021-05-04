/**
 *
 * Card
 *
 */

import PropTypes from 'prop-types';
import styled, { css } from 'styled-components';
import { Card } from 'antd';
 
const StyledCard = styled(Card).withConfig({
  shouldForwardProp: prop => ![
    'PaddingTop',
    'SignUp'
  ].includes(prop),
})`
   .ant-card-head-title {
     padding: 10px 0 0 0;
   }
   .ant-card-body {
     padding: 0 24px 24px 24px;
   }
   width: 100%;
   margin-top: 4px;

   
 
   ${props =>
    props.PaddingTop &&
     css`
       padding-top: 20px;
     `};
     
 `;
 
const StyledMeta = styled(Card.Meta)`
   padding: 10px;
 `;
 
StyledCard.propTypes = {
  PaddingTop: PropTypes.any,
};
StyledMeta.propTypes = {};
 
export default StyledCard;
 