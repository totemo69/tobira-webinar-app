import { useTranslation } from 'next-i18next';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import globalMessage from '@/messages/global';
import message from '@/messages/termsAndPrivacy';

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
  const { t } = useTranslation();
  const router = useRouter();
  
  return(
    <>
      <Layout>
        <Div widthFull center noMargin marginBottomLarge>
          <Image src={"Images/logo.svg"} alt="Tobira Logo" logo />
        </Div>
        <Card TermsAndPrivacy>
          <Div doubleDividerBlue withPadding widthFull>
            <Title secondary center>{t(globalMessage.termsOfService)}</Title>
          </Div>
          <Div paddingTop widthFull black>
            <p>
              {t(message.termsContent1)}.
            </p>
            <p>
              {t(message.termsContent2)}.
            </p>
            <p>
              {t(message.termsContent3)}:
            </p>
            <UnorderedList paddingTop>
              <List asterisk>{t(message.termsItem1)}</List>
              <List asterisk>{t(message.termsItem2)}</List>
              <List asterisk>{t(message.termsItem3)}</List>
            </UnorderedList>
            <p>
              {t(message.termsContent4)}.
            </p>
            <p>
              {t(message.termsContent5)}:
            </p>
            <UnorderedList paddingTop>
              <List asterisk>{t(message.termsItem4)}</List>
              <List asterisk>{t(message.termsItem5)}</List>
              <List asterisk>{t(message.termsItem6)}</List>
              <List asterisk>{t(message.termsItem7)}</List>
            </UnorderedList>
          </Div>
          <Div paddingYLg widthFull center>
            <Button type="primary" onClick={() => router.back()}
              mediumBtn marginTop 
            >
              {t(globalMessage.goBackPrevious)}
            </Button>
          </Div>
        </Card>
      </Layout>
    </>
  );
}

export const getStaticProps = async ({ locale }) => ({
  props: {
    ...await serverSideTranslations(locale, ['translation']),
  },
});