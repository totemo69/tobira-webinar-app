/* v2 Passed  */
import style, { css } from 'styled-components';
import { Steps } from 'antd';

const { Step } = Steps;

const StyledStep = style(Step).withConfig({
  shouldForwardProp: (prop) => !['square'].includes(prop),
})`
  ${(props) =>
    props.shape === 'square' &&
    css`
      .ant-steps-item-icon {
        background-color: var(--accentColorLight) !important;
        border-radius: 8px !important;
        width: 50px !important;
        height: 50px !important;
        .ant-steps-icon {
          top: 16.5px !important;
          font-weight: bold !important;
        }
        border-color: transparent !important;
      }

      .ant-steps-item-content {
        width: 185px !important;
      }

      .ant-steps-item-tail {
        top: 22px !important;
        left: 35px !important;
      }
      .ant-steps-item-tail::after {
        height: 3px !important;
      }
      .ant-steps-icon {
        color: #ffff !important;
      }

      .ant-steps-item-title {
        font-size: 1.2rem !important;
        font-weight: 500 !important;
      }

      &.ant-steps-item-wait
        > .ant-steps-item-container
        > .ant-steps-item-content
        > .ant-steps-item-title {
        color: var(--accentColor);
      }
      &.ant-steps-item-finish .ant-steps-item-icon {
        background-color: var(--backgroundColorAccent) !important;
      }

      &.ant-steps-item-finish .ant-steps-item-content .ant-steps-item-title {
        color: var(--backgroundColorAccent);
      }
    `}

  // Mobile
  @media screen and (max-width: 480px) {
    .ant-steps-item-content {
      width: 100px !important;
    }
    .ant-steps-item-title {
      font-size: 0.72rem !important;
      font-weight: 500 !important;
    }
    .ant-steps-item-icon{
      margin-left: 27px;
    }
    .ant-steps-item-tail{
      left: -5px !important;
    }
  }    

`;

const StyledSteps = style(Steps).withConfig({
  shouldForwardProp: (prop) => ![].includes(prop),
})`
  margin-top: 20px;
  margin-bottom: 20px;
`;

export { StyledStep, StyledSteps, StyledStep as Step };

export default StyledSteps;
