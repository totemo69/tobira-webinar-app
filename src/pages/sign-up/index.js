import { useState, useCallback, useEffect } from 'react';
import { useTranslation } from 'next-i18next';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import { createStructuredSelector } from 'reselect';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { compose } from 'redux';
import { Row, Col, message } from 'antd';
import { Formik, Field } from 'formik';
import { useRouter } from 'next/router';
import { LOADING_PREFIX } from '@/utils/constants';
import { signUp } from '@/states/sign-up/action';
import {
  makeSelectLoading,
  makeSelectLoadingStatus,
  makeSelectError,
} from '@/states/global/selector';
import { clearErrors } from '@/states/global/actions';
import validationSchema from '@/validations/signup';
import globalMessage from '@/messages/global';
import localMessage from '@/messages/signUp';
import validationMessage from '@/messages/validation';
import Layout from '@/components/Layouts/Guest';
import Title from '@/components/Elements/Title';
import Div from '@/components/Elements/Div';
import Labels from '@/components/Elements/Labels';
import Input from '@/components/Elements/Input';
import InputPassword from '@/components/Elements/Input/password';
import Link from '@/components/Elements/Link';
import Button from '@/components/Elements/Button';
import ButtonLink from '@/components/Elements/ButtonLink';
import Modal from '@/components/Elements/Modal';
import Image from '@/components/Elements/Image';
import Form from '@/components/Elements/Form';
import ErrorMessage from '@/components/Elements/ErrorMessage';
import Language from '@/components/Modules/Language';

export function SignUp({
  doSignUp,
  isLoading,
  signupStatus,
  errorMessage,
  clearErrorMessage,
}) {
  const { t } = useTranslation();
  const route = useRouter();
  const { locale } = route;
  const [successModal, setSuccessModal] = useState(false);
  const [onSignup, setOnsignup] = useState(false);

  useEffect(() => {
    if (!isLoading) {
      if (onSignup) {
        if (signupStatus && !errorMessage) {
          setSuccessModal(true);
        } else if (!signupStatus && errorMessage) {
          const { message: msg } = errorMessage.error;
          message.error(t(validationMessage[msg]));
          clearErrorMessage();
        }
        // setOnsignup(false);
      }
    }
  }, [isLoading, onSignup]);

  /* eslint-disable no-param-reassign */
  const onSubmit = useCallback((values, { resetForm }) => {
    delete values.confirmPassword;
    setOnsignup(true);
    doSignUp({ ...values, lang: locale });
    resetForm();
  });

  return (
    <>
      <Layout>
        <Row>
          <Col xs={24} lg={12}>
            <Formik
              initialValues={{
                email: '',
                username: '',
                password: '',
                confirmPassword: '',
              }}
              validationSchema={validationSchema}
              onSubmit={onSubmit}
            >
              {({ handleSubmit }) => (
                <Form>
                  <Title marginBottom>{t(localMessage.signUp)}</Title>
                  <Labels asterisk>{t(globalMessage.email)}</Labels>
                  <Div marginBottom>
                    <Field
                      type="email"
                      id="email"
                      name="email"
                      component={Input}
                      placeholder={t(globalMessage.enterEmail)}
                    />
                    <ErrorMessage name="email" />
                  </Div>
                  <Labels asterisk>{t(globalMessage.username)}</Labels>
                  <Div marginBottom>
                    <Field
                      id="username"
                      name="username"
                      component={Input}
                      placeholder={t(globalMessage.enterUsername)}
                    />
                    <ErrorMessage name="username" />
                  </Div>
                  <Labels asterisk>{t(globalMessage.password)}</Labels>
                  <Div marginBottom>
                    <Field
                      id="password"
                      name="password"
                      component={InputPassword}
                      placeholder={t(globalMessage.enterPassword)}
                    />
                    <ErrorMessage name="password" />
                  </Div>
                  <Div>
                    <Labels asterisk>{t(globalMessage.confirmPassword)}</Labels>
                    <Field
                      id="confirmPassword"
                      name="confirmPassword"
                      component={InputPassword}
                      placeholder={t(globalMessage.confirmPassword)}
                    />
                    <ErrorMessage name="confirmPassword" />
                  </Div>
                  <Div marginTop center>
                    {t(message.agreeMessage)}{' '}
                    <Link
                      href="/terms-of-service"
                      name={t(globalMessage.termsOfService)}
                    />{' '}
                    {t(globalMessage.and)}{' '}
                    <Link
                      href="/privacy-policy"
                      name={t(globalMessage.privacyPolicy)}
                    />
                    .
                  </Div>
                  <Button
                    type="primary"
                    htmlType="submit"
                    onClick={handleSubmit}
                    marginTop
                    btnCenter
                  >
                    {t(localMessage.signUp)}
                  </Button>
                </Form>
              )}
            </Formik>
            <Div center>
              {t(localMessage.haveAccount)}{' '}
              <Link href="/login" name={t(localMessage.loginHere)} />
            </Div>
            <Row
              align="middle"
              justify="center"
              style={{ paddingLeft: '12vw', marginTop: 8 }}
            >
              <Language locale={locale} route={route} />
            </Row>
          </Col>
          <Col xs={24} lg={12}>
            <Div marginBottom center>
              <Image
                src="/images/tobiracreators_transparent.png"
                alt="Tobira Logo"
                logo
              />
            </Div>
            <Image
              hideLogo
              src="/images/illustration1.svg"
              alt="Webinar Illustration"
              large
            />
          </Col>
        </Row>
        <Modal
          isOpen={successModal}
          onRequestClose={() => setSuccessModal(false)}
          ariaHideApp={false}
          overlayClassName="Overlay"
          marginTop
          noPadding
        >
          <Row>
            <Col span={24}>
              <Div widthFull noMargin>
                <Div modal noMargin center>
                  <Image
                    src="/images/email-sent-icon.svg"
                    alt="email sent icon"
                    modalIcon
                  />
                  <Title modalTitle>{t(globalMessage.emailSent)}</Title>
                </Div>
                <Div flexColCenter noMargin widthFull heightFull>
                  <Div marginYLarge center>
                    {t(localMessage.verificationMsg)}
                  </Div>
                  <ButtonLink
                    href="/login"
                    element={
                      <Button type="primary" marginTop>
                        {t(globalMessage.login)}
                      </Button>
                    }
                  />
                </Div>
              </Div>
            </Col>
          </Row>
        </Modal>
      </Layout>
    </>
  );
}

SignUp.propTypes = {
  doSignUp: PropTypes.func,
  isLoading: PropTypes.bool,
  signupStatus: PropTypes.bool,
  errorMessage: PropTypes.any,
  clearErrorMessage: PropTypes.func,
};

const mapStateToProps = createStructuredSelector({
  isLoading: makeSelectLoading(LOADING_PREFIX.SIGNUP),
  signupStatus: makeSelectLoadingStatus(LOADING_PREFIX.SIGNUP),
  errorMessage: makeSelectError(),
});

const mapDispatchProps = (dispatch) => ({
  doSignUp: (payload) => dispatch(signUp(payload)),
  clearErrorMessage: () => dispatch(clearErrors()),
});

const withConnect = connect(mapStateToProps, mapDispatchProps);

export default compose(withConnect)(SignUp);

export const getStaticProps = async ({ locale }) => ({
  props: {
    ...(await serverSideTranslations(locale, ['translation'])),
  },
});
