import PropTypes from 'prop-types';
import { Typography, Row, Col } from 'antd';
import { useTranslation } from 'next-i18next';
import localMessage from '@/messages/webinarDetail';
import globalMessage from '@/messages/global';
import Button from '@/components/Elements/Button';
import classnames from './index.module.css';

const { Text, Title } = Typography;

const TicketSummary = ({ prevStep, nextStep, webinarDetails }) => {
  const { t } = useTranslation();
  return (
    <Col>
      <div className={classnames.ticketBody}>
        <Row>
          <Col className={classnames.priceLabel}>
            <Text>{t(localMessage.ticketPriceLabel)}</Text>
          </Col>
        </Row>
        <Row justify="center">
          <Col span={24} className={classnames.actualPrice}>
            <Title level={1}>
              {webinarDetails.price} {t(globalMessage.currencySymbol)}
            </Title>
          </Col>
        </Row>

        <Row justify="center" className={classnames.ticketLower}>
          <Text className={classnames.ticketDetailLabel}></Text>
          <Text className={classnames.ticketDetailInfo}>
            {webinarDetails.title}
          </Text>

          <Text className={classnames.ticketDetailLabel}>
            {t(localMessage.dateTimeLabel)}
          </Text>
          <Text className={classnames.ticketDetailInfo}>
            {}
            {webinarDetails.schedules[0].dateTime}
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
                {'<'} {t(localMessage.backButton)}
              </Button>
            </Col>
            <Col lg={12} xs={24} className={classnames.summaryNext}>
              <Button type="primary" size="large" onClick={nextStep}>
                {t(localMessage.paymentButton)} {'>'}
              </Button>
            </Col>
          </Row>
        </Col>
      </Row>
    </Col>
  );
};
TicketSummary.propTypes = {
  prevStep: PropTypes.func,
  nextStep: PropTypes.func,
  webinarDetails: PropTypes.any,
};
export default TicketSummary;
