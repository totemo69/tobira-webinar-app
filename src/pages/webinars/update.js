import React, { memo, useEffect, useState } from 'react';
import { message } from 'antd';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import Layout from '@/components/Layouts/Home';
import Div from '@/components/Elements/Div';
import globalMessage from '@/messages/global';
import { useTranslation } from 'next-i18next';
import Title from '@/components/Elements/Title';
import Span from '@/components/Elements/Span';
import Card from '@/components/Elements/Card';
import localMessage from '@/messages/webinar';
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
  makeSelectWebinarUpdateForm,
} from '@/states/webinar/selector';
import { getZoomAccount } from '@/states/accounts/actions';
import {
  updateWebinar,
  getWebinarDetail,
  setUpdateWebinar,
  clearWebinar,
} from '@/states/webinar/actions';
import { connect } from 'react-redux';
import { compose } from 'redux';
import { withAuthSync } from '@/lib/auth';
import SuccessModal from '@/components/Modules/Webinars/SuccessModal';

export function Update({
  isLoading,
  isUpdateLoading,
  submitStatus,
  errorMessage,
  getZoomAccounts,
  getWebinar,
  setWebinarForm,
  zoomAccountList,
  webinarFormDetails,
  doUpdateWebinar,
  webinarDetails,
  cleanWebinar,
}) {
  const { t } = useTranslation();
  const route = useRouter();
  const { id } = route.query;
  const [current, setCurrent] = useState(0);
  const [submitStep1, setSubmitStep1] = useState();
  const [submitStep2, setSubmitStep2] = useState();
  const [submitStep3, setSubmitStep3] = useState();
  const [submitFormStatus, setsubmitFormStatus] = useState(false);
  const [submitting, setSubmitting] = useState(false);
  const [successModal, setSuccessModal] = useState(false);
  const [fetching, setFetching] = useState(false);

  const submitStatusBind = (e) => {
    setsubmitFormStatus(e);
  };

  const onCloseModal = () => {
    setSuccessModal(!successModal);
    route.push(WEBINAR_ROUTE.LIST_WEBINAR);
  };

  useEffect(() => {
    if (id) {
      setFetching(true);
      getWebinar({ id });
    }
  }, [id]);

  useEffect(() => {
    getZoomAccounts();
  }, []);

  useEffect(() => {
    if (!isLoading && fetching) {
      if (Object.keys(webinarDetails).length > 0) {
        // Cleaning previous values
        setFetching(false);
        cleanWebinar();
        setWebinarForm(webinarDetails);
      }
    }
  }, [isLoading]);

  useEffect(() => {
    if (!isUpdateLoading) {
      if (submitting) {
        if (submitStatus && !errorMessage) {
          setSuccessModal(!successModal);
          cleanWebinar();
        } else {
          message.error(errorMessage);
        }
      }
    }
  }, [isUpdateLoading, submitting]);

  useEffect(() => {
    // if Form doesn't have error, go to next step
    if (submitFormStatus) {
      if (current === step.length - 1) {
        setSubmitting(true);
        doUpdateWebinar();
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
          isUpdate
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
          isUpdate
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
            {t(localMessage.updateWebinar)} {'>'}
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
              <>
                <Button onClick={() => next()} NextButton type="primary">
                  {t(globalMessage.next)} {'>'}
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
                {t(globalMessage.update)}
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
          isUpdate
        />
      </Layout>
    </>
  );
}

Update.propTypes = {
  getZoomAccounts: PropTypes.func,
  getWebinar: PropTypes.func,
  setWebinarForm: PropTypes.func,
  webinarFormDetails: PropTypes.any,
  zoomAccountList: PropTypes.array,
  isLoading: PropTypes.bool,
  errorMessage: PropTypes.any,
  doUpdateWebinar: PropTypes.func,
  isUpdateLoading: PropTypes.bool,
  submitStatus: PropTypes.any,
  webinarDetails: PropTypes.any,
  cleanWebinar: PropTypes.func,
};

const mapStateToProps = createStructuredSelector({
  isLoading: makeSelectLoading(LOADING_PREFIX.WEBINAR_DETAILS),
  isAccountLoading: makeSelectLoading(LOADING_PREFIX.ACCOUNT),
  isUpdateLoading: makeSelectLoading(LOADING_PREFIX.UPDATE_WEBINAR),
  submitStatus: makeSelectLoadingStatus(LOADING_PREFIX.UPDATE_WEBINAR),
  zoomAccountList: makeSelectAccountList(),
  errorMessage: makeSelectError(),
  webinarFormDetails: makeSelectWebinarUpdateForm(),
  webinarDetails: makeSelectWebinarDetails(),
});

const mapDispatchProps = (dispatch) => ({
  getZoomAccounts: () => dispatch(getZoomAccount()),
  doUpdateWebinar: () => dispatch(updateWebinar()),
  getWebinar: (payload) => dispatch(getWebinarDetail(payload)),
  setWebinarForm: (payload) => dispatch(setUpdateWebinar(payload)),
  cleanWebinar: () => dispatch(clearWebinar()),
});

const withConnect = connect(mapStateToProps, mapDispatchProps);

export default compose(withConnect, memo)(withAuthSync(Update));

export const getStaticProps = async ({ locale }) => ({
  props: {
    ...(await serverSideTranslations(locale, ['translation'])),
  },
});
