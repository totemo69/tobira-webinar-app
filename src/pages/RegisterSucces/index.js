import Logo from '@/components/Elements/Logo';
import Layout from '@/components/Elements/Layout';
import Div from '@/components/Elements/Div';
import Button from '@/components/Elements/Button'


export default function SuccessTemplate() {
  return (
    <>
      <Layout>
        <Div registerSuccesfull>
          <Logo src={'Images/logo.svg'}/>
          <Div successLogo>
           <Logo successLogo src={'Images/success.svg'}/>
          </Div>
            <Div ThankYouMessage style={{textAlign: 'center', width: '100%', marginTop: '-80px', font: 'normal normal bold 30px/46px Poppins'}}>
              Thank you!
            </Div>
            <Div successMessage >
              Your account has been successfully activated.
            </Div>
            <Div LoginSuccesButton >
              <Button style={{width: '341px'}} type="primary">Log in</Button>
            </Div>
        </Div>
      </Layout>
    </>
  )
}