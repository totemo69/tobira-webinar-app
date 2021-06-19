import { useTranslation } from 'next-i18next';
import detailMessage from '@/messages/webinarDetail';
import Steps, { Step } from '@/components/Elements/Steps';

const StepItem = (_dot, props) => (
  <div className="square-step">{props.index + 1}</div>
);
const RegisterStepper = () => {
  const { t } = useTranslation();
  return (
    <Steps current={1} labelPlacement="vertical" progressDot={StepItem}>
      <Step title={t(detailMessage.register)} shape="square" />
      <Step title={t(detailMessage.ticketSummary)} shape="square" />
      <Step title={t(detailMessage.complete)} shape="square" />
    </Steps>
  );
};

export default RegisterStepper;
