import React, { memo, useEffect, useState } from 'react';
import Layout from '@/components/Layouts/Home';
import Div from '@/components/Elements/Div';
import globalMessage from '@/messages/global';
import message from '@/messages/webinar';
import { useTranslation } from 'next-i18next';
import Title from '@/components/Elements/Title';
import Span from '@/components/Elements/Span';
import Card from '@/components/Elements/Card';
import localMessage from '@/messages/createProfile';
import CreateWebinarPage from '@/components/Modules/Webinars/CreateDetails';
import RegistrationDetails from '@/components/Modules/Webinars/RegistrationDetails';
import PaymentOptions from '@/components/Modules/Webinars/PaymentOptions';
import { StyledStep, StyledSteps } from '@/components/Elements/Steps';
import Button from '@/components/Elements/Button';
import { useRouter } from 'next/router';
import PropTypes from 'prop-types';
import { LOADING_PREFIX, WEBINAR_ROUTE } from '@/utils/constants';
import { createStructuredSelector } from 'reselect';
import {
  makeSelectError,
  makeSelectLoading,
  makeSelectLoadingStatus,
} from '@/states/global/selector';
import { makeSelectAccountList } from '@/states/accounts/selector';
import {
  makeSelectWebinarDetails,
  makeSelectWebinarForm,
} from '@/states/webinar/selector';
import { getZoomAccount } from '@/states/accounts/actions';
import { createWebinar } from '@/states/webinar/actions';
import { connect } from 'react-redux';
import { compose } from 'redux';
import { withAuthSync } from '@/lib/auth';
import SuccessModal from '@/components/Modules/Webinars/SuccessModal';

export function Update({
  isLoading,
  submitStatus,
  errorMessage,
  getZoomAccounts,
  zoomAccountList,
  webinarFormDetails,
  doCreateWebinar,
  webinarDetails,
}) {
  const { t } = useTranslation();
  const route = useRouter();
  const [current, setCurrent] = useState(0);
  const [submitStep1, setSubmitStep1] = useState();
  const [submitStep2, setSubmitStep2] = useState();
  const [submitStep3, setSubmitStep3] = useState();
  const [submitFormStatus, setsubmitFormStatus] = useState(false);
  const [submitting, setSubmitting] = useState(false);
  const [successModal, setSuccessModal] = useState(false);

  const submitStatusBind = (e) => {
    setsubmitFormStatus(e);
  };

  const onCloseModal = () => {
    setSuccessModal(!successModal);
    route.push(WEBINAR_ROUTE.LIST_WEBINAR);
  };

  useEffect(() => {
    getZoomAccounts();
  }, []);

  useEffect(() => {
    if (!isLoading && submitting) {
      setSubmitting(false);
      if (submitStatus) {
        setSuccessModal(!successModal);
      } else if (errorMessage) {
        message.error(errorMessage);
      }
    }
  }, [isLoading, submitStatus, errorMessage]);

  useEffect(() => {
    // if Form doesn't have error, go to next step
    if (submitFormStatus) {
      if (current === step.length - 1) {
        setSubmitting(true);
        doCreateWebinar();
      } else {
        setCurrent(current + 1);
      }

      // Make false again for checking and listening to form submitting status
      setsubmitFormStatus(false);
    }
  }, [submitFormStatus]);

  const setStep1Wrapper = (action) => {
    if (!submitStep1) {
      setSubmitStep1(() => () => action());
    }
  };

  const setStep2Wrapper = (action) => {
    if (!submitStep2) {
      setSubmitStep2(() => () => action());
    }
  };

  const setStep3Wrapper = (action) => {
    if (!submitStep3) {
      setSubmitStep3(() => () => action());
    }
  };

  const step = [
    {
      title: t(localMessage.details),
      Content: (
        <CreateWebinarPage
          submitStatus={submitStatusBind}
          setSubmitForm={setStep1Wrapper}
          webinarForm={webinarFormDetails}
          zoomAccounts={zoomAccountList}
        />
      ),
    },
    {
      title: t(localMessage.registration),
      Content: (
        <RegistrationDetails
          submitStatus={submitStatusBind}
          setSubmitForm={setStep2Wrapper}
          webinarForm={webinarFormDetails}
        />
      ),
    },
    {
      title: t(localMessage.paymentOptions),
      Content: (
        <PaymentOptions
          submitStatus={submitStatusBind}
          setSubmitForm={setStep3Wrapper}
          webinarForm={webinarFormDetails}
        />
      ),
    },
  ];

  const next = async () => {
    // Execute child component formik submit form
    // Make false again for checking and listening to form submitting status
    setsubmitFormStatus(false);
    if (current === 0) {
      await submitStep1();
    } else if (current === 1) {
      await submitStep2();
    } else if (current === 2) {
      await submitStep3();
    }
  };

  const prev = () => {
    setCurrent(current - 1);
  };

  return (
    <>
      <Layout>
        <Div marginBottomLarge flexTop>
          <Title secondary marginRight>
            {t(message.updateWebinar)} {'>'}
          </Title>
          <Span breadCrumbs>{t(message.details)}</Span>
        </Div>
        <Div widthFull>
          <Card webinarRegistrationCard>
            <StyledSteps current={current}>
              {step.map((item) => (
                <StyledStep key={item.title} title={item.title} />
              ))}
            </StyledSteps>

            {step[current].Content}

            {current < step.length - 1 && (
              <>
                <Button onClick={() => next()} NextButton type="primary">
                  {t(message.next)} {'>'}
                </Button>
              </>
            )}
            {current === step.length - 1 && (
              <Button
                loading={isLoading}
                onClick={() => next()}
                NextButton
                type="primary"
              >
                {t(globalMessage.submit)}
              </Button>
            )}
            {current > 0 && (
              <Button onClick={() => prev()} BackButton>
                {'<'} {t(globalMessage.back)}
              </Button>
            )}
          </Card>
        </Div>
        <SuccessModal
          isOpenModal={successModal}
          closeModal={onCloseModal}
          webinarUrl={webinarDetails && webinarDetails.slug}
        />
      </Layout>
    </>
  );
}

Update.propTypes = {
  getZoomAccounts: PropTypes.func,
  webinarFormDetails: PropTypes.any,
  zoomAccountList: PropTypes.array,
  isLoading: PropTypes.bool,
  errorMessage: PropTypes.any,
  doCreateWebinar: PropTypes.func,
  submitStatus: PropTypes.any,
  webinarDetails: PropTypes.any,
};

const mapStateToProps = createStructuredSelector({
  isLoading: makeSelectLoading(LOADING_PREFIX.CREATE_WEBINAR),
  isAccountLoading: makeSelectLoading(LOADING_PREFIX.ACCOUNT),
  submitStatus: makeSelectLoadingStatus(LOADING_PREFIX.CREATE_WEBINAR),
  zoomAccountList: makeSelectAccountList(),
  errorMessage: makeSelectError(),
  webinarFormDetails: makeSelectWebinarForm(),
  webinarDetails: makeSelectWebinarDetails(),
});

const mapDispatchProps = (dispatch) => ({
  getZoomAccounts: () => dispatch(getZoomAccount()),
  doCreateWebinar: () => dispatch(createWebinar()),
});

const withConnect = connect(mapStateToProps, mapDispatchProps);

export default compose(withConnect, memo)(withAuthSync(Update));
