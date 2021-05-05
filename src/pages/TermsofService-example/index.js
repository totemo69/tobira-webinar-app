import Logo from '@/components/Elements/Logo';
import Content from '@/components/Elements/Content';
import Layout from '@/components/Elements/Layout';
import Div from '@/components/Elements/Div';
import Title from '@/components/Elements/Title';
import Button from '@/components/Elements/Button';
import Footer from '@/components/Elements/Footer';
import Link from '@/components/Elements/Link';
import Paragraph from '@/components/Elements/SampleParagraph';
import List from '@/components/Elements/SampleListing';

export default function TermsOfService(){
  return(
    <>
      <Layout bgGray>
        <Logo TermsOfService src={"Images/logo.svg"}/>
        <Content contentTOS>
          <Title TermsOfService>TERMS OF SERVICE</Title>
          <Div Triangle></Div>
          <Div TermsOfService>
            <Paragraph content={' Terms of service are the legal agreements between a service provider and a person who wants to use that service.'}></Paragraph>

            <Paragraph content={' he person must agree to abide by the terms of service in order to use the offered service. Terms of service can also be merely a disclaimer, especially regarding the use of websites.'}></Paragraph>

            <Paragraph content={'Having this agreement helps you set out the rules and guidelines that your users or visitors must agree to in order to use your website or app such as:'}></Paragraph>
                               
            <List message=" Not stealing your content and violating copyright laws"></List>
            <List message="  Not spamming other users"></List>
            <List message="Not using your site for illegal activities"></List>

            <Paragraph content={" These agreements are commonly abbreviated as ToS and are also referred to as a Terms and Conditions agreement, Conditions of Use, or User Agreement."}></Paragraph>

            <Paragraph content={"  Regardless of what you call your Terms of Service, the aim of the agreement is the same:"}></Paragraph>              
                                
            <List message="Disclose the rules and restrictions that your users must adhere to"></List>   
            <List message="Maintain your right to terminate abusive accounts"></List>     
            <List message="Make your copyright, trademark and intellectual property rights known"></List>  
            <List message="Limit your liability"></List>
            <List message="Disclaim warranties"></List>

            <Button TermsOfService type="primary">Go back to previous page</Button>
          </Div>
                            
        </Content>
        <Footer TermsOfService >Copyright © 2021 Tobira Webinar Video Communications, Inc. All rights reserved. <Link href="/TermsofService-example" name="Terms of Service"></Link> and  <Link href="/PrivacyPolicy-example" name="Privacy Policy"></Link> </Footer>
      </Layout>
    </>
  );
}