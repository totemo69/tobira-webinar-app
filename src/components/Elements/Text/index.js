import React from 'react';
import PropTypes from 'prop-types';
import Styled, { css } from 'styled-components';
import { Typography } from 'antd';

const { Text } = Typography;

const StyledText = Styled(Text).withConfig({
  shouldForwardProp: (prop) => !['gray', 'red'].includes(prop),
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
`;

export const MainText = ({ content, strong, gray, red }) => (
  <StyledText strong={strong} $gray={gray} $red={red}>
    {content}
  </StyledText>
);

MainText.propTypes = {
  content: PropTypes.any,
  gray: PropTypes.bool,
  red: PropTypes.bool,
};

export default MainText;
