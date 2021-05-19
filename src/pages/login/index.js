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

export default function Login() {
  const { t } = useTranslation();
  console.log(message.login);
  console.log(globalMessage.email);
  return (
    <>
      <Layout>
        <Row>
          <Col span={12}>
            <Form
              layout="vertical"
            >
              <Title marginBottom>{t(globalMessage.login)}</Title>
              <Div>
                <Labels asterisk>{t(globalMessage.email)}</Labels>
                <Input type="email" placeholder={t(globalMessage.enterEmail)}></Input>
              </Div>
              <Div>
                <Labels asterisk>{t(globalMessage.password)}</Labels>
                <Input type="email" placeholder={t(globalMessage.enterPassword)}></Input>
              </Div>
              <Div marginY betweenCenter>
                <Checkbox content={t(message.rememberMe)}></Checkbox>
                <Link href="/forgot-password" name={t(globalMessage.forgotPassword)}></Link>
              </Div>
              <Button type="primary">{t(globalMessage.login)}</Button>
              <Div center>
                {t(message.createAccount)} <Link href="/sign-up" name={t(message.signHere)}></Link>
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