import Title from '@/components/Elements/Title'
import Layout from '@/components/Elements/Layout'
import Content from '@/components/Elements/Content'
import Input from '@/components/Elements/Input'
import Button from '@/components/Elements/Button'

export default function SampleComponent(){
   
    return(
        <>
                <Layout>
                    <Content>
                        <Title >LOGIN</Title>
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
                        <Button>Login</Button>
                    </Content>
                </Layout>
        </>
    )
}