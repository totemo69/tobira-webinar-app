import { memo, useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { compose } from 'redux';
import { createStructuredSelector } from 'reselect';
import { Typography, Row, Col, Spin, Modal, message } from 'antd';
import { useTranslation } from 'next-i18next';
import { useRouter } from 'next/router';
import {
  makeSelectLoading,
  makeSelectLoadingStatus,
  makeSelectError,
} from '@/states/global/selector';
import {
  getWebinarPublic,
  doRegister,
  doPay,
  doConfirmRegister,
} from '@/states/webinar/actions';
import {
  makeSelectWebinarPublic,
  makeSelectWebinarAttendee,
  makeSelectWebinarPayment,
} from '@/states/webinar/selector';
import { clearErrors } from '@/states/global/actions';
import { WEBINAR_ROUTE, LOADING_PREFIX } from '@/utils/constants';
import validationMessage from '@/messages/validation';
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

export function Register({
  getWebinarDetails,
  isConfirmationLoading,
  confirmationStatus,
  errorMessage,
  isRegistering,
  webinarDetails,
  register,
  attendeeDetails,
  paymentDetails,
  payment,
  freePayment,
  clearErrorMessage,
}) {
  const route = useRouter();
  const { slug } = route.query;
  const { locale } = route;
  const { t } = useTranslation();

  const [isModalVisible, setIsmodalVisible] = useState(false);

  useEffect(() => {
    getWebinarDetails({ slug });
  }, []);

  const [step, setStep] = useState(REGISTER_STEPS.DETAIL);
  const nextStep = () => setStep(step + 1);
  const prevStep = () => setStep(step - 1);
  const goToDetails = () => {
    route.push(`${WEBINAR_ROUTE.WEBINAR_DETAIL}/${slug}`);
  };

  const onCheckOut = () => {
    register();
  };

  useEffect(() => {
    if (Object.keys(attendeeDetails).length > 0) {
      setIsmodalVisible(true);
      if (webinarDetails.price > 0) {
        payment({
          callbackUrl: `${locale}${WEBINAR_ROUTE.WEBINAR_DETAIL}/${slug}`,
          webinarId: attendeeDetails.webinarId,
          attendeeId: attendeeDetails.id,
        });
      } else {
        freePayment({
          webinarId: webinarDetails.id,
          attendeeId: attendeeDetails.id,
          lang: locale,
        });
      }
    }
  }, [attendeeDetails]);

  useEffect(() => {
    if (errorMessage) {
      const { message: msg } = errorMessage.error;
      message.error(t(validationMessage[msg]));
      clearErrorMessage();
    }
  }, [errorMessage]);

  useEffect(() => {
    if (!isConfirmationLoading) {
      if (confirmationStatus) {
        route.push(`${WEBINAR_ROUTE.WEBINAR_DETAIL}/${slug}/register-complete`);
      }
    }
  }, [isConfirmationLoading, confirmationStatus]);

  useEffect(() => {
    if (Object.keys(paymentDetails).length > 0) {
      const approvalLink = paymentDetails.paymentDetails.links.find(
        (link) => link.rel === 'approve',
      );
      window.location = `${approvalLink.href}`;
    }
  }, [paymentDetails]);

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
            <WebinarRegistrationForm
              formDetails={webinarDetails}
              prevStep={goToDetails}
              nextStep={nextStep}
            />
          )}
          {step === REGISTER_STEPS.SUMMARY && (
            <TicketSummary
              webinarDetails={webinarDetails}
              prevStep={prevStep}
              nextStep={nextStep}
            />
          )}
          {step === REGISTER_STEPS.COMPLETE && (
            <ChoosePayment
              prevStep={prevStep}
              checkOut={onCheckOut}
              isLoading={isRegistering}
            />
          )}
        </Col>
      </Row>
      <Modal visible={isModalVisible} closable={false} footer={null}>
        <Row type="flex" justify="center" align="middle">
          <Spin size="large" style={{ display: 'block' }} />
        </Row>
      </Modal>
    </>
  );
}

Register.propTypes = {
  getWebinarDetails: PropTypes.func,
  isConfirmationLoading: PropTypes.bool,
  confirmationStatus: PropTypes.bool,
  isRegistering: PropTypes.bool,
  // isPaying: PropTypes.bool,
  errorMessage: PropTypes.any,
  webinarDetails: PropTypes.any,
  register: PropTypes.func,
  payment: PropTypes.func,
  attendeeDetails: PropTypes.any,
  paymentDetails: PropTypes.any,
  freePayment: PropTypes.any,
  clearErrorMessage: PropTypes.func,
};

const mapStateToProps = createStructuredSelector({
  isConfirmationLoading: makeSelectLoading(LOADING_PREFIX.REGISTER_CONFIRM),
  confirmationStatus: makeSelectLoadingStatus(LOADING_PREFIX.REGISTER_CONFIRM),
  isRegistering: makeSelectLoading(LOADING_PREFIX.REGISTER),
  // isPaying: makeSelectLoading(LOADING_PREFIX.PAYMENT),
  errorMessage: makeSelectError(),
  webinarDetails: makeSelectWebinarPublic(),
  attendeeDetails: makeSelectWebinarAttendee(),
  paymentDetails: makeSelectWebinarPayment(),
});

const mapDispatchProps = (dispatch) => ({
  getWebinarDetails: (payload) => dispatch(getWebinarPublic(payload)),
  register: () => dispatch(doRegister()),
  payment: (payload) => dispatch(doPay(payload)),
  freePayment: (payload) => dispatch(doConfirmRegister(payload)),
  clearErrorMessage: () => dispatch(clearErrors()),
});

const withConnect = connect(mapStateToProps, mapDispatchProps);

export default compose(withConnect, memo)(Register);
