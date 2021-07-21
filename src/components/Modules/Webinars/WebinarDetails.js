import PropTypes from 'prop-types';
import styled from 'styled-components';
import { useTranslation } from 'next-i18next';
import { useRouter } from 'next/router';
import { Row, Col, List, Image, Divider, Space, Typography } from 'antd';
import { LeftOutlined } from '@ant-design/icons';
import message from '@/messages/webinar';
import { WEBINAR_ROUTE } from '@/utils/constants';
import { DateIsBefore, DateIsSame, FormatDate } from '@/utils/dateUtils';
import Title from '@/components/Elements/Title';
import Button from '@/components/Elements/Button';

const { Paragraph, Text, Link } = Typography;

export default function WebinarDetails({ webinarDetails }) {
  const { t } = useTranslation();
  const route = useRouter();
  const StyledImage = styled(Image)`
    border-radius: 10px;
  `;

  const StyledDiv = styled.div`
    padding-top: 30px;
  `;

  const onUpdate = () => {
    const { id } = webinarDetails;
    route.push(`${WEBINAR_ROUTE.WEBINAR_UPDATE_DETAILS}?id=${id}`);
  };

  const webinarStatus = (data) => {
    let returnText = '';
    if (webinarDetails.schedules) {
      if (!DateIsBefore(data.schedules[0].dateTime)) {
        returnText = <Text type="success">{t(message.doneStatusLabel)}</Text>;
      } else if (DateIsSame(data.schedules[0].dateTime)) {
        returnText = <Text type="danger">{t(message.notYetStatusLabel)}</Text>;
      } else {
        returnText = (
          <Text type="warning">{t(message.upcomingStatusLabel)}</Text>
        );
      }
    }
    return returnText;
  };

  const data = [
    {
      title: t(message.status),
      description: webinarStatus(webinarDetails),
    },
    {
      title: t(message.date),
      description: webinarDetails.schedules
        ? FormatDate(webinarDetails.schedules[0].scheduleDate, 'YYYY-MM-DD')
        : '',
    },
    {
      title: t(message.time),
      description: webinarDetails.schedules
        ? FormatDate(webinarDetails.schedules[0].scheduleTime, 'HH:mm')
        : '',
    },
    {
      title: t(message.timeZone),
      description: webinarDetails.timezone ? webinarDetails.timezone.label : '',
    },
    {
      title: t(message.duration),
      description: webinarDetails.duration,
    },
    {
      title: t(message.ticketLink),
      description: (
        <Link
          href={`${WEBINAR_ROUTE.WEBINAR_DETAIL}/${webinarDetails.slug}`}
          target="_blank"
        >
          {webinarDetails.slug}
        </Link>
      ),
    },
    {
      title: t(message.webinarPlan),
      description: t(message.oneTimePlan),
    },
  ];
  return (
    <StyledDiv>
      <Row gutter={24}>
        <Col span={10}>
          <StyledImage
            width
            height={290}
            src="https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png"
            preview={false}
          />
        </Col>
        <Col span={14} style={{ padding: '4px 0' }}>
          <Row>
            <Col span={8}>
              <List
                itemLayout="horizontal"
                dataSource={data}
                renderItem={(item) => (
                  <List.Item
                    style={{
                      borderBottom: 'none',
                      padding: '8px 0',
                    }}
                  >
                    <List.Item.Meta title={<Text>{item.title}</Text>} />
                  </List.Item>
                )}
              />
            </Col>
            <Col span={12}>
              <List
                itemLayout="horizontal"
                dataSource={data}
                renderItem={(item) => (
                  <List.Item
                    style={{
                      borderBottom: 'none',
                      padding: '8px 0',
                    }}
                  >
                    <List.Item.Meta title={<Text>{item.description}</Text>} />
                  </List.Item>
                )}
              />
            </Col>
          </Row>
        </Col>
        <Divider />
      </Row>
      <Row align="middle" style={{ marginTop: 50 }}>
        <Space size={30} direction="vertical">
          <Title level={5} align="center">
            {webinarDetails.title}
          </Title>
          <Paragraph>{webinarDetails.description}</Paragraph>
        </Space>
      </Row>
      <Row align="middle" justify="end" style={{ marginTop: 50 }}>
        <Button
          chooseStandard
          marginRight
          type="link"
          onClick={() => {
            route.push(`${WEBINAR_ROUTE.LIST_WEBINAR}`);
          }}
        >
          <LeftOutlined />
          {t(message.back)}
        </Button>
        <Button chooseProfessional noMargin type="primary" onClick={onUpdate}>
          {t(message.editDetails)}
        </Button>
      </Row>
    </StyledDiv>
  );
}

WebinarDetails.propTypes = {
  webinarDetails: PropTypes.any,
};
