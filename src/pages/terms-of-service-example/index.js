import { useRouter } from 'next/router';

import Layout from '@/components/Layouts/TermsAndPrivacy';
import Div from '@/components/Elements/Div';
import Image from '@/components/Elements/Image';
import Card from '@/components/Elements/Card';
import Title from '@/components/Elements/Title';
import UnorderedList from '@/components/Elements/UnorderedList';
import List from '@/components/Elements/List';
import Button from '@/components/Elements/Button';

export default function TermsOfService(){
  const router = useRouter();
  
  return(
    <>
      <Layout>
        <Div widthFull center noMargin marginBottomLarge>
          <Image src={"Images/logo.svg"} alt="Tobira Logo" logo />
        </Div>
        <Card TermsAndPrivacy>
          <Div doubleDividerBlue withPadding widthFull>
            <Title secondary center>Terms of Service</Title>
          </Div>
          <Div paddingTop widthFull black>
            <p>
              Terms of service are the legal agreements between a service provider and a person who wants to use that service.
            </p>
            <p>
              The person must agree to abide by the terms of service in order to use the offered service. Terms of service can also be merely a disclaimer, especially regarding the use of websites.
            </p>
            <p>
              Having this agreement helps you set out the rules and guidelines that your users or visitors must agree to in order to use your website or app such as:
            </p>
            <UnorderedList paddingTop>
              <List asterisk>Not stealing your content and violating copyright laws</List>
              <List asterisk>Not spamming other users</List>
              <List asterisk>Not using your site for illegal activities</List>
            </UnorderedList>
            <p>
              These agreements are commonly abbreviated as ToS and are also referred to as a Terms and Conditions agreement, Conditions of Use, or User Agreement.
            </p>
            <p>
              Regardless of what you call your Terms of Service, the aim of the agreement is the same:
            </p>
            <UnorderedList paddingTop>
              <List asterisk>Disclose the rules and restrictions that your users must adhere to</List>
              <List asterisk>Maintain your right to terminate abusive accounts</List>
              <List asterisk>Make your copyright, trademark and intellectual property rights known</List>
              <List asterisk>Limit your liability</List>
            </UnorderedList>
          </Div>
          <Div paddingYLg widthFull center>
            <Button type="primary" onClick={() => router.back()}
              mediumBtn marginTop 
            >
              Go back to previous page
            </Button>
          </Div>
        </Card>
      </Layout>
    </>
  );
}