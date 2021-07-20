import PropTypes from 'prop-types';
import { Typography, Row, Col } from 'antd';
import { useTranslation } from 'next-i18next';
import localMessage from '@/messages/webinarDetail';
import RadioImage from '@/components/Elements/RadioImage';
import Image from '@/components/Elements/Image';
import Button from '@/components/Elements/Button';
import classNames from './index.module.css';

const RadioGroup = RadioImage.Group;
const PaymentButton = RadioImage.Button;
const { Text, Title } = Typography;

const ChoosePayment = ({ isLoading, prevStep, checkOut }) => {
  const { t } = useTranslation();
  return (
    <Col>
      <Row>
        <Col span={24} className={classNames.paymentCol}>
          <Title level={1} className={classNames.paymentTitle}>
            {t(localMessage.paymentMethodLabel)}
          </Title>
          <RadioGroup defaultValue="Paypal" name="payment-method">
            <PaymentButton value="Paypal">
              <Image src="/images/paypal.svg" alt="paypal image" />
              <Text>{t(localMessage.payWithPaypal)}</Text>
            </PaymentButton>
            <PaymentButton disabled value="Other">
              <Image src="/images/other-payment.svg" alt="paypal image" />
              <Text>{t(localMessage.payWithOthers)}</Text>
            </PaymentButton>
          </RadioGroup>
        </Col>
      </Row>
      <Row justify="end" className={classNames.spacer}>
        <Col lg={14} xs={24}>
          <Row>
            <Col span={12} lg={12} xs={24} className={classNames.summaryNext}>
              <Button type="primary" size="large" ghost onClick={prevStep}>
                {'<'} {t(localMessage.backButton)}
              </Button>
            </Col>
            <Col lg={12} xs={24} className={classNames.summaryNext}>
              <Button
                type="primary"
                size="large"
                loading={isLoading}
                onClick={checkOut}
              >
                {t(localMessage.checkoutButton)} {'>'}
              </Button>
            </Col>
          </Row>
        </Col>
      </Row>
    </Col>
  );
};

ChoosePayment.propTypes = {
  prevStep: PropTypes.func,
  checkOut: PropTypes.func,
  isLoading: PropTypes.bool,
};
export default ChoosePayment;
