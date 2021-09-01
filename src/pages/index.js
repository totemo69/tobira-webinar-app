import React, { useEffect, useCallback } from 'react';
import PropTypes from 'prop-types';
import { useTranslation } from 'next-i18next';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import { createStructuredSelector } from 'reselect';
import { compose } from 'redux';
import { connect } from 'react-redux';
import { useRouter } from 'next/router';
import { Formik, Field } from 'formik';
import { Row, Col, message } from 'antd';
import globalMessage from '@/messages/global';
import localMessage from '@/messages/login';
import validationMessage from '@/messages/validation';
import { LOADING_PREFIX } from '@/utils/constants';
import {
  makeSelectLoading,
  makeSelectLoadingStatus,
  makeSelectError,
} from '@/states/global/selector';
import { clearErrors } from '@/states/global/actions';
import Layout from '@/components/Layouts/Guest';
import Form from '@/components/Elements/Form';
import Title from '@/components/Elements/Title';
import Div from '@/components/Elements/Div';
import Labels from '@/components/Elements/Labels';
import Input from '@/components/Elements/Input';
import InputPassword from '@/components/Elements/Input/password';
import Checkbox from '@/components/Elements/Checkbox';
import Link from '@/components/Elements/Link';
import Button from '@/components/Elements/Button';
import Image from '@/components/Elements/Image';
import ErrorMessage from '@/components/Elements/ErrorMessage';
import { authenticateUser } from '@/states/login/action';
import validationSchema from '@/validations/login';
import Language from '@/components/Modules/Language';

export function Login({
  doLogin,
  isLoading,
  loginStatus,
  errorMessage,
  clearErrorMessage,
}) {
  const { t } = useTranslation();
  const route = useRouter();
  const { locale } = route;
  const onSubmit = useCallback((values) => {
    doLogin(values);
  });

  useEffect(() => {
    if (!isLoading) {
      if (!loginStatus && errorMessage) {
        const { message: msg } = errorMessage.error;
        message.error(t(validationMessage[msg]));
        clearErrorMessage();
      }
    }
  }, [isLoading, loginStatus]);

  return (
    <>
      <Layout>
        <Row type="flex" align="middle" justify="center">
          <Col align="middle" justify="center" xs={24} sm={24} lg={12}>
            <Formik
              initialValues={{
                email: '',
                password: '',
              }}
              validationSchema={validationSchema}
              onSubmit={onSubmit}
            >
              {({ handleSubmit }) => (
                <Form>
                  <Title marginBottom>{t(globalMessage.login)}</Title>
                  <Labels asterisk>{t(globalMessage.email)}</Labels>
                  <Div marginBottom>
                    <Field
                      type="email"
                      name="email"
                      component={Input}
                      placeholder={t(globalMessage.enterEmail)}
                    />
                    <ErrorMessage name="email" />
                  </Div>
                  <Labels asterisk>{t(globalMessage.password)}</Labels>
                  <Div>
                    <Field
                      name="password"
                      component={InputPassword}
                      placeholder={t(globalMessage.enterPassword)}
                    />
                    <ErrorMessage name="password" />
                  </Div>
                  <Div marginY betweenCenter>
                    <Checkbox content={t(localMessage.rememberMe)} />
                    <Link
                      href="/forgot-password"
                      name={t(globalMessage.forgotPassword)}
                    />
                  </Div>
                  <Button
                    loading={isLoading}
                    type="primary"
                    onClick={handleSubmit}
                    htmlType="submit"
                  >
                    {t(globalMessage.login)}
                  </Button>
                  <Div center>
                    {t(localMessage.createAccount)}{' '}
                    <Link href="/sign-up" name={t(localMessage.signHere)} />
                  </Div>
                </Form>
              )}
            </Formik>
            <Row
              align="middle"
              justify="center"
              style={{ paddingLeft: '12vw', marginTop: 8 }}
            >
              <Language locale={locale} route={route} />
            </Row>
          </Col>
          <Col xs={24} sm={24} lg={12}>
            <Div marginBottom center>
              <Image
                src="/images/tobiracreators_transparent.png"
                alt="Tobira Logo"
                logo
              />
            </Div>
            <Image
              src="/images/illustration1.svg"
              alt="Webinar Illustration"
              large
              style={{ width: '100%' }}
              hideLogo
            />
          </Col>
        </Row>
      </Layout>
    </>
  );
}

Login.propTypes = {
  doLogin: PropTypes.func,
  isLoading: PropTypes.bool,
  loginStatus: PropTypes.bool,
  errorMessage: PropTypes.any,
  clearErrorMessage: PropTypes.func,
};

const mapStateToProps = createStructuredSelector({
  isLoading: makeSelectLoading(LOADING_PREFIX.LOGIN),
  loginStatus: makeSelectLoadingStatus(LOADING_PREFIX.LOGIN),
  errorMessage: makeSelectError(),
});

export function mapDispatchToProps(dispatch) {
  return {
    doLogin: (payload, errCallback) =>
      dispatch(authenticateUser(payload, errCallback)),
    clearErrorMessage: () => dispatch(clearErrors()),
  };
}

const withConnect = connect(mapStateToProps, mapDispatchToProps);

export default compose(withConnect)(Login);

export const getStaticProps = async ({ locale }) => ({
  props: {
    ...(await serverSideTranslations(locale, ['translation'])),
  },
});
