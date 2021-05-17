import { useTranslation } from 'next-i18next';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import { useState } from 'react';
import globalMessage from '@/messages/global';
import message from '@/messages/forgot-password';

import Layout from '@/components/Layouts/Guest';
import { Row, Col } from 'antd';
import Form from '@/components/Elements/Form';
import Title from '@/components/Elements/Title';
import Div from '@/components/Elements/Div';
import Labels from '@/components/Elements/Labels';
import Input from '@/components/Elements/Input';
import Link from '@/components/Elements/Link';
import Button from '@/components/Elements/Button';
import Image from '@/components/Elements/Image';
import Modal from '@/components/Elements/Modal';
import ButtonLink from '@/components/Elements/ButtonLink';

export default function ForgotPassword() {
  const { t } = useTranslation();
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
              <Title>{t(globalMessage.forgotPassword)}</Title>
              <Div marginY widthLong lightText>{t(message.forgotPasswordText)}.</Div>
              <Div>
                <Labels asterisk>{t(globalMessage.email)}</Labels>
                <Input type="email" placeholder={t(globalMessage.enterEmail)}></Input>
              </Div>
              <Button type="primary" marginTop onClick={openModal}>{t(globalMessage.sendEmail)}</Button>
              <Div marginTop center>
                <Link href="/login" name={t(globalMessage.goToLogin)}></Link>
              </Div>
            </Form>
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
                      <Title modalTitle>{t(globalMessage.checkMail)}</Title>
                    </Div>
                    <Div withPadding noMargin widthFull heightFull center>
                      <p>{t(message.recoverInstructions)}</p>
                      <p>{t(message.checkSpam)}</p>
                      <ButtonLink href="/login" element={<Button type="primary" marginTop>{t(globalMessage.login)}</Button>} />
                    </Div>
                  </Div>
                </Col>
              </Row>
            </Modal>
          </Col>
          <Col span={12}>
            <Div marginBottom center>
              <Image src={"Images/logo.svg"} alt="Tobira Logo" logo />
            </Div>
            <Image src={"Images/illustration2.svg"} alt="Forgot password Illustration" larger />
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