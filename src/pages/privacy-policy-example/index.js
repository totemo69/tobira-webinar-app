import { useRouter } from 'next/router';

import Layout from '@/components/Layouts/TermsAndPrivacy';
import Div from '@/components/Elements/Div';
import Image from '@/components/Elements/Image';
import Card from '@/components/Elements/Card';
import Title from '@/components/Elements/Title';
import UnorderedList from '@/components/Elements/UnorderedList';
import List from '@/components/Elements/List';
import Button from '@/components/Elements/Button';

export default function PrivacyPolicy(){
  const router = useRouter();
  
  return(
    <>
      <Layout>
        <Div widthFull center noMargin marginBottom2x>
          <Image src={"Images/logo.svg"} alt="Tobira Logo" logo />
        </Div>
        <Card TermsAndPrivacy>
          <Div doubleDividerBlue withPadding widthFull>
            <Title secondary center>PRIVACY POLICY</Title>
          </Div>
          <Div paddingTop widthFull black>
            Your privacy is important to us, and so is being transparent about how we collect, use, and share information about you. This policy is intended to help you understand:
            <UnorderedList paddingTop>
              <List asterisk>What information we collect about you</List>
              <List asterisk>How we use information we collect</List>
              <List asterisk>How we share information we collect</List>
              <List asterisk>How we store and secure information we collect</List>
              <List asterisk>How to access and control your information</List>
              <List asterisk>How we transfer information we collect internationally</List>
              <List asterisk>Other important privacy information</List>
            </UnorderedList>
            <p>
              This Privacy Policy covers the information we collect about you when you use our products or services, or otherwise interact with us (for example, by attending our premises or events or by communicating with us), unless a different policy is displayed. Atlassian, we and us refers to Atlassian Pty Ltd, Atlassian, Inc. and any of our corporate affiliates. We offer a wide range of products, including our cloud, server and data center products. We refer to all of these products, together with our other services and websites as &quot;Services&quot; in this policy.
            </p>
            <p>
              This policy also explains your choices surrounding how we use information about you, which include how you can object to certain uses of information about you and how you can access and update certain information about you. If you do not agree with this policy, do not access or use our Services or interact with any other aspect of our business.
            </p>
            <p>
              Where we provide the Services under contract with an organization (for example, your employer) that organization controls the information processed by the Services. For more information, please see Notice to End Users below. This policy does not apply to the extent we process personal information in the role of a processor on behalf of such organizations.
            </p>
            <p>
              What information we collect about you? We collect information about you when you provide it to us, when you use our Services, and when other sources provide it to us, as further described below.
            </p>
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