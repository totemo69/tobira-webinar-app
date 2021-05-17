// import { useTranslation } from 'next-i18next';
// import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
// import globalMessage from '@/messages/global';

import Ftr from '@/components/Elements/Footer';
import Link from '@/components/Elements/Link';

export default function Footer() {
  // const { t } = useTranslation();
    
  return (
    <>
      <Ftr>
        {"Copyright © 2021 Tobira Webinar Video Communications, Inc. All rights reserved."} <Link href="/terms-of-service-example" name="Terms of Service" /> {"and"} <Link href="/privacy-policy-example" name="Privacy Policy" />.
      </Ftr>
    </>
  );
}

// export const getStaticProps = async ({ locale }) => ({
//   props: {
//     ...await serverSideTranslations(locale, ['translation']),
//   },
// });