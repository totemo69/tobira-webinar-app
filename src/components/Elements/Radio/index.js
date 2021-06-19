/**
 *
 * Radio
 *
 */

import styled, { css } from 'styled-components';
import { Radio } from 'antd';

const StyledRadioGroup = styled(Radio.Group).withConfig({
  shouldForwardProp: (prop) => ![].includes(prop),
})`
  ${(props) =>
    props.size === 'large' &&
    css`
      .ant-radio-wrapper {
        font-size: 14px;
        align-items: center;
      }
      .ant-radio-inner {
        width: 24px;
        height: 24px;
        border-radius: 100%;
      }
      .ant-radio-checked .ant-radio-inner::after {
        width: 16px;
        height: 16px;
        left: 3px;
        top: 3px;
      }
      .ant-radio + span {
        padding-top: 2px;
      }
    `};
`;

const StyledRadio = styled(Radio).withConfig({
  shouldForwardProp: (prop) => ![].includes(prop),
})`
  font-size: 12px;
  @media screen and (max-width: 480px) {
    &&.ant-radio-wrapper {
      padding-bottom: 5px;
    }
  }
`;

StyledRadio.Group = StyledRadioGroup;
export default StyledRadio;
