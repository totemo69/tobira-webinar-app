import PropTypes from 'prop-types';
import { useTranslation } from 'next-i18next';
import detailMessage from '@/messages/webinarDetail';
import Steps, { Step } from '@/components/Elements/Steps';

const StepItem = (_dot, props) => (
  <div className="square-step">{props.index + 1}</div>
);
const RegisterStepper = ({ currentStep }) => {
  const { t } = useTranslation();
  return (
    <Steps
      current={currentStep}
      labelPlacement="vertical"
      progressDot={StepItem}
    >
      <Step title={t(detailMessage.register)} shape="square" />
      <Step title={t(detailMessage.ticketSummary)} shape="square" />
      <Step title={t(detailMessage.complete)} shape="square" />
    </Steps>
  );
};

RegisterStepper.propTypes = {
  currentStep: PropTypes.number,
};

export default RegisterStepper;
