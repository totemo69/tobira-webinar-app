import { useTranslation } from 'next-i18next';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import globalMessage from '@/messages/global';
import message from '@/messages/loginsample';

import Layout from '@/components/Elements/Layout';
import Content from '@/components/Elements/Content';
import { Row, Col } from 'antd';
import Form from '@/components/Elements/Form';
import Title from '@/components/Elements/SampleTitle';
import Div from '@/components/Elements/Div';
import Labels from '@/components/Elements/Labels';
import Input from '@/components/Elements/Input';
import CheckBox from '@/components/Elements/CheckBox';
import Link from '@/components/Elements/Link';
import Button from '@/components/Elements/Button';

export default function LoginSample() {
    const { t } = useTranslation();
    console.log(message.login);
    console.log(globalMessage.email);
    return (
        <>
            <Layout bgGray>
                <Content bgNone>
                    <Row>
                        <Col span={12}>
                            <Form
                                layout="vertical"
                            >
                                <Title marginBottom>{t(message.login)}</Title>
                                <Div>
                                    <Labels asterisk>{t(globalMessage.email)}</Labels>
                                    <Input type="email" placeholder={t(globalMessage.enterEmail)}></Input>
                                </Div>
                                <Div>
                                    <Labels asterisk>{t(globalMessage.password)}</Labels>
                                    <Input type="email" placeholder={t(globalMessage.enterPassword)}></Input>
                                </Div>
                                <Div marginY betweenCenter>
                                    <CheckBox content={t(message.rememberMe)}></CheckBox>
                                    <Link href="#" name={t(message.forgotPassword)}></Link>
                                </Div>
                                <Button type="primary">{t(message.login)}</Button>
                                <Div center>
                                    {t(message.createAccount)} <Link href="/Signup-example" name={t(message.signHere)}></Link>
                                </Div>
                            </Form>
                        </Col>
                        <Col span={12}>
                            <Title logo>WEBINAR</Title>
                        </Col>
                    </Row>
                </Content>
            </Layout>
        </>
    )
}

export const getStaticProps = async ({ locale }) => ({
    props: {
      ...await serverSideTranslations(locale, ['translation']),
    },
  })