import { useTranslation } from 'next-i18next';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import { useState } from 'react';
import globalMessage from '@/messages/global';
import message from '@/messages/sign-up';

import Layout from '@/components/Layouts/Guest';
import { Row, Col } from 'antd';
import Form from '@/components/Elements/Form';
import Title from '@/components/Elements/Title';
import Div from '@/components/Elements/Div';
import Labels from '@/components/Elements/Labels';
import Input from '@/components/Elements/Input';
import Link from '@/components/Elements/Link';
import Button from '@/components/Elements/Button';
import ButtonLink from '@/components/Elements/ButtonLink';
import Modal from '@/components/Elements/Modal';
import Image from '@/components/Elements/Image';

export default function SignUp() {
  const { t } = useTranslation();
  console.log(message.signUp);
  console.log(globalMessage.email);

  const [isOpenModal, setIsOpenModal] = useState(false);

  const openModal = () => {
    setIsOpenModal(true);
  };

  const closeModal = () => {
    setIsOpenModal(false);
  };

  return (
    <>
      <Layout>
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
                {t(message.agreeMessage)} <Link href="/terms-of-service-example" name={t(message.termsOfService)}></Link> {t(message.and)} <Link href="/privacy-policy-example" name={t(message.privacyPolicy)}></Link>.
              </Div>
              <Button type="primary" onClick={openModal} marginTop>{t(message.signUp)}</Button>
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
            </Form>
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

export const getStaticProps = async ({ locale }) => ({
  props: {
    ...await serverSideTranslations(locale, ['translation']),
  },
});