import { useTranslation } from 'next-i18next';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import { useState } from 'react';
import globalMessage from '@/messages/global';
import message from '@/messages/resetpasswordsample';

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
import Image from '@/components/Elements/Image';
import Modal from '@/components/Elements/Modal'
import ButtonLink from '@/components/Elements/ButtonLink';

export default function ResetPasswordSample() {
  const { t } = useTranslation();
  const [isOpenModal, setIsOpenModal] = useState(false);

  const openModal = () => {
    setIsOpenModal(true);
  }

  const closeModal = () => {
    setIsOpenModal(false);
  }

  return (
    <>
      <Layout bgGray>
        <Content bgNone>
          <Row>
            <Col span={12}>
              <Form
                layout="vertical"
              >
                <Title marginBottom>{t(message.resetPassword)}</Title>
                <Div>
                  <Labels asterisk>{t(globalMessage.newPassword)}</Labels>
                  <Input type="email" placeholder={t(globalMessage.newPassword)}></Input>
                </Div>
                <Div>
                  <Labels asterisk>{t(globalMessage.confirmPassword)}</Labels>
                  <Input type="email" placeholder={t(globalMessage.confirmPassword)}></Input>
                </Div>
                <Button type="primary" marginTop onClick={openModal}>{t(message.resetPassword)}</Button>
                <Div marginTop center>
                  <Link href="/Login-example" name={t(globalMessage.goToLogin)}></Link>
                </Div>
              </Form>
              <Modal isOpen={isOpenModal}
                  onRequestClose={closeModal}
                  ariaHideApp={false} overlayClassName="Overlay"
                  marginTop noPadding
              >
                <Row>
                  <Col span={24}>
                    <Div widthFull flexCol noMargin>
                      <Div modal noMargin center>
                        <Image src={"Images/success-icon.svg"} alt="success icon" modalIcon/>
                        <Title modalTitle>{t(globalMessage.success)}!</Title>
                      </Div>
                      <Div flexColCenter noMargin widthFull heightFull>
                        <Div center marginY2x>{t(message.resetSuccess)}</Div>
                        <ButtonLink href="/Login-example" element={<Button type="primary" marginTop>{t(globalMessage.login)}</Button>} />
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
              <Image src={"Images/illustration3.svg"} alt="Forgot password Illustration" twoLarger />
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