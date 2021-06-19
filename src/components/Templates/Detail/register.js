import { Typography, Row, Col } from 'antd';
import { useTranslation } from 'next-i18next';
import detailMessage from '@/messages/webinarDetail';
import RegisterStepper from '@/components/Modules/Detail/RegisterStepper';
import WebinarRegistrationForm from '@/components/Modules/Detail/RegisterForm';
import classNames from './Detail.module.css';

const { Title } = Typography;
export default function Register() {
  const { t } = useTranslation();
  return (
    <>
      <Row align="middle" justify="center">
        <Col
          xs={{
            span: 24,
          }}
        >
          <RegisterStepper />
        </Col>
      </Row>

      <Row align="middle" justify="center">
        <Title level={1} className={classNames.title}>
          {t(detailMessage.register)}
        </Title>
      </Row>
      <Row align="middle" justify="center">
        <Col
          span={18}
          xs={{
            span: 22,
          }}
          lg={{
            span: 18,
          }}
        >
          <WebinarRegistrationForm />
        </Col>
      </Row>
    </>
  );
}
