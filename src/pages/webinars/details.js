import React from 'react';
import styled from 'styled-components';
import { useTranslation } from 'next-i18next';
import { useRouter } from 'next/router';
import {
  Row,
  Col,
  List,
  Breadcrumb,
  Image,
  Divider,
  Space,
  Typography,
} from 'antd';
import {
  CaretDownFilled,
  EyeTwoTone,
  FileImageOutlined,
  LeftOutlined,
} from '@ant-design/icons';
import Layout from '@/components/Layouts/Home';
import Div from '@/components/Elements/Div';
import Card from '@/components/Elements/Card';
import Tabs from '@/components/Elements/Tabs';
import Button from '@/components/Elements/Button';
import globalMessage from '@/messages/global';
import { WEBINAR_ROUTE } from '@/utils/constants';
import Option from '@/components/Elements/Option';
import Select from '@/components/Elements/Select';
import Search from '@/components/Elements/Search';
import Table from '@/components/Elements/Table';
import PropTypes from 'prop-types';
import message from '@/messages/webinar';

const { Paragraph, Title, Text } = Typography;
const { TabPane } = Tabs;

export function Details({ registerParticipantsList }) {
  const { t } = useTranslation();
  const route = useRouter();

  const StyledImage = styled(Image)`
    border-radius: 10px;
  `;

  const data = [
    {
      title: 'Status',
      description: 'Upcoming',
    },
    {
      title: 'Date',
      description: 'April 25, 2021',
    },
    {
      title: 'Time',
      description: '11:00 AM',
    },
    {
      title: 'Timezone',
      description: '(GMT +8:00) Singapore',
    },
    {
      title: 'Duration',
      description: '1hr & 30mins',
    },
    {
      title: 'Ticket link',
      description: 'http://www.',
    },
    {
      title: 'Webinar Plan',
      description: 'Recurring',
    },
  ];

  const columns = [
    {
      title: '',
      dataIndex: 'image',
      render: () => <FileImageOutlined />,
    },
    {
      title: t(message.title),
      dataIndex: 'title',
      sorter: {
        multiple: 3,
      },
    },
    {
      title: t(message.schedule),
      dataIndex: 'schedules[0]',
      sorter: {
        multiple: 3,
      },
    },
    {
      title: t(message.attendees),
      dataIndex: 'attendees',
      sorter: {
        multiple: 3,
      },
    },
    {
      title: t(message.status),
      dataIndex: 'status',
      sorter: {
        multiple: 3,
      },
    },
    {
      title: t(message.action),
      dataIndex: 'action',
      align: 'center',
      render: () => (
        <Button noMargin noBoxShadow type="link">
          <EyeTwoTone />
          {t(message.viewDetails)}
        </Button>
      ),
    },
  ];

  return (
    <>
      <Layout>
        <Div marginBottomLarge>
          <Breadcrumb separator=">">
            <Breadcrumb.Item>
              <Text level={4}>{t(globalMessage.listWebinar)}</Text>
            </Breadcrumb.Item>
            <Breadcrumb.Item>
              <Text>Details</Text>
            </Breadcrumb.Item>
          </Breadcrumb>
        </Div>
        <Div widthFull>
          <Card>
            <Div widthFull>
              <Tabs>
                <TabPane tab="Details" key="1">
                  <div style={{ padding: '60px 25px 5px' }}>
                    <Row gutter={24}>
                      <Col span={12}>
                        <StyledImage
                          width
                          height={290}
                          src="https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png"
                          preview={false}
                        />
                      </Col>
                      <Col span={12} style={{ padding: '4px 0' }}>
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
                                  <List.Item.Meta
                                    title={<Text>{item.title}</Text>}
                                  />
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
                                  <List.Item.Meta
                                    title={<Text>{item.description}</Text>}
                                  />
                                </List.Item>
                              )}
                            />
                          </Col>
                        </Row>
                      </Col>
                      <Divider />
                      <Space size={30} direction="vertical">
                        <Title level={5} align="center">
                          Wealth & Asset Management in Tough Times
                        </Title>
                        <Paragraph>
                          Lorem ipsum dolor sit amet, consectetur adipisicing
                          elit. A ab accusantium beatae error inventore ipsa
                          ipsam modi numquam placeat porro quos, ratione,
                          recusandae repudiandae sint sit soluta veritatis?
                          Alias, atque. Lorem ipsum dolor sit amet, consectetur
                          adipisicing elit. Aliquam animi aut culpa delectus
                          doloribus eligendi esse est fuga in neque nostrum odio
                          optio quam quas, quibusdam saepe velit. Id, magni.
                          Lorem ipsum dolor sit amet, consectetur adipisicing
                          elit. Aspernatur aut consectetur cum dolor eum
                          excepturi exercitationem facilis hic incidunt, odit
                          quod reprehenderit, sint unde velit veritatis. Atque
                          culpa libero quas.{' '}
                        </Paragraph>
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
                        Back
                      </Button>
                      <Button chooseProfessional noMargin type="primary">
                        Edit Details
                      </Button>
                    </Row>
                  </div>
                </TabPane>
                <TabPane tab="Registered Participants" key="2">
                  <div style={{ padding: '60px 25px 5px' }}>
                    <Row style={{ width: '100%' }}>
                      <Col span={12}>
                        <Div noMargin>
                          {t(globalMessage.show)}
                          <Select
                            showPages
                            paddingLeft
                            defaultValue="10"
                            suffixIcon={<CaretDownFilled />}
                          >
                            <Option value="10">10</Option>
                            <Option value="20">20</Option>
                            <Option value="30">30</Option>
                            <Option value="40">40</Option>
                            <Option value="50">50</Option>
                          </Select>
                          {t(globalMessage.entries)}
                        </Div>
                      </Col>
                      <Col span={12}>
                        <Div noMargin flexCenterEnd style={{ width: '100%' }}>
                          {t(globalMessage.search)}{' '}
                          <Search
                            placeholder={t(globalMessage.searchPlaceholder)}
                            allowClear
                            marginLeft
                            widthMedium
                          />
                        </Div>
                      </Col>
                    </Row>
                    <Table
                      dataSource={registerParticipantsList}
                      columns={columns}
                    />
                  </div>
                </TabPane>
              </Tabs>
            </Div>
          </Card>
        </Div>
      </Layout>
    </>
  );
}

Details.propTypes = {
  registerParticipantsList: PropTypes.any,
};

export default Details;
