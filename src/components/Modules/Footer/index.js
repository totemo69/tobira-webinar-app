import { useTranslation } from 'next-i18next';
import globalMessage from '@/messages/global';

import Ftr from '@/components/Elements/Footer';
import Link from '@/components/Elements/Link';

export default function Footer() {
  const { t } = useTranslation();

  return (
    <>
      <Ftr>
        {t(globalMessage.copyRight)}.{' '}
        <Link
          href="/terms-of-service-example"
          name={t(globalMessage.termsOfService)}
        />{' '}
        {t(globalMessage.and)}{' '}
        <Link
          href="/privacy-policy-example"
          name={t(globalMessage.termsOfService)}
        />
        .
      </Ftr>
    </>
  );
}
