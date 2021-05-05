import { useTranslation } from 'next-i18next';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import { useState } from 'react';
import globalMessage from '@/messages/global';

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

export default function ForgotPasswordSample() {
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
                <Title marginBottom>Reset Password</Title>
                <Div>
                  <Labels asterisk>New Password</Labels>
                  <Input type="email" placeholder="New Password"></Input>
                </Div>
                <Div>
                  <Labels asterisk>Confirm Password</Labels>
                  <Input type="email" placeholder="Confirm Password"></Input>
                </Div>
                <Button type="primary" marginTop onClick={openModal}>Reset Password</Button>
                <Div marginTop center>
                  <Link href="/Login-example" name="Go Back To Log in"></Link>
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
                        <Image src={"Images/success-icon.svg"} alt="email sent icon" modalIcon/>
                        <Title modalTitle>Success!</Title>
                      </Div>
                      <Div flexColCenter noMargin widthFull heightFull>
                        <Div center marginY2x>Password has been reset successfully.</Div>
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