import Steps, { Step } from '@/components/Elements/Steps';

const StepItem = (dot, props) => {
  console.log(props);
  return <div className="square-step">{props.index}</div>;
};

const RegisterStepper = () => (
  <Steps current={1} labelPlacement="vertical" progressDot={StepItem}>
    <Step title="Register" shape="square" />
    <Step title="Ticket Summary" shape="square" />
    <Step title="Complete" shape="square" />
  </Steps>
);

export default RegisterStepper;
