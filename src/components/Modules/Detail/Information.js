import { Row, Col, Typography } from 'antd';
import CustomIcon from '@/components/Elements/Icon';
import classNames from './index.module.css';

const { Text } = Typography;

const InformationItem = ({ iconSrc, label, date, value, price, addendum }) => (
  <div className={classNames.infoItem}>
    <CustomIcon src={iconSrc} />
    <div className={classNames.infoItemWrap}>
      <Text className={classNames.infoLabel}>{label}</Text>
      <Text>
        {date && (
          <>
            <time>{date}</time>{' '}
            {addendum && (
              <span className={classNames.addendum}>{addendum}</span>
            )}
          </>
        )}

        {value && value}

        {price && <strong className={classNames.price}>{price}</strong>}
      </Text>
    </div>
  </div>
);

const Information = () => (
  <Col span={24}>
    <Row>
      <Col lg={12} xs={16}>
        <InformationItem
          iconSrc="/images/date_calendar.svg"
          label="Date"
          date="April 29, 2021"
          addendum="(Thursday)"
        />
      </Col>
      <Col lg={12} xs={8}>
        <InformationItem
          iconSrc="/images/time_schedule.svg"
          label="Time"
          date="11:00 AM"
        />
      </Col>
    </Row>
    <Row>
      <Col span={24}>
        <InformationItem
          iconSrc="/images/duration.svg"
          label="Duration"
          date="1 hour and 30 minutes"
        />
      </Col>
      <Col span={24}>
        <InformationItem
          iconSrc="/images/language.svg"
          label="Timezone"
          value="(GMT +9:00) Tokyo, Seoul, Osaka, Sapporo, Yakutsk"
        />
      </Col>
      <Col span={24}>
        <InformationItem
          iconSrc="/images/tickets.svg"
          label="Ticket Price"
          price="500 JPY"
        />
      </Col>
    </Row>
  </Col>
);

export default Information;
