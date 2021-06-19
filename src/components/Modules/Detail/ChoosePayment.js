import PropTypes from 'prop-types';
import { Typography, Row, Col } from 'antd';
import RadioImage from '@/components/Elements/RadioImage';
import Image from '@/components/Elements/Image';
import Button from '@/components/Elements/Button';
import classNames from './index.module.css';

const RadioGroup = RadioImage.Group;
const PaymentButton = RadioImage.Button;
const { Text, Title } = Typography;

const ChoosePayment = ({ prevStep }) => (
  <Col>
    <Row>
      <Col span={24} className={classNames.paymentCol}>
        <Title level={1} className={classNames.paymentTitle}>
          Payment Method
        </Title>
        <RadioGroup name="payment-method">
          <PaymentButton value="Paypal">
            <Image src="/images/paypal.svg" alt="paypal image" />
            <Text>Pay with Paypal</Text>
          </PaymentButton>
          <PaymentButton value="Other">
            <Image src="/images/other-payment.svg" alt="paypal image" />
            <Text>Other payment options coming soon!</Text>
          </PaymentButton>
        </RadioGroup>
      </Col>
    </Row>
    <Row justify="end" className={classNames.spacer}>
      <Col lg={14} xs={24}>
        <Row>
          <Col span={12} lg={12} xs={24} className={classNames.summaryNext}>
            <Button type="primary" ghost onClick={prevStep}>
              {'<'} Back
            </Button>
          </Col>
          <Col lg={12} xs={24} className={classNames.summaryNext}>
            <Button type="primary" size="large">
              Checkout {'>'}
            </Button>
          </Col>
        </Row>
      </Col>
    </Row>
  </Col>
);
ChoosePayment.propTypes = {
  prevStep: PropTypes.func,
};
export default ChoosePayment;
