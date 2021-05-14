import Logo from '@/components/Elements/Logo';
import Content from '@/components/Elements/Content';
import Layout from '@/components/Elements/Layout';
import Div from '@/components/Elements/Div';
import Title from '@/components/Elements/Title';
import Button from '@/components/Elements/Button';
import Footer from '@/components/Elements/Footer';
import Link from '@/components/Elements/Link';
import List from '@/components/Elements/SampleListing';
import { Paragraph   } from '@/components/Elements/SampleParagraph';

export default function PrivacyPolicy(){
  return(
    <>
      <Layout bgGray>
        <Logo TermsOfService src={"Images/logo.svg"}/>
        <Content privacypolicyContent>
          <Title privacypolicyHeader>PRIVACY POLICY</Title>
          <Div Triangle></Div>
          <Div privacyPolicyContent>
            <Paragraph content="
          Your privacy is important to us, and so is being transparent about how we collect, use, and share information about you. This policy is intended to help you understand:
          "></Paragraph>
          
           
            <List message="How we use information we collect"></List>
            <List message="How we share information we collect"></List>
            <List message="How we store and secure information we collect"></List>
            <List message="How to access and control your information"></List>
            <List message="How we transfer information we collect internationally"></List>
            <List message="Other important privacy information"></List>
            

            <Paragraph content={'This Privacy Policy covers the information we collect about you when you use our products or services, or otherwise interact with us (for example, by attending our premises or events or by communicating with us), unless a different policy is displayed. Atlassian, we and us refers to Atlassian Pty Ltd, Atlassian, Inc. and any of our corporate affiliates. We offer a wide range of products, including our cloud, server and data center products. We refer to all of these products, together with our other services and websites as "Services" in this policy.'}></Paragraph>
            
            <Paragraph content={'This policy also explains your choices surrounding how we use information about you, which include how you can object to certain uses of information about you and how you can access and update certain information about you. If you do not agree with this policy, do not access or use our Services or interact with any other aspect of our business.'}></Paragraph>
           
            <Paragraph content={'Where we provide the Services under contract with an organization (for example, your employer) that organization controls the information processed by the Services. For more information, please see Notice to End Users below. This policy does not apply to the extent we process personal information in the role of a processor on behalf of such organizations. '}></Paragraph>
            
            <Paragraph content={'What information we collect about you We collect information about you when you provide it to us, when you use our Services, and when other sources provide it to us, as further described below.'}></Paragraph>
            
            <Div center widthFull>
              <Button mediumBtn type="primary">Go back to previous page</Button>
            </Div>
          </Div>
                            
        </Content>
        <Footer TermsOfService >Copyright © 2021 Tobira Webinar Video Communications, Inc. All rights reserved. <Link href="/TermsofService-example" name="Terms of Service"></Link> and  <Link href="/PrivacyPolicy-example" name="Privacy Policy"></Link> </Footer>
      </Layout>
    </>
  );
}