import Title from '@/components/Elements/Title'
import Layout from '@/components/Elements/Layout'
import Content from '@/components/Elements/Content'
import Input from '@/components/Elements/Input'
import Button from '@/components/Elements/Button'
import Link from '@/components/Elements/Link'
import CheckBox from '@/components/Elements/CheckBox'

export default function SampleComponent(){
   
    return(
        <>
                <Layout>
                    <Content>
                        <Title >StoryBook B</Title>
                        <br>
                        </br>
                        <label>Email</label>
                        <br></br>
                        <Input label="Email" type="email" placeholder="Enter your email Address"></Input>
                        <br></br>
                        <label>Password</label>
                        <br></br>
                        <Input type="password" placeholder="Password"></Input>
                        <br/>
                        <div style={{ margin: '1rem 0', width: '80%', display: 'flex', justifyContent: 'space-between', }}>
                            <CheckBox>Check this</CheckBox>
                            <Link href="#" name="Link here"></Link>
                        </div>
                        <Button>Login</Button>
                        <div>
                            Lorem ipsum dolor sit amet? <Link href="#" name="Link somewhere"></Link>
                        </div>
                    </Content>
                </Layout>
        </>
    )
}