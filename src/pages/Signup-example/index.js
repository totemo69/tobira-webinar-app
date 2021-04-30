import Title from '@/components/Elements/Title'
import Input from '@/components/Elements/Input'
import Button from '@/components/Elements/Button'
import Link from '@/components/Elements/Link'
import Content from '@/components/Elements/Content'



export default function SignUpSample(){
    return(
        <>
        
            <Content SignUp>
            <Title Webinar>WEBINAR</Title>
            <div className="Form">
                

                <Title SignUp>Sign up</Title>
                        
                        <label style={{marginTop: '43px'}}>Email Address<span style={{color: 'red'}}>*</span></label>
                        <br></br>
                            <Input SignUp id="email" type="email" placeholder="Email Address"></Input>
                        <br></br>
                            <label>Username<span style={{color: 'red'}}>*</span></label>
                        <br></br>
                            <Input SignUp  type="text" placeholder="Username"></Input>
                        <br></br>
                            <label>Password<span style={{color: 'red'}}>*</span></label>
                        <br></br>
                            <Input SignUp type="password" placeholder="Password"></Input>
                        <br></br>
                            <label>Confirm Password<span style={{color: 'red'}}>*</span></label>
                        <br></br>
                            <Input SignUp type="password" placeholder="Confirm Password"></Input>
                        <div>
                            <span className="Policy">
                                By signing up, you agree to the <Link href="#" name="Terms of Service"></Link> and  <Link href="#" name="Privacy Policy"></Link>
                            </span>
                        </div>
                        <div>
                            <Button BtnSignUp>Sig Up</Button>
                        </div>
                        <div className="LoginLink">
                            
                                Already have an account? <Link href="#" name="Log In here"></Link>
                           
                        </div>
            </div>
            </Content>
            
        
        </>
    )
}