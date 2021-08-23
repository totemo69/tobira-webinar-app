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

export default function PrivacyPolicy() {
  const { t } = useTranslation();
  const router = useRouter();

  return (
    <>
      <Layout>
        <Div widthFull center noMargin marginBottomLarge>
          <Image
            src="/images/tobiracreators_transparent.png"
            alt="Tobira Logo"
            logo
          />
        </Div>
        <Card TermsAndPrivacy>
          <Div doubleDividerBlue withPadding widthFull>
            <Title secondary center>
              {t(globalMessage.privacyPolicy)}
            </Title>
          </Div>
          <Div paddingTop widthFull black>
            {t(message.privacyContent1)}:
            <UnorderedList paddingTop>
              <List asterisk>{t(message.privacyItem1)}</List>
              <List asterisk>{t(message.privacyItem2)}</List>
              <List asterisk>{t(message.privacyItem3)}</List>
              <List asterisk>{t(message.privacyItem4)}</List>
              <List asterisk>{t(message.privacyItem5)}</List>
              <List asterisk>{t(message.privacyItem6)}</List>
              <List asterisk>{t(message.privacyItem7)}</List>
            </UnorderedList>
            <p>{t(message.privacyContent2)}.</p>
            <p>{t(message.privacyContent3)}.</p>
            <p>{t(message.privacyContent4)}.</p>
            <p>{t(message.privacyContent5)}.</p>
          </Div>
          <Div paddingYLg widthFull center>
            <Button
              type="primary"
              onClick={() => router.back()}
              mediumBtn
              marginTop
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
    ...(await serverSideTranslations(locale, ['translation'])),
  },
});
