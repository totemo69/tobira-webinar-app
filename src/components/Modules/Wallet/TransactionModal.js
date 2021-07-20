import React from 'react';
import { useTranslation } from 'next-i18next';
import { Col, Row, List } from 'antd';
import { StyledModal } from '@/components/Elements/Modal/SimpleModal';
import Title from '@/components/Elements/Title';
import Text from '@/components/Elements/Text';
import Button from '@/components/Elements/Button';
import globalMessage from '@/messages/global';
import message from '@/messages/wallet';

function TransactionModal({ visible, title, onClose, subTitle }) {
  const { t } = useTranslation();

  const transactionDetails = [
    {
      title: t(message.transactionId),
      description: '5TY05013RG002845M',
    },
    {
      title: t(message.transactionDateTime),
      description: 'April 05, 2021 10:20',
    },
    {
      title: t(message.webinarTitle),
      description: 'Wealth & Asset Management in Tough Times',
    },
    {
      title: t(message.amount),
      description: '100 JPY',
    },
    {
      title: t(message.paymentMethod),
      description: 'Paypal',
    },
    {
      title: t(message.status),
      description: 'Credited',
    },
  ];

  return (
    <StyledModal width={500} visible={visible} footer={null} closable={false}>
      <div style={{ backgroundColor: '#abc9ee', padding: '30px 0px 20px' }}>
        <Title level={5} align="center">
          {title}
        </Title>
      </div>
      <Row align="middle" justify="center">
        <Col
          align="middle"
          justify="center"
          span={24}
          style={{ paddingTop: 20 }}
        >
          <Text gray marginTop content="Transaction" />
        </Col>
        <Col align="middle" justify="center" span={24}>
          {subTitle}
        </Col>
      </Row>
      <List
        style={{ paddingLeft: 40 }}
        itemLayout="horizontal"
        dataSource={transactionDetails}
        renderItem={(item) => (
          <List.Item
            style={{
              borderBottom: 'none',
              padding: '8px 0',
            }}
          >
            <List.Item.Meta
              title={<Text gray content={item.title} />}
              description={<Text blue content={item.description} />}
            />
          </List.Item>
        )}
      />
      <Row align="middle" justify="center" style={{ padding: 25 }}>
        <Button NextButton noMargin chooseStandard onClick={onClose}>
          {t(globalMessage.close)}
        </Button>
      </Row>
    </StyledModal>
  );
}

export default TransactionModal;
