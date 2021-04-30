import Layout from '@/components/Elements/Layout'
import Content from '@/components/Elements/Content'
import Title from '@/components/Elements/Title'
import Form from '@/components/Elements/Form'
import Input from '@/components/Elements/Input'
import CheckBox from '@/components/Elements/CheckBox'
import Link from '@/components/Elements/Link'
import Button from '@/components/Elements/Button'
import { Row, Col } from 'antd'

export default function SignupSample() {
    return (
        <>
            <Layout bgGray>
                <Content bgNone>
                    <Row>
                        <Col span={12}>
                            <Form>
                                <Title marginBottom>Sign up</Title>
                                <div style={{ marginTop: '0.5rem', }}>
                                    <label style={{ fontSize: '12px', fontWeight: '600', }}>Email Address<span style={{color: 'red'}}>*</span></label>
                                    <br/>
                                    <Input id="email" type="email" placeholder="Email address"></Input>
                                </div>
                                <div style={{ marginTop: '0.5rem', }}>
                                    <label style={{ fontSize: '12px', fontWeight: '600', }}>Username<span style={{color: 'red'}}>*</span></label>
                                    <br/>
                                    <Input id="email" type="email" placeholder="Username"></Input>
                                </div>
                                <div style={{ marginTop: '0.5rem', fontWeight: '600', }}>
                                    <label style={{ fontSize: '12px', }}>Password<span style={{color: 'red'}}>*</span></label>
                                    <br/>
                                    <Input id="password" type="password" placeholder="Password"></Input>
                                </div>
                                <div style={{ marginTop: '0.5rem', fontWeight: '600', }}>
                                    <label style={{ fontSize: '12px', }}>Confirm password<span style={{color: 'red'}}>*</span></label>
                                    <br/>
                                    <Input id="password_confirm" type="password" placeholder="Confirm password"></Input>
                                </div>
                                <div style={{ marginTop: '1rem', width: '80%', fontSize: '12px', color: '#4e4e4e', }}>
                                    By signing up, you agree to the <Link href="#" name="Terms of Service"></Link> and <Link href="#" name="Privacy Policy."></Link>
                                </div>
                                <div style={{ marginTop: '2rem', }}>
                                    <Button type="primary">Sign Up</Button>
                                </div>
                                <div style={{ marginTop: '0.5rem', width: '80%', fontSize: '12px', textAlign: 'center', }}>
                                    Already have an account? <Link href="#" name="Log in here"></Link>
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