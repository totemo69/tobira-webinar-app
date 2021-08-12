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
import { resetPassword } from '@/states/forgot-password/action';
import {
  makeSelectLoading,
  makeSelectLoadingStatus,
  makeSelectError,
} from '@/states/global/selector';
import { clearErrors } from '@/states/global/actions';
import globalMessage from '@/messages/global';
import localMessage from '@/messages/resetPassword';
import validationMessage from '@/messages/validation';
import ErrorMessage from '@/components/Elements/ErrorMessage';
import Layout from '@/components/Layouts/Guest';
import { Row, Col, message } from 'antd';
import Form from '@/components/Elements/Form';
import Title from '@/components/Elements/Title';
import Div from '@/components/Elements/Div';
import Labels from '@/components/Elements/Labels';
import Link from '@/components/Elements/Link';
import Button from '@/components/Elements/Button';
import Image from '@/components/Elements/Image';
import Modal from '@/components/Elements/Modal';
import ButtonLink from '@/components/Elements/ButtonLink';
import InputPassword from '@/components/Elements/Input/password';
import { resetPasswordValidation } from '@/validations/forgot-password';

export function ResetPassword({
  doReset,
  isLoading,
  resetStatus,
  errorMessage,
  clearErrorMessage,
}) {
  const { t } = useTranslation();
  const route = useRouter();
  const { email, token } = route.query;
  const [isOpenModal, setIsOpenModal] = useState(false);

  useEffect(() => {
    if (!isLoading) {
      if (resetStatus && !errorMessage) {
        setIsOpenModal(true);
      } else if (!resetStatus && errorMessage) {
        const { message: msg } = errorMessage.error;
        message.error(t(validationMessage[msg]));
        clearErrorMessage();
      }
    }
  }, [isLoading, resetStatus]);

  /* eslint-disable no-param-reassign */
  const onSubmit = useCallback((values, { resetForm }) => {
    doReset({ email, token, ...values });
    resetForm();
  });

  return (
    <>
      <Layout>
        <Row>
          <Col span={12}>
            <Formik
              initialValues={{
                password: '',
                confirmPassword: '',
              }}
              validationSchema={resetPasswordValidation}
              onSubmit={onSubmit}
            >
              {({ handleSubmit }) => (
                <Form>
                  <Title marginBottom>{t(localMessage.resetPassword)}</Title>
                  <Div>
                    <Labels asterisk>{t(globalMessage.newPassword)}</Labels>
                    <Field
                      id="password"
                      name="password"
                      component={InputPassword}
                      placeholder={t(globalMessage.newPassword)}
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
                  <Button
                    loading={isLoading}
                    type="primary"
                    marginTop
                    onClick={handleSubmit}
                  >
                    {t(localMessage.resetPassword)}
                  </Button>
                  <Div marginTop center>
                    <Link href="/login" name={t(globalMessage.goToLogin)} />
                  </Div>
                </Form>
              )}
            </Formik>
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
                        src="/images/success-icon.svg"
                        alt="success icon"
                        modalIcon
                      />
                      <Title modalTitle>{t(globalMessage.success)}!</Title>
                    </Div>
                    <Div flexColCenter noMargin widthFull heightFull>
                      <Div center marginYLarge>
                        {t(localMessage.resetSuccess)}
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
          </Col>
          <Col span={12}>
            <Div marginBottom center>
              <Image src="/images/logo.svg" alt="Tobira Logo" logo />
            </Div>
            <Image
              src="/images/illustration3.svg"
              alt="Forgot password Illustration"
              twoLarger
            />
          </Col>
        </Row>
      </Layout>
    </>
  );
}
ResetPassword.propTypes = {
  doReset: PropTypes.func,
  isLoading: PropTypes.bool,
  resetStatus: PropTypes.bool,
  errorMessage: PropTypes.any,
  clearErrorMessage: PropTypes.func,
};

const mapStateToProps = createStructuredSelector({
  isLoading: makeSelectLoading(LOADING_PREFIX.FORGOT_PASSWORD),
  resetStatus: makeSelectLoadingStatus(LOADING_PREFIX.FORGOT_PASSWORD),
  errorMessage: makeSelectError(),
});

const mapDispatchProps = (dispatch) => ({
  doReset: (payload) => dispatch(resetPassword(payload)),
  clearErrorMessage: () => dispatch(clearErrors()),
});

const withConnect = connect(mapStateToProps, mapDispatchProps);

export default compose(withConnect)(ResetPassword);

export const getStaticProps = async ({ locale }) => ({
  props: {
    ...(await serverSideTranslations(locale, ['translation'])),
  },
});
