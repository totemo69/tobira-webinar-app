import { useTranslation } from 'next-i18next';
import { Typography, Row } from 'antd';
import globalMessage from '@/messages/global';

import Ftr from '@/components/Elements/Footer';
import Link from '@/components/Elements/Link';

const { Text } = Typography;
export default function Footer() {
  const { t } = useTranslation();

  return (
    <Ftr>
      <Row>
        <Text>{t(globalMessage.copyRight)}.</Text>
        <Text>
          <Link
            href="/terms-of-service"
            name={t(globalMessage.termsOfService)}
          />{' '}
          {t(globalMessage.and)}{' '}
          <Link href="/privacy-policy" name={t(globalMessage.privacyPolicy)} />.
        </Text>
      </Row>
    </Ftr>
  );
}
