import Title from '@/components/Elements/Title';
import Layout from '@/components/Elements/Layout';
import Content from '@/components/Elements/Content';
import Input from '@/components/Elements/Input';
import Button from '@/components/Elements/Button';
import Link from '@/components/Elements/Link';
import Checkbox from '@/components/Elements/Checkbox';

export default function SampleComponent(){
   
  return(
    <>
      <Layout>
        <Content heightScreen>
          <Title >StoryBook B</Title>
          <br/>
          <label>Email</label>
          <br/>
          <Input label="Email" type="email" placeholder="Enter your email Address"></Input>
          <br/>
          <label>Password</label>
          <br/>
          <Input type="password" placeholder="Password"></Input>
          <br/>
          <div style={{ margin: '1rem 0', width: '80%', display: 'flex', justifyContent: 'space-between', }}>
            <Checkbox>Check this</Checkbox>
            <Link href="#" name="Link here"></Link>
          </div>
          <Button>Login</Button>
          <div>
                        Lorem ipsum dolor sit amet? <Link href="#" name="Link somewhere"></Link>
          </div>
        </Content>
      </Layout>
    </>
  );
}