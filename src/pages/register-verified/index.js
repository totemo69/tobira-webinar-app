import { useState, useEffect } from 'react';
import { createStructuredSelector } from 'reselect';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { compose } from 'redux';
import { useTranslation } from 'next-i18next';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import { useRouter } from 'next/router';
import { Spin } from 'antd';
import globalMessage from '@/messages/global';
import { LOADING_PREFIX } from '@/utils/constants';
import { verify } from '@/states/sign-up/action';
import {
  makeSelectLoading,
  makeSelectLoadingStatus,
  makeSelectError,
} from '@/states/global/selector';
import Layout from '@/components/Layouts/Guest';
import Div from '@/components/Elements/Div';
import Image from '@/components/Elements/Image';
import Title from '@/components/Elements/Title';
import ButtonLink from '@/components/Elements/ButtonLink';
import Button from '@/components/Elements/Button';

export function RegisterVerified({
  doVerifyAccount,
  isLoadingVerification,
  verificationStatus,
  // errorMessage,
}) {
  const { t } = useTranslation();
  const route = useRouter();

  // Loading on render while waiting for status
  const [isLoading, setIsLoading] = useState(true);
  useEffect(() => {
    const timer = setTimeout(() => {
      onConfirmationLoad();
    }, 1000);
    return () => clearTimeout(timer);
  }, [route]);

  const onConfirmationLoad = async () => {
    if (route.query.email && route.query.activationToken) {
      const { email, activationToken } = route.query;
      doVerifyAccount({ email, activationToken });
    }
  };

  useEffect(() => {
    if (verificationStatus) {
      setIsLoading(false);
    }
  }, [isLoadingVerification, verificationStatus]);

  return (
    <>
      <Layout>
        <Div widthFull marginTopXLarge center>
          <Image src="/images/logo.svg" alt="Tobira Logo" logo />
        </Div>
        {!isLoading && (
          <Div marginTop widthFull center>
            <Image src="/images/success.svg" alt="Tobira Logo" successImg />
            <Title secondary2 marginBottom>
              {t(globalMessage.thankYou)}!
            </Title>
            <p>{t(globalMessage.accountActivated)}.</p>
            <ButtonLink
              href="/login"
              element={
                <Button type="primary" mediumBtn marginTopMedium>
                  {t(globalMessage.login)}
                </Button>
              }
            />
          </Div>
        )}
        {isLoading && (
          <Div marginTop widthFull center>
            <Spin size="large" />
          </Div>
        )}
      </Layout>
    </>
  );
}

RegisterVerified.propTypes = {
  doVerifyAccount: PropTypes.func,
  isLoadingVerification: PropTypes.bool,
  verificationStatus: PropTypes.bool,
  // errorMessage: PropTypes.any,
};

const mapStateToProps = createStructuredSelector({
  isLoadingVerification: makeSelectLoading(LOADING_PREFIX.VERIFICATION),
  verificationStatus: makeSelectLoadingStatus(LOADING_PREFIX.VERIFICATION),
  errorMessage: makeSelectError(),
});

const mapDispatchProps = (dispatch) => ({
  doVerifyAccount: (payload) => dispatch(verify(payload)),
});

const withConnect = connect(mapStateToProps, mapDispatchProps);

export default compose(withConnect)(RegisterVerified);

export const getStaticProps = async ({ locale }) => ({
  props: {
    ...(await serverSideTranslations(locale, ['translation'])),
  },
});
