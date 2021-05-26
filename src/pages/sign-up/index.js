import { useTranslation } from 'next-i18next';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import { useState } from 'react';
import globalMessage from '@/messages/global';
import message from '@/messages/signUp';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { register } from '@/states/sign-up/action';
import { compose  } from 'redux';

import Layout from '@/components/Layouts/Guest';
import { Row, Col } from 'antd';
import Title from '@/components/Elements/Title';
import Div from '@/components/Elements/Div';
import Labels from '@/components/Elements/Labels';
import Input from '@/components/Elements/Input';
import Link from '@/components/Elements/Link';
import Button from '@/components/Elements/Button';
import ButtonLink from '@/components/Elements/ButtonLink';
import Modal from '@/components/Elements/Modal';
import Image from '@/components/Elements/Image';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import validationSchema from '@/states/sign-up/validationSchema';


export function SignUp({registerUser}) {
  const { t } = useTranslation();
  console.log(message.signUp);
  console.log(globalMessage.email);

  const [isOpenModal, setIsOpenModal] = useState(false);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [userName, setUserName] = useState('');
  const [firstName] = useState('Reymark');
  const [lastName] = useState('Victorino');
  // const openModal = () => {
  //   setIsOpenModal(true);
  // };

  const closeModal = () => {
    setIsOpenModal(false);
  };

  return (
    <>
      <Layout>
        <Row>
          <Col span={12}>
            
               
            <Formik
              initialValues={{
                email: '',
                password: '',
                confirmPassword: '',
              }}
              validationSchema={validationSchema}
              
            >
              <Form style={{margin: '5rem auto 0', width: '80%'}}>
                <Title marginBottom>{t(message.signUp)}</Title>
                <Labels asterisk>{t(globalMessage.email)}</Labels>
                <Field 
                  type="email" 
                  id="email"
                  name="email"
                  component={Input}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder={t(globalMessage.enterEmail)}
                />
                <ErrorMessage name="email" render={msg => <Div errorMessage>
                  {msg}
                </Div> 
                }/>
                <Labels asterisk>{t(globalMessage.username)}</Labels>
                <Field 
                  id="userName"
                  value={userName}
                  component={Input}
                  onChange={(e) => setUserName(e.target.value)}
                  placeholder={t(globalMessage.enterUsername)}
                />
                  

                <Labels asterisk>{t(globalMessage.password)}</Labels>
                <Field 
                  id="password"
                  value={password}
                  component={Input}
                  onChange={(e) => setPassword(e.target.value)}
                  type="password" placeholder={t(globalMessage.enterPassword)}
                />

                <ErrorMessage name="password" render={msg =><Div errorMessage>
                  {msg}
                </Div> }/>

                <Labels asterisk>{t(globalMessage.confirmPassword)}</Labels>
                <Field 
                  id="confirmPassword"
                  name="confirmPassword"
                  component={Input}
                  type="password"
                  placeholder={t(globalMessage.confirmPassword)}
                />

                <ErrorMessage name="confirmPassword" render={msg => <Div errorMessage>
                  {msg}
                </Div> }/>

                <Div marginTop center>
                  {t(message.agreeMessage)} <Link href="/terms-of-service-example" name={t(globalMessage.termsOfService)}></Link> {t(globalMessage.and)} <Link href="/privacy-policy-example" name={t(globalMessage.privacyPolicy)}></Link>.
                </Div>
                <Button type="primary" htmlType="submit" onClick={() => registerUser({email, password, firstName, lastName})} marginTop>{t(message.signUp)}</Button>
              </Form>
            </Formik>
              
            <Modal isOpen={isOpenModal}
              onRequestClose={closeModal}
              ariaHideApp={false} overlayClassName="Overlay"
              marginTop noPadding
            >
              <Row>
                <Col span={24}>
                  <Div widthFull noMargin>
                    <Div modal noMargin center>
                      <Image src={"Images/email-sent-icon.svg"} alt="email sent icon" modalIcon/>
                      <Title modalTitle>{t(globalMessage.emailSent)}</Title>
                    </Div>
                    <Div flexColCenter noMargin widthFull heightFull>
                      <Div marginYLarge center>{t(message.verificationMsg)}</Div>
                      <ButtonLink href="/login" element={<Button type="primary" marginTop>{t(globalMessage.login)}</Button>} />
                    </Div>
                  </Div>
                </Col>
              </Row>
            </Modal>
            <Div center>
              {t(message.haveAccount)} <Link href="/login" name={t(message.loginHere)}></Link>
            </Div>
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

SignUp.propTypes = {
  registerUser: PropTypes.func,
};

const mapDispatchProps = (dispatch ) => {
  return {
    registerUser: (email, password, firstName, lastName) => dispatch(register(email, password, firstName, lastName)),
  };
};

const withConnect = connect(
  null,
  mapDispatchProps,
);

export default compose (
  withConnect,
)(SignUp);

export const getStaticProps = async ({ locale }) => ({
  props: {
    ...await serverSideTranslations(locale, ['translation']),
  },
});