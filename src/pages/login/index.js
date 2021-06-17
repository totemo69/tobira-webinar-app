import React, { useState, useCallback } from 'react';
import { useTranslation } from 'next-i18next';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import { createStructuredSelector } from 'reselect';
import { compose } from 'redux';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { Formik, Field } from 'formik';
import { Row, Col } from 'antd';
import globalMessage from '@/messages/global';
import message from '@/messages/login';

import Layout from '@/components/Layouts/Guest';
import Form from '@/components/Elements/Form';
import Title from '@/components/Elements/Title';
import Div from '@/components/Elements/Div';
import Labels from '@/components/Elements/Labels';
import Input from '@/components/Elements/Input';
import Checkbox from '@/components/Elements/Checkbox';
import Link from '@/components/Elements/Link';
import Button from '@/components/Elements/Button';
import Image from '@/components/Elements/Image';
import ErrorMessage from '@/components/Elements/ErrorMessage';

import { authenticateUser } from '@/states/login/action';
import { makeSelectIsLogin } from '@/states/login/selector';
import validationSchema from '@/validations/login';

export function Login({ doLogin }) {
  const { t } = useTranslation();
  const [isLoading, setIsLoading] = useState(false);

  const onSubmit = useCallback((values) => {
    console.log(values);
    setIsLoading(true);
    doLogin(values, errors => {
      console.log(errors);
      // translateApiError(errors, formikAction, intl);
      setIsLoading(false);
    });
  });

  return (
    <>
      <Layout>
        <Row>
          <Col span={12}>
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
                      component={Input}
                      type="password"
                      placeholder={t(globalMessage.enterPassword)}
                    />
                    <ErrorMessage name="password" />
                  </Div>
                  <Div marginY betweenCenter>
                    <Checkbox content={t(message.rememberMe)}></Checkbox>
                    <Link href="/forgot-password" name={t(globalMessage.forgotPassword)}></Link>
                  </Div>
                  <Button loading={isLoading} type="primary" onClick={handleSubmit} htmlType="submit">
                    {t(globalMessage.login)}
                  </Button>
                  <Div center>
                    {t(message.createAccount)} <Link href="/sign-up" name={t(message.signHere)}></Link>
                  </Div>
                </Form>
              )}
            </Formik>
          </Col>
          <Col span={12}>
            <Div marginBottom center>
              <Image src={"Images/logo.svg"} alt="Tobira Logo" logo />
            </Div>
            <Image src={"Images/illustration1.svg"} alt="Webinar Illustration" large />
          </Col>
        </Row>
      </Layout>
    </>
  );
}

Login.propTypes = {
  authenticateUser: PropTypes.func,
  isLoggedIn: PropTypes.bool,
};

const mapStateToProps = createStructuredSelector({
  isLoggedIn: makeSelectIsLogin(),
});

export function mapDispatchToProps(dispatch) {
  return {
    doLogin: (payload, errCallback) => dispatch(authenticateUser(payload, errCallback))
  };
}


const withConnect = connect(
  mapStateToProps,
  mapDispatchToProps
);

export default compose(
  withConnect,
)(Login);

export const getStaticProps = async ({ locale }) => ({
  props: {
    ...await serverSideTranslations(locale, ['translation']),
  },
});