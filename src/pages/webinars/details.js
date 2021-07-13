import React from 'react';
import styled from 'styled-components';
import { useTranslation } from 'next-i18next';
import { useRouter } from 'next/router';
import { Row, Col, List, Image, Divider, Space, Typography } from 'antd';
import { CaretDownFilled, EyeTwoTone, LeftOutlined } from '@ant-design/icons';
import Layout from '@/components/Layouts/Home';
import Div from '@/components/Elements/Div';
import Title from '@/components/Elements/Title';
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
import Span from '@/components/Elements/Span';

const { Paragraph, Text } = Typography;
const { TabPane } = Tabs;

export function Details({ registerParticipantsList }) {
  const { t } = useTranslation();
  const route = useRouter();

  const StyledImage = styled(Image)`
    border-radius: 10px;
  `;

  const StyledDiv = styled.div`
    padding-top: 30px;
  `;

  const StyledCard = styled(Card)`
    padding: 20px 25px 5px;
  `;

  const onUpdate = () => {
    route.push(WEBINAR_ROUTE.WEBINAR_UPDATE_DETAILS);
  };

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
      title: t(message.number),
      dataIndex: 'id',
      sorter: {
        multiple: 3,
      },
    },
    {
      title: t(globalMessage.fullName),
      dataIndex: 'fullName',
      sorter: {
        multiple: 3,
      },
    },
    {
      title: t(message.emailAddress),
      dataIndex: 'emailAddress',
      sorter: {
        multiple: 3,
      },
    },
    {
      title: t(globalMessage.contactNo),
      dataIndex: 'status',
      sorter: {
        multiple: 3,
      },
    },
    {
      title: t(message.paymentStatus),
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
        <Div marginBottomLarge flexTop>
          <Title secondary marginRight>
            {t(globalMessage.listWebinar)} {'>'}
          </Title>
          <Span breadCrumbs>{t(message.details)}</Span>
        </Div>
        <Div widthFull>
          <StyledCard>
            <Div widthFull>
              <Tabs>
                <TabPane tab="Details" key="1">
                  <StyledDiv>
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
                        {t(globalMessage.back)}
                      </Button>
                      <Button
                        chooseProfessional
                        noMargin
                        type="primary"
                        onClick={onUpdate}
                      >
                        {t(message.editDetails)}
                      </Button>
                    </Row>
                  </StyledDiv>
                </TabPane>
                <TabPane tab={t(message.registeredParticipants)} key="2">
                  <StyledDiv>
                    <Row>
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
                      style={{ paddingTop: 20 }}
                    />
                  </StyledDiv>
                </TabPane>
              </Tabs>
            </Div>
          </StyledCard>
        </Div>
      </Layout>
    </>
  );
}

Details.propTypes = {
  registerParticipantsList: PropTypes.any,
};

export default Details;
