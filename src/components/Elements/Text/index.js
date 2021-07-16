import React from 'react';
import PropTypes from 'prop-types';
import Styled, { css } from 'styled-components';
import { Typography } from 'antd';

const { Text } = Typography;

const StyledText = Styled(Text).withConfig({
  shouldForwardProp: (prop) => !['gray'].includes(prop),
})`
  color: #0e71eb;
  
  ${(props) =>
    props.$gray &&
    css`
      color: #b0b0b0;
    `};
`;

export const MainText = ({ content, strong, gray }) => (
  <StyledText strong={strong} $gray={gray}>
    {content}
  </StyledText>
);

MainText.propTypes = {
  content: PropTypes.any,
  gray: PropTypes.bool,
};

export default MainText;
