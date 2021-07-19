import PropTypes from 'prop-types';
import styled from 'styled-components';
// import { useTranslation } from 'next-i18next';
import { Row, Col, List, Divider, Modal, Typography } from 'antd';
import Button from '@/components/Elements/Button';

const { Text } = Typography;

export function ParticipantDetails({ participantDetails }) {
  // const { t } = useTranslation();

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

  const paymentDetails = [
    {
      title: 'Transaction ID',
      details: '5TY05013RG002845M',
    },
    {
      title: 'Transaction Date and Time',
      details: 'April 24, 2021 10:22',
    },
    {
      title: 'Payment Method',
      details: 'Paypal',
    },
    {
      title: 'Payment Status',
      details: 'Pending',
    },
  ];
  return (
    <StyledModal visible footer={null} centered>
      <Row align="middle" justify="center">
        <Col align="middle" justify="center" span={24}>
          <StyledTitle>
            <Text>Registered Participants Details</Text>
          </StyledTitle>
          <StyledTitle1>
            <StyledText>Registration Details</StyledText>
            <Divider />
          </StyledTitle1>
        </Col>
      </Row>
      <List
        style={{ padding: '20px 40px' }}
        itemLayout="horizontal"
        dataSource={participantDetails}
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
            <StyledText>Payment Details</StyledText>
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
        <Button chooseStandard type="primary" ghost>
          <StyledText>Close</StyledText>
        </Button>
      </Row>
    </StyledModal>
  );
}

ParticipantDetails.propTypes = {
  participantDetails: PropTypes.any,
};
