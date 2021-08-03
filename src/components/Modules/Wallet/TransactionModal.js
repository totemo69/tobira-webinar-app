import React from 'react';
import { useTranslation } from 'next-i18next';
import { Col, Row, Divider } from 'antd';
import { StyledModal } from '@/components/Elements/Modal/SimpleModal';
import Title from '@/components/Elements/Title';
import Text from '@/components/Elements/Text';
import Button from '@/components/Elements/Button';
import globalMessage from '@/messages/global';
import message from '@/messages/wallet';
import { FormatDate } from '@/utils/dateUtils';

export default function TransactionModal({
  visible,
  title,
  onClose,
  transactionDetails,
}) {
  const { t } = useTranslation();

  const transactionTypes = (types) => {
    let returnValue = '';
    if (types === 'credit') {
      returnValue = t(message.paymentWebinar);
    } else {
      returnValue = t(message.withdrawWebinar);
    }
    return returnValue;
  };

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
          <Text
            blue
            strong
            content={transactionTypes(
              transactionDetails && transactionDetails.transactionType,
            )}
          />
        </Col>
      </Row>
      <Row style={{ padding: '10px 40px 0px 40px' }} gutter={[0, 14]}>
        <Divider style={{ padding: 0, margin: 0 }} />
        <Col span={24}>
          <div>
            <Text gray content={t(message.transactionId)} />
          </div>
          <Text blue content={transactionDetails && transactionDetails.id} />
        </Col>
        <Col span={24}>
          <div>
            <Text gray content={t(message.transactionDateTime)} />
          </div>
          <Text
            blue
            content={
              transactionDetails &&
              FormatDate(transactionDetails.transactionDate, 'YYYY-DD-MM HH:mm')
            }
          />
        </Col>
        {transactionDetails && transactionDetails.transactionType === 'credit' && (
          <Col span={24}>
            <div>
              <Text gray content={t(message.webinarTitle)} />
            </div>
            <Text
              blue
              content={transactionDetails && transactionDetails.title}
            />
          </Col>
        )}

        <Col span={24}>
          <div>
            <Text gray content={t(message.amountInput)} />
          </div>
          <Text
            blue
            content={transactionDetails && `${transactionDetails.amount} ¥`}
          />
        </Col>
        <Col span={24}>
          <div>
            <Text gray content={t(message.paymentMethod)} />
          </div>
          <Text
            blue
            content={
              transactionDetails && t(message[transactionDetails.paymentMethod])
            }
          />
        </Col>
        <Col span={24}>
          <div>
            <Text gray content={t(message.status)} />
          </div>
          <Text
            blue
            content={
              transactionDetails && t(message[transactionDetails.status])
            }
          />
        </Col>
      </Row>
      <Row align="middle" justify="center" style={{ padding: 25 }}>
        <Button NextButton noMargin chooseStandard onClick={onClose}>
          {t(globalMessage.close)}
        </Button>
      </Row>
    </StyledModal>
  );
}
