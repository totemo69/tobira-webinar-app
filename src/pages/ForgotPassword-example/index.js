import { useTranslation } from 'next-i18next';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import globalMessage from '@/messages/global';
import message from '@/messages/forgotpasswordsample';

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

export default function LoginSample() {
  const { t } = useTranslation();
  return (
    <>
      <Layout bgGray>
        <Content bgNone>
          <Row>
            <Col span={12}>
              <Form
                layout="vertical"
              >
                <Title>{t(globalMessage.forgotPassword)}</Title>
                <Div marginY lightText>{t(message.forgotPasswordText)}.</Div>
                <Div>
                  <Labels asterisk>{t(globalMessage.email)}</Labels>
                  <Input type="email" placeholder={t(globalMessage.enterEmail)}></Input>
                </Div>
                <Button type="primary" marginTop>{t(globalMessage.sendEmail)}</Button>
                <Div marginTop center>
                    <Link href="/Login-example" name={t(message.goToLogin)}></Link>
                </Div>
              </Form>
            </Col>
            <Col span={12}>
              <Div marginBottom center>
                  <Image src={"Images/logo.svg"} alt="Tobira Logo" logo />
              </Div>
              <Image src={"Images/illustration2.svg"} alt="Forgot password Illustration" larger />
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