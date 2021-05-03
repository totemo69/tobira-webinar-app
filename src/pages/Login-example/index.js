import Layout from '@/components/Elements/Layout'
import Content from '@/components/Elements/Content'
import Title from '@/components/Elements/SampleTitle'
import Form from '@/components/Elements/Form'
import Input from '@/components/Elements/Input'
import CheckBox from '@/components/Elements/CheckBox'
import Link from '@/components/Elements/Link'
import Button from '@/components/Elements/Button'
import { Row, Col } from 'antd'

export default function LoginSample() {
    return (
        <>
            <Layout bgGray>
                <Content bgNone>
                    <Row>
                        <Col span={12}>
                            <Form>
                                <Title marginBottom>Login</Title>
                                <div style={{ marginTop: '1rem', }}>
                                    <label style={{ fontSize: '12px', fontWeight: '600', }}>Email Address<span style={{color: 'red'}}>*</span></label>
                                    <br/>
                                    <Input id="email" type="email" placeholder="Enter your email address"></Input>
                                </div>
                                <div style={{ marginTop: '1rem', }}>
                                    <label style={{ fontSize: '12px', fontWeight: '600', }}>Password<span style={{color: 'red'}}>*</span></label>
                                    <br/>
                                    <Input id="password" type="password" placeholder="Enter your password"></Input>
                                </div>
                                <div style={{ marginTop: '1rem', width: '80%', display: 'flex', justifyContent: 'space-between', alignItems: 'center', }}>
                                    <CheckBox>
                                        <span style={{ color: '#4e4e4e', fontSize: '12px', letterSpacing: '0.24px', }}>Remember me</span>
                                    </CheckBox>
                                    <Link href="#" name="Forgot password?"></Link>
                                </div>
                                <div style={{ marginTop: '1rem', }}>
                                    <Button type="primary">Log in</Button>
                                </div>
                                <div style={{ marginTop: '1rem', width: '80%', fontSize: '12px', textAlign: 'center', }}>
                                    Create an account? <Link href="/Signup-example" name="Sign up here"></Link>
                                </div>
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