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

const Information = ({ postDetail }) => (
  <Col span={24}>
    <Row>
      <Col lg={12} xs={16}>
        <InformationItem
          iconSrc="/images/date_calendar.svg"
          label="Date"
          date={`${postDetail.schedules[0].scheduleDate}`}
          addendum="(Thursday)"
        />
      </Col>
      <Col lg={12} xs={8}>
        <InformationItem
          iconSrc="/images/time_schedule.svg"
          label="Time"
          date={`${postDetail.schedules[0].scheduleTime}`}
        />
      </Col>
    </Row>
    <Row>
      <Col span={24}>
        <InformationItem
          iconSrc="/images/duration.svg"
          label="Duration"
          date={`${postDetail.duration} minutes`}
        />
      </Col>
      <Col span={24}>
        <InformationItem
          iconSrc="/images/language.svg"
          label="Timezone"
          value={`${postDetail.timezone}`}
        />
      </Col>
      <Col span={24}>
        <InformationItem
          iconSrc="/images/tickets.svg"
          label="Ticket Price"
          price={`${postDetail.price} JPY`}
        />
      </Col>
    </Row>
  </Col>
);

export default Information;
