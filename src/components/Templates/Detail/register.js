import { useState } from 'react';
import { Typography, Row, Col } from 'antd';
import { useTranslation } from 'next-i18next';
import detailMessage from '@/messages/webinarDetail';
import RegisterStepper from '@/components/Modules/Detail/RegisterStepper';
import WebinarRegistrationForm from '@/components/Modules/Detail/RegisterForm';
import TicketSummary from '@/components/Modules/Detail/TicketSummary';
import ChoosePayment from '@/components/Modules/Detail/ChoosePayment';
import classNames from './Detail.module.css';

const { Title } = Typography;
const REGISTER_STEPS = {
  DETAIL: 0,
  SUMMARY: 1,
  COMPLETE: 2,
};

export default function Register() {
  const { t } = useTranslation();
  const [step, setStep] = useState(REGISTER_STEPS.COMPLETE);
  const nextStep = () => setStep(step + 1);
  const prevStep = () => setStep(step - 1);
  return (
    <>
      <Row align="middle" justify="center">
        <Col
          xs={{
            span: 24,
          }}
        >
          <RegisterStepper currentStep={step} />
        </Col>
      </Row>
      {[REGISTER_STEPS.DETAIL, REGISTER_STEPS.SUMMARY].includes(step) && (
        <Row align="middle" justify="center">
          <Title level={1} className={classNames.title}>
            {step === REGISTER_STEPS.DETAIL && t(detailMessage.register)}
            {step === REGISTER_STEPS.SUMMARY && t(detailMessage.ticketSummary)}
          </Title>
        </Row>
      )}
      <Row align="middle" justify="center">
        <Col
          span={18}
          xs={{
            span: 22,
          }}
          lg={{
            span: 18,
          }}
        >
          {step === REGISTER_STEPS.DETAIL && (
            <WebinarRegistrationForm nextStep={nextStep} />
          )}
          {step === REGISTER_STEPS.SUMMARY && (
            <TicketSummary prevStep={prevStep} nextStep={nextStep} />
          )}
          {step === REGISTER_STEPS.COMPLETE && (
            <ChoosePayment prevStep={prevStep} />
          )}
        </Col>
      </Row>
    </>
  );
}
