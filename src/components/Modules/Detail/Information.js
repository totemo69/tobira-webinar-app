import { Row, Col, Typography } from 'antd';
import { useTranslation } from 'next-i18next';
import { FormatDate } from '@/utils/dateUtils';
import CustomIcon from '@/components/Elements/Icon';
import localMessage from '@/messages/webinarDetail';
import globalMessage from '@/messages/global';
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

const Information = ({ postDetail }) => {
  const { t } = useTranslation();
  return (
    <Col span={24}>
      <Row>
        <Col lg={12} xs={16}>
          <InformationItem
            iconSrc="/images/date_calendar.svg"
            label={t(localMessage.dateLabel)}
            date={FormatDate(postDetail.schedules[0].scheduleDate)}
            addendum={`(${FormatDate(
              postDetail.schedules[0].scheduleDate,
              'dddd',
            )})`}
          />
        </Col>
        <Col lg={12} xs={8}>
          <InformationItem
            iconSrc="/images/time_schedule.svg"
            label={t(localMessage.timeLabel)}
            date={FormatDate(postDetail.schedules[0].scheduleTime, 'HH:mm a')}
          />
        </Col>
      </Row>
      <Row>
        <Col span={24}>
          <InformationItem
            iconSrc="/images/duration.svg"
            label={t(localMessage.durationLabel)}
            date={`${postDetail.duration} minutes`}
          />
        </Col>
        <Col span={24}>
          <InformationItem
            iconSrc="/images/language.svg"
            label={t(localMessage.timezoneLabel)}
            value={`${postDetail.timezone}`}
          />
        </Col>
        <Col span={24}>
          <InformationItem
            iconSrc="/images/tickets.svg"
            label={t(localMessage.ticketPriceLabel)}
            price={`${postDetail.price} ${t(globalMessage.currencySymbol)}`}
          />
        </Col>
      </Row>
    </Col>
  );
};
export default Information;
