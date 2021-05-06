import { useTranslation } from 'next-i18next';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import { useState } from 'react';
import globalMessage from '@/messages/global';
import message from '@/messages/samplesignup';
import Layout from '@/components/Elements/Layout';
import Content from '@/components/Elements/Content';
import { Row, Col } from 'antd';
import Form from '@/components/Elements/Form';
import Title from '@/components/Elements/Title';
import Div from '@/components/Elements/Div';
import Labels from '@/components/Elements/Labels';
import Input from '@/components/Elements/Input';
import Link from '@/components/Elements/Link';
import Button from '@/components/Elements/Button';
import Logo from '@/components/Elements/Logo';
import Modal from '@/components/Elements/Modal'
import Paragraph from '@/components/Elements/SampleParagraph';
import Span from '@/components/Elements/Span'



export default function SignupSample() {
  const { t } = useTranslation();
  console.log(message.signUp);
  console.log(globalMessage.email);

  const [showModal, isShowModal] = useState(false);


  const modalShow = () => {
    isShowModal(true);
  }

  return (
    <>
      <Layout bgGray>
        <Content heightScreen bgNone>
          <Row>
            <Col span={12}>
              <Form
                layout="vertical"
              >
                 
                <Title marginBottom>{t(message.signUp)}</Title>
                <Div>
                  <Labels asterisk>{t(globalMessage.email)}</Labels>
                  <Input type="email" placeholder={t(globalMessage.enterEmail)}></Input>
                </Div>
                <Div>
                  <Labels asterisk>{t(globalMessage.username)}</Labels>
                  <Input type="text" placeholder={t(globalMessage.enterUsername)}></Input>
                </Div>
                <Div>
                  <Labels asterisk>{t(globalMessage.password)}</Labels>
                  <Input type="password" placeholder={t(globalMessage.enterPassword)}></Input>
                </Div>
                <Div>
                  <Labels asterisk>{t(globalMessage.confirmPassword)}</Labels>
                  <Input type="password" placeholder={t(globalMessage.confirmPassword)}></Input>
                </Div>
                <Div marginTop center>
                  {t(message.agreeMessage)} <Link href="#" name={t(message.termsOfService)}></Link> {t(message.and)} <Link href="#" name={t(message.privacyPolicy)}></Link>.
                </Div>
                <Button type="primary" onClick={modalShow} marginTop>{t(message.signUp)}</Button>
                <Modal marginTop isOpen={showModal}>
                  <Div registerComplete>
                    <Logo registerCompleteLogo src={"Images/email-sent-icon.svg"}></Logo>
                    <Paragraph content={'Email sent!'}></Paragraph>
                  </Div>

                  <Div verificationMessage>
                      A verification mail has been sent to your email account. Please check your email and click the link to confirm.
                  </Div>

                  <Button modalLoginButton >Log in</Button>
                </Modal>
                <Div center>
                  {t(message.haveAccount)} <Link href="/Login-example" name={t(message.loginHere)}></Link>
                </Div>
              </Form>
            </Col>
            <Col span={12}>
              <Logo src={"Images/logo.svg"}/>
              <Logo path1 src={"Images/illustration1.svg"}/>
            </Col>
          </Row>
        </Content>
      </Layout>
    </>
  );
}

export const getStaticProps = async ({ locale }) => ({
  props: {
    ...await serverSideTranslations(locale, ['translation']),
  },
});