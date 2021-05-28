import { useTranslation } from 'next-i18next';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import globalMessage from '@/messages/global';
import message from '@/messages/login';

import Layout from '@/components/Layouts/Guest';
import { Row, Col } from 'antd';
import Form from '@/components/Elements/Form';
import Title from '@/components/Elements/Title';
import Div from '@/components/Elements/Div';
import Labels from '@/components/Elements/Labels';
import Input from '@/components/Elements/Input';
import Checkbox from '@/components/Elements/Checkbox';
import Link from '@/components/Elements/Link';
import Button from '@/components/Elements/Button';
import Image from '@/components/Elements/Image';

import { useEffect, useState } from 'react';
import { compose } from 'redux';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { authenticateUser } from '@/states/login/action';

import { Formik, Field, ErrorMessage } from 'formik';
import validationSchema from '@/states/login/validationSchema';

export function Login({ doLogin }) {
  const { t } = useTranslation();
  console.log(message.login);
  console.log(globalMessage.email);
  
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  
  useEffect(() => {
    // code here
  }, []);

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
            >
              <Form>
                <Title marginBottom>{t(globalMessage.login)}</Title>
                <Labels asterisk>{t(globalMessage.email)}</Labels>
                <Field 
                  type="email"
                  id="email"
                  name="email"
                  component={Input}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder={t(globalMessage.enterEmail)}
                />
                <ErrorMessage name="email"
                  render={ msg => <Div errorMessage>{msg}</Div> }
                />
                <Labels asterisk>{t(globalMessage.password)}</Labels>
                <Field 
                  id="password"
                  value={password}
                  component={Input}
                  onChange={(e) => setPassword(e.target.value)}
                  type="password" placeholder={t(globalMessage.enterPassword)}
                />
                <ErrorMessage name="password"
                  render={ msg => <Div errorMessage>{msg}</Div> }
                />
                <Div marginY betweenCenter>
                  <Checkbox content={t(message.rememberMe)}></Checkbox>
                  <Link href="/forgot-password" name={t(globalMessage.forgotPassword)}></Link>
                </Div>
                <Button type="primary" htmlType="submit"
                  onClick={() => doLogin({email, password})}
                >
                  {t(globalMessage.login)}</Button>
                <Div center>
                  {t(message.createAccount)} <Link href="/sign-up" name={t(message.signHere)}></Link>
                </Div>
              </Form>
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
  authenticateUser: PropTypes.func
};

export function mapDispatchToProps(dispatch) {
  return {
    doLogin: ({email, password}) => dispatch(authenticateUser({email, password}))
  };
}

const withConnect = connect(
  null,
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