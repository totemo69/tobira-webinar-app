import Logo from '@/components/Elements/Logo';
import Layout from '@/components/Elements/Layout';
import Content from '@/components/Elements/Content';
import Div from '@/components/Elements/Div';
import Button from '@/components/Elements/Button'


export default function SuccessTemplate() {
  return (
    <>
      <Layout bgGray>
        <Content bgNone heightScreen>
          <Div registerSuccesfull>
            <Logo src={'Images/logo.svg'}/>
            <Div successLogo>
            <Logo successLogo src={'Images/success.svg'}/>
            </Div>
              <Div ThankYouMessage>
                Thank you!
              </Div>
              <Div successMessage >
                Your account has been successfully activated.
              </Div>
              <Div LoginSuccesButton >
                <Button mediumBtn type="primary">Log in</Button>
              </Div>
          </Div>
        </Content>
      </Layout>
    </>
  )
}