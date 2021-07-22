import React from 'react';
import PropTypes from 'prop-types';
import Styled, { css } from 'styled-components';
import { Typography } from 'antd';

const { Text } = Typography;

const StyledText = Styled(Text).withConfig({
  shouldForwardProp: (prop) => !['gray', 'red', 'blue', 'black'].includes(prop),
})`
  color: #0e71eb;
  
  ${(props) =>
    props.$gray &&
    css`
      color: #b0b0b0;
    `};
    
  ${(props) =>
    props.$red &&
    css`
      color: #ff0033;
    `}; 
    
  ${(props) =>
    props.$blue &&
    css`
      color: #0e71eb;
    `}; 
  
  ${(props) =>
    props.$black &&
    css`
      color: #000000;
    `};
`;

export const MainText = ({ content, strong, gray, red, blue, black }) => (
  <StyledText
    strong={strong}
    $gray={gray}
    $red={red}
    $blue={blue}
    $black={black}
  >
    {content}
  </StyledText>
);

MainText.propTypes = {
  content: PropTypes.any,
  gray: PropTypes.bool,
  red: PropTypes.bool,
  blue: PropTypes.bool,
  black: PropTypes.bool,
};

export default MainText;
