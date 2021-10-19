import { useTranslation } from 'next-i18next';
import { Typography, Row, Col } from 'antd';
import { useRouter } from 'next/router';
import globalMessage from '@/messages/global';

import Ftr from '@/components/Elements/Footer';
import Link from '@/components/Elements/Link';
import Language from '@/components/Modules/Language';

const { Text } = Typography;
export default function Footer() {
  const { t } = useTranslation();
  const route = useRouter();
  const { locale } = route;
  return (
    <Ftr>
      <Row type="flex" align="middle" justify="end">
        <Col>
          <Text>{t(globalMessage.copyRight)}.</Text>
          <Text>
            <Link
              href="/terms-of-service"
              name={t(globalMessage.termsOfService)}
            />{' '}
            {t(globalMessage.and)}{' '}
            <Link
              href="/privacy-policy"
              name={t(globalMessage.privacyPolicy)}
            />
            .
          </Text>
        </Col>
        <Col>
          <Language locale={locale} route={route} />
        </Col>
      </Row>
    </Ftr>
  );
}
