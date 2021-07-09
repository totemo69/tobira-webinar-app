import React from 'react';
import styled from 'styled-components';
import { useTranslation } from 'next-i18next';
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
import { LeftOutlined } from '@ant-design/icons';
import Layout from '@/components/Layouts/Home';
import Div from '@/components/Elements/Div';
import Card from '@/components/Elements/Card';
import Tabs from '@/components/Elements/Tabs';
import Button from '@/components/Elements/Button';
import globalMessage from '@/messages/global';

const { Paragraph, Title, Text } = Typography;
const { TabPane } = Tabs;

export function Details() {
  const { t } = useTranslation();

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
            <Div marginY betweenCenter widthFull>
              <Tabs>
                <TabPane tab="Details" key="1">
                  <Row gutter={24} style={{ padding: '60px 25px 25px' }}>
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
                  </Row>
                </TabPane>
                <TabPane tab="Registered Participants" key="2">
                  Registered Participants
                </TabPane>
              </Tabs>
            </Div>
            <div style={{ padding: '0 25px 18px' }}>
              <Divider />
              <Space size={30} direction="vertical">
                <Title level={5} align="center">
                  Wealth & Asset Management in Tough Times
                </Title>
                <Paragraph>
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit. A ab
                  accusantium beatae error inventore ipsa ipsam modi numquam
                  placeat porro quos, ratione, recusandae repudiandae sint sit
                  soluta veritatis? Alias, atque. Lorem ipsum dolor sit amet,
                  consectetur adipisicing elit. Aliquam animi aut culpa delectus
                  doloribus eligendi esse est fuga in neque nostrum odio optio
                  quam quas, quibusdam saepe velit. Id, magni. Lorem ipsum dolor
                  sit amet, consectetur adipisicing elit. Aspernatur aut
                  consectetur cum dolor eum excepturi exercitationem facilis hic
                  incidunt, odit quod reprehenderit, sint unde velit veritatis.
                  Atque culpa libero quas.{' '}
                </Paragraph>
              </Space>
              <Row align="middle" justify="end" style={{ marginTop: 50 }}>
                <Button chooseStandard marginRight type="link">
                  <LeftOutlined />
                  Back
                </Button>
                <Button chooseProfessional noMargin type="primary">
                  Edit Details
                </Button>
              </Row>
            </div>
          </Card>
        </Div>
      </Layout>
    </>
  );
}

Details.propTypes = {};

export default Details;
