import { memo, useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { compose } from 'redux';
import { createStructuredSelector } from 'reselect';
import { useTranslation } from 'next-i18next';
import { message } from 'antd';
import { useRouter } from 'next/router';

import { LOADING_PREFIX, WEBINAR_ROUTE } from '@/utils/constants';
import {
  makeSelectLoading,
  makeSelectError,
  makeSelectLoadingStatus,
} from '@/states/global/selector';
import { getZoomAccount } from '@/states/accounts/actions';
import { createWebinar, clearWebinar } from '@/states/webinar/actions';
import { makeSelectAccountList } from '@/states/accounts/selector';
import {
  makeSelectWebinarForm,
  makeSelectWebinarDetails,
} from '@/states/webinar/selector';
import { withAuthSync } from '@/lib/auth';

import localMessage from '@/messages/webinar';
import globaMessage from '@/messages/global';

import RegistrationDetails from '@/components/Modules/Webinars/RegistrationDetails';
import PaymentOptions from '@/components/Modules/Webinars/PaymentOptions';
import CreateWebinarPage from '@/components/Modules/Webinars/CreateDetails';
import SuccessModal from '@/components/Modules/Webinars/SuccessModal';

import Div from '@/components/Elements/Div';
import Title from '@/components/Elements/Title';
import Span from '@/components/Elements/Span';
import Card from '@/components/Elements/Card';
import { StyledSteps, StyledStep } from '@/components/Elements/Steps';
import Button from '@/components/Elements/Button';

export function CreateWebinar({
  isLoading,
  submitStatus,
  errorMessage,
  getZoomAccounts,
  zoomAccountList,
  webinarFormDetails,
  doCreateWebinar,
  webinarDetails,
  cleanWebinar,
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
    cleanWebinar();
    getZoomAccounts();
  }, []);

  useEffect(() => {
    if (!isLoading && submitting) {
      setSubmitting(false);
      if (submitStatus) {
        setSuccessModal(!successModal);
        cleanWebinar();
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
      breadCrumbs: t(localMessage.details),
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
      breadCrumbs: t(localMessage.registration),
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
      breadCrumbs: t(localMessage.paymentOptions),
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
      <Div marginBottomLarge flexTop>
        <Title secondary marginRight>
          {t(localMessage.createWebinar)} {'>'}
        </Title>
        <Span breadCrumbs>{step[current].breadCrumbs}</Span>
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
            <Button onClick={() => next()} NextButton type="primary">
              {t(globaMessage.next)} {'>'}
            </Button>
          )}
          {current === step.length - 1 && (
            <Button
              loading={isLoading}
              onClick={() => next()}
              NextButton
              type="primary"
            >
              {t(globaMessage.submit)}
            </Button>
          )}
          {current > 0 && (
            <Button onClick={() => prev()} BackButton>
              {'<'} {t(globaMessage.back)}
            </Button>
          )}
        </Card>
      </Div>
      <SuccessModal
        isOpenModal={successModal}
        closeModal={onCloseModal}
        webinarUrl={webinarDetails && webinarDetails.slug}
      />
    </>
  );
}

CreateWebinar.propTypes = {
  getZoomAccounts: PropTypes.func,
  webinarFormDetails: PropTypes.any,
  zoomAccountList: PropTypes.array,
  isLoading: PropTypes.bool,
  errorMessage: PropTypes.any,
  doCreateWebinar: PropTypes.func,
  submitStatus: PropTypes.any,
  webinarDetails: PropTypes.any,
  cleanWebinar: PropTypes.func,
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
  cleanWebinar: () => dispatch(clearWebinar()),
});

const withConnect = connect(mapStateToProps, mapDispatchProps);

export default compose(withConnect, memo)(withAuthSync(CreateWebinar));
