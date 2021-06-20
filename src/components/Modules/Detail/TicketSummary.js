import PropTypes from 'prop-types';
import { Typography, Row, Col } from 'antd';
import Button from '@/components/Elements/Button';
import classnames from './index.module.css';

const { Text, Title } = Typography;

const TicketSummary = ({ prevStep, nextStep }) => (
  <Col>
    <div className={classnames.ticketBody}>
      <Row>
        <Col className={classnames.priceLabel}>
          <Text>Price</Text>
        </Col>
      </Row>
      <Row justify="center">
        <Col span={24} className={classnames.actualPrice}>
          <Title level={1}>500 JPY</Title>
        </Col>
      </Row>

      <Row justify="center" className={classnames.ticketLower}>
        <Text className={classnames.ticketDetailLabel}>Price</Text>
        <Text className={classnames.ticketDetailInfo}>
          Wealth & Asset Management in Tough Times
        </Text>

        <Text className={classnames.ticketDetailLabel}>
          Start Date and Time
        </Text>
        <Text className={classnames.ticketDetailInfo}>
          April 26, 2021 (Monday) 11:00 AM - 12:30 PM (GMT +9:00)
        </Text>
      </Row>
      <div className={`${classnames.ticketCircle} ${classnames.left}`}></div>
      <div className={`${classnames.ticketCircle} ${classnames.right}`}></div>
      <div className={classnames.ticketLine}></div>
    </div>
    <Row justify="end" className={classnames.spacer}>
      <Col lg={14} xs={24}>
        <Row>
          <Col span={12} lg={12} xs={24} className={classnames.summaryNext}>
            <Button type="primary" ghost size="large" onClick={prevStep}>
              {'<'} Back
            </Button>
          </Col>
          <Col lg={12} xs={24} className={classnames.summaryNext}>
            <Button type="primary" size="large" onClick={nextStep}>
              Proceed to Payment {'>'}
            </Button>
          </Col>
        </Row>
      </Col>
    </Row>
  </Col>
);
TicketSummary.propTypes = {
  prevStep: PropTypes.func,
  nextStep: PropTypes.func,
};
export default TicketSummary;
