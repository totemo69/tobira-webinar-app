import PropTypes from 'prop-types';
import { createStructuredSelector } from 'reselect';
import { connect } from 'react-redux';
import { compose } from 'redux';
import { useState, useCallback, useEffect } from 'react';
import { Formik, Field } from 'formik';
import { useTranslation } from 'next-i18next';
import { useRouter } from 'next/router';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import { LOADING_PREFIX } from '@/utils/constants';
import { forgotPassword } from '@/states/forgot-password/action';
import {
  makeSelectLoading,
  makeSelectLoadingStatus,
  makeSelectError,
} from '@/states/global/selector';
import { clearErrors } from '@/states/global/actions';
import globalMessage from '@/messages/global';
import localMessage from '@/messages/forgotPassword';
import validationMessage from '@/messages/validation';
import Layout from '@/components/Layouts/Guest';
import { Row, Col, message } from 'antd';
import Form from '@/components/Elements/Form';
import ErrorMessage from '@/components/Elements/ErrorMessage';
import Title from '@/components/Elements/Title';
import Div from '@/components/Elements/Div';
import Labels from '@/components/Elements/Labels';
import Input from '@/components/Elements/Input';
import Link from '@/components/Elements/Link';
import Button from '@/components/Elements/Button';
import Image from '@/components/Elements/Image';
import Modal from '@/components/Elements/Modal';
import ButtonLink from '@/components/Elements/ButtonLink';
import forgotPasswordValidation from '@/validations/forgot-password';
import Language from '@/components/Modules/Language';

export function ForgotPassword({
  doForgot,
  isLoading,
  forgotStatus,
  errorMessage,
  clearErrorMessage,
}) {
  const { t } = useTranslation();
  const route = useRouter();
  const { locale } = route;
  const [isOpenModal, setIsOpenModal] = useState(false);

  useEffect(() => {
    if (!isLoading) {
      if (forgotStatus && !errorMessage) {
        setIsOpenModal(true);
      } else if (!forgotStatus && errorMessage) {
        const { message: msg } = errorMessage.error;
        message.error(t(validationMessage[msg]));
        clearErrorMessage();
      }
    }
  }, [isLoading, forgotStatus]);

  /* eslint-disable no-param-reassign */
  const onSubmit = useCallback((values, { resetForm }) => {
    doForgot({ ...values, lang: locale });
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
              }}
              validationSchema={forgotPasswordValidation}
              onSubmit={onSubmit}
            >
              {({ handleSubmit }) => (
                <Form>
                  <Title>{t(globalMessage.forgotPassword)}</Title>
                  <Div marginY widthLong lightText>
                    {t(message.forgotPasswordText)}.
                  </Div>
                  <Div>
                    <Labels asterisk>{t(globalMessage.email)}</Labels>
                    <Field
                      type="email"
                      id="email"
                      name="email"
                      component={Input}
                      placeholder={t(globalMessage.enterEmail)}
                    />
                    <ErrorMessage name="email" />
                  </Div>
                  <Button
                    type="primary"
                    marginTop
                    btnCenter
                    loading={isLoading}
                    onClick={handleSubmit}
                  >
                    {t(globalMessage.sendEmail)}
                  </Button>
                  <Div marginTop center>
                    <Link href="/login" name={t(globalMessage.goToLogin)} />
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
            <Modal
              isOpen={isOpenModal}
              onRequestClose={() => setIsOpenModal(false)}
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
                      <Title modalTitle>{t(globalMessage.checkMail)}</Title>
                    </Div>
                    <Div withPadding noMargin widthFull heightFull center>
                      <p>{t(localMessage.recoverInstructions)}</p>
                      <p>{t(localMessage.checkSpam)}</p>
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
          </Col>
          <Col xs={24} lg={12}>
            <Div marginBottom center>
              <Image src="/images/logo.svg" alt="Tobira Logo" logo />
            </Div>
            <Image
              src="/images/illustration2.svg"
              alt="Forgot password Illustration"
              larger
              hideLogo
            />
          </Col>
        </Row>
      </Layout>
    </>
  );
}

ForgotPassword.propTypes = {
  doForgot: PropTypes.func,
  isLoading: PropTypes.bool,
  forgotStatus: PropTypes.bool,
  errorMessage: PropTypes.any,
  clearErrorMessage: PropTypes.func,
};

const mapStateToProps = createStructuredSelector({
  isLoading: makeSelectLoading(LOADING_PREFIX.FORGOT_PASSWORD),
  forgotStatus: makeSelectLoadingStatus(LOADING_PREFIX.FORGOT_PASSWORD),
  errorMessage: makeSelectError(),
});

const mapDispatchProps = (dispatch) => ({
  doForgot: (payload) => dispatch(forgotPassword(payload)),
  clearErrorMessage: () => dispatch(clearErrors()),
});

const withConnect = connect(mapStateToProps, mapDispatchProps);

export default compose(withConnect)(ForgotPassword);

export const getStaticProps = async ({ locale }) => ({
  props: {
    ...(await serverSideTranslations(locale, ['translation'])),
  },
});
