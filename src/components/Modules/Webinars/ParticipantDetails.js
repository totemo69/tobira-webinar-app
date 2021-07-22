import PropTypes from 'prop-types';
import styled from 'styled-components';
import { useTranslation } from 'next-i18next';
import { Row, Col, List, Divider, Modal, Typography } from 'antd';
import { FormatDate } from '@/utils/dateUtils';
import message from '@/messages/webinar';
import globalMessage from '@/messages/global';
import Button from '@/components/Elements/Button';

const { Text } = Typography;

export default function ParticipantDetails({
  participantDetails = [],
  paymentInfo = [],
  isVisible,
  closeModal,
}) {
  const { t } = useTranslation();

  const StyledModal = styled(Modal)`
    .ant-modal-content {
      border-radius: 10px;
    }
    .ant-modal-body {
      padding: 0 0 22px 0;
    }
  `;

  const StyledTitle = styled.div`
    height: 60px;
    width: 100%;
    padding-top: 20px;
    background-color: #abc9ee;
    border-radius: 10px 10px 0 0;
  `;

  const StyledTitle1 = styled.div`
    height: 50px;
    width: 100%;
    padding-top: 15px;
  `;

  const StyledText = styled(Text)`
    color: #4678b5;
  `;

  const info = paymentInfo.length > 0 ? paymentInfo[0] : {};

  const paymentStatus = (status) => {
    let returnText = '';
    if (status) {
      if (status === 'completed') {
        returnText = (
          <Text type="success">{t(message.completedPaymentLabel)}</Text>
        );
      } else if (status === 'created') {
        returnText = (
          <Text type="warning">{t(message.pendingPaymentLabel)}</Text>
        );
      } else {
        returnText = <Text type="danger">{t(message.failedPaymentLabel)}</Text>;
      }
    }
    return returnText;
  };

  const details = [
    {
      title: t(message.participantId),
      details: participantDetails.id,
    },
    {
      title: t(message.registeredDate),
      details: FormatDate(participantDetails.createdAt, 'YYYY-MM-DD HH:mm'),
    },
    {
      title: t(message.emailAddress),
      details: participantDetails.formValues
        ? participantDetails.formValues[0].fieldValue
        : '',
    },
  ];

  const paymentDetails = [
    {
      title: t(message.paymentIdLabel),
      details: info.id,
    },
    {
      title: t(message.paymentDateLabel),
      details: FormatDate(info.updatedAt, 'YYYY-MM-DD HH:mm'),
    },
    {
      title: t(message.paymentMethodLabel),
      details: 'Paypal',
    },
    {
      title: t(message.paymentStatus),
      details: paymentStatus(info.paymentStatus),
    },
  ];
  return (
    <StyledModal
      visible={isVisible}
      footer={null}
      centered
      onCancel={closeModal}
    >
      <Row align="middle" justify="center">
        <Col align="middle" justify="center" span={24}>
          <StyledTitle>
            <Text>{t(message.registrationTitle)}</Text>
          </StyledTitle>
          <StyledTitle1>
            <StyledText>{t(message.registrationLabel)}</StyledText>
            <Divider />
          </StyledTitle1>
        </Col>
      </Row>
      <List
        style={{ padding: '20px 40px' }}
        itemLayout="horizontal"
        dataSource={details}
        renderItem={(item) => (
          <List.Item
            style={{
              borderBottom: 'none',
              padding: '8px 0',
            }}
          >
            <List.Item.Meta
              title={item.title}
              description={<StyledText>{item.details}</StyledText>}
            />
          </List.Item>
        )}
      />
      <Row align="middle" justify="center">
        <Col align="middle" justify="center" span={24}>
          <StyledTitle1>
            <StyledText>{t(message.paymentLabel)}</StyledText>
            <Divider />
          </StyledTitle1>
        </Col>
      </Row>
      <List
        style={{ padding: '20px 40px' }}
        itemLayout="horizontal"
        dataSource={paymentDetails}
        renderItem={(item) => (
          <List.Item
            style={{
              borderBottom: 'none',
              padding: '8px 0',
            }}
          >
            <List.Item.Meta
              title={item.title}
              description={<StyledText>{item.details}</StyledText>}
            />
          </List.Item>
        )}
      />
      <Row align="middle" justify="center">
        <Button onClick={closeModal} chooseStandard type="primary" ghost>
          <StyledText>{t(globalMessage.close)}</StyledText>
        </Button>
      </Row>
    </StyledModal>
  );
}

ParticipantDetails.propTypes = {
  participantDetails: PropTypes.any,
  isVisible: PropTypes.bool,
  closeModal: PropTypes.any,
  paymentInfo: PropTypes.any,
};
