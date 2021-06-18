import { useTranslation } from 'next-i18next';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import globalMessage from '@/messages/global';

import Layout from '@/components/Layouts/Guest';
import Div from '@/components/Elements/Div';
import Image from '@/components/Elements/Image';
import Title from '@/components/Elements/Title';
import ButtonLink from '@/components/Elements/ButtonLink';
import Button from '@/components/Elements/Button';

export default function RegisterVerified() {
  const { t } = useTranslation();

  return (
    <>
      <Layout>
        <Div widthFull marginTopXLarge center>
          <Image src="Images/logo.svg" alt="Tobira Logo" logo />
        </Div>
        <Div marginTop widthFull center>
          <Image src="Images/success.svg" alt="Tobira Logo" successImg />
          <Title secondary2 marginBottom>
            {t(globalMessage.thankYou)}!
          </Title>
          <p>{t(globalMessage.accountActivated)}.</p>
          <ButtonLink
            href="/login"
            element={
              <Button type="primary" mediumBtn marginTopMedium>
                {t(globalMessage.login)}
              </Button>
            }
          />
        </Div>
      </Layout>
    </>
  );
}

export const getStaticProps = async ({ locale }) => ({
  props: {
    ...(await serverSideTranslations(locale, ['translation'])),
  },
});
