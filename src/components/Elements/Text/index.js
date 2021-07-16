import React from 'react';
import Styled from 'styled-components';
import { Typography } from 'antd';

const { Text } = Typography;

const StyledText = Styled(Text)`
  color: #0e71eb;
`;

export const MainText = ({ content, strong }) => (
  <StyledText strong={strong}>{content}</StyledText>
);

export default MainText;
