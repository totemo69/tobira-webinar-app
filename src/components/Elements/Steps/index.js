


import style, {css} from 'styled-components';
import { Steps } from 'antd';

const { Step } = Steps;

const StyledStep = style(Step).withConfig({
  shouldForwardProp: prop => ![].includes(prop),
})`

`;

const StyledSteps = style(Steps).withConfig({
  shouldForwardProp: prop => ![].includes(prop),
})`
  margin-top: 20px;
  margin-bottom: 20px;
`;


export {
  StyledStep,
  StyledSteps,
}
