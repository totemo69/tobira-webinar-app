import { useTranslation } from 'next-i18next';
import Layout from '@/components/Elements/Layout'
import Content from '@/components/Elements/Content'
import Title from '@/components/Elements/SampleTitle'
import Form from '@/components/Elements/Form'
import Input from '@/components/Elements/Input'
import CheckBox from '@/components/Elements/CheckBox'
import Link from '@/components/Elements/Link'
import Button from '@/components/Elements/Button'
import Label from '@/components/Elements/Label'
import Div from '@/components/Elements/Div'
import message from '@/messages/SampleSignup'
import { Row, Col } from 'antd'

export default function SignupSample() {
    const {t} = useTranslation();
    return (
        <>
            <Layout bgGray>
                <Content bgNone>
                    <Row>
                        <Col span={12}>
                            <Form>
                                <Title marginBottom>{t(message.SignUp)}</Title>
                                
                                    <Label>{t(message.EmailAddress)}<span style={{color: 'red'}}>*</span></Label>
                                    <Input id="email" type="email" placeholder={t(message.EmailAddress)}></Input>
                               
                                
                                    <Label>{t(message.Username)}<span style={{color: 'red'}}>*</span></Label>
                                    <Input id="email" type="email" placeholder={t(message.Username)}></Input>
                               
                                
                                    <Label>{t(message.Password)}<span style={{color: 'red'}}>*</span></Label>
                                    <Input id="password" type="password" placeholder={t(message.Password)}></Input>
                                
                                
                                    <Label>{t(message.ConfirmPassword)}<span style={{color: 'red'}}>*</span></Label>
                                    <Input id="password_confirm" type="password" placeholder={t(message.ConfirmPassword)}></Input>
                               
                                    <Div SignUp>
                                    {t(message.AgreeMessage)} <Link href="#" name={t(message.TermsOfService)}></Link> {t(message.And)} <Link href="#" name={t(message.PrivacyPolicy)}></Link>
                                    </Div>
                                   
                                    <Button type="primary">{t(message.SignUp)}</Button>
                                
                                    <Div LoginHere>
                                        {t(message.HaveAccount)} <Link href="/Login-example" name={t(message.LoginHere)}></Link>
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