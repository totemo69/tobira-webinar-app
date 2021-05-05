import Logo from '@/components/Elements/Logo';
import Content from '@/components/Elements/Content';
import Layout from '@/components/Elements/Layout';
import Div from '@/components/Elements/Div';
import Title from '@/components/Elements/SampleTitle';
import Button from '@/components/Elements/Button';
import Footer from '@/components/Elements/Footer';
import Link from '@/components/Elements/Link';

export default function TermsOfService(){
  return(
    <>
      <Layout bgGray>
        <Logo TermsOfService src={"Images/logo.svg"}/>
        <Content contentTOS>
          <Title TermsOfService>TERMS OF SERVICE</Title>
          <Div TermsOfService>
                                    Terms of service are the legal agreements between a service provider and a person who wants to use that service.
            <br></br>
            <br></br>
                                he person must agree to abide by the terms of service in order to use the offered service. Terms of service can also be merely a disclaimer, especially regarding the use of websites.
            <br></br>
            <br></br>
                                Having this agreement helps you set out the rules and guidelines that your users or visitors must agree to in order to use your website or app such as:
            <br></br>
            <br></br>

            <ul>
              <li>
                                        Not stealing your content and violating copyright laws
              </li>
              <li>
                                        Not spamming other users
              </li>
              <li>
                                        Not using your site for illegal activities
              </li>
                                    
            </ul>

            <br></br>
            <br></br>
                                These agreements are commonly abbreviated as ToS and are also referred to as a Terms and Conditions agreement, Conditions of Use, or User Agreement.
                                
            <br></br>
            <br></br>
                                Regardless of what you call your Terms of Service, the aim of the agreement is the same:
            <br></br>
            <br></br>
            <ul>
              <li>
                                        Disclose the rules and restrictions that your users must adhere to
              </li>
              <li>
                                        Maintain your right to terminate abusive accounts
              </li>
              <li>
                                        Make your copyright, trademark and intellectual property rights known
              </li>
              <li>
                                        Limit your liability
              </li>
              <li>
                                        Disclaim warranties
              </li>
                                    
            </ul>
            <Button TermsOfService type="primary">Go back to previous page</Button>
          </Div>
                            
        </Content>
        <Footer TermsOfService >Copyright © 2021 Tobira Webinar Video Communications, Inc. All rights reserved. <Link href="#" name="Terms of Service"></Link> and  <Link href="#" name="Privacy Policy"></Link> </Footer>
      </Layout>
    </>
  );
}