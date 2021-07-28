import React, { memo, useEffect } from 'react';
import { useTranslation } from 'next-i18next';
import { Col, Row, Divider } from 'antd';
import { StyledModal } from '@/components/Elements/Modal/SimpleModal';
import Title from '@/components/Elements/Title';
import Text from '@/components/Elements/Text';
import Button from '@/components/Elements/Button';
import globalMessage from '@/messages/global';
import message from '@/messages/wallet';
import PropTypes from 'prop-types';
import { createStructuredSelector } from 'reselect';
import { connect } from 'react-redux';
import { compose } from 'redux';
import { getTransactionDetails } from '@/states/transaction/actions';
import { makeSelectTransactionDetails } from '@/states/transaction/selector';

function TransactionModal({
  visible,
  title,
  onClose,
  subTitle,
  getTransactionHistory,
  transactionDetails,
}) {
  const { t } = useTranslation();

  useEffect(() => {
    getTransactionHistory();
  }, []);

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
            content={transactionDetails && transactionDetails.transactionDate}
          />
        </Col>
        <Col span={24}>
          <div>
            <Text gray content={t(message.webinarTitle)} />
          </div>
          <Text
            blue
            content={transactionDetails && transactionDetails.transactionType}
          />
        </Col>
        <Col span={24}>
          <div>
            <Text gray content={t(message.amount)} />
          </div>
          <Text
            blue
            content={transactionDetails && transactionDetails.amount}
          />
        </Col>
        <Col span={24}>
          <div>
            <Text gray content={t(message.paymentMethod)} />
          </div>
          <Text
            blue
            content={transactionDetails && transactionDetails.transactionType}
          />
        </Col>
        <Col span={24}>
          <div>
            <Text gray content={t(message.status)} />
          </div>
          <Text
            blue
            content={transactionDetails && transactionDetails.status}
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

TransactionModal.propTypes = {
  transactionDetails: PropTypes.any,
  getTransactionHistory: PropTypes.func,
};

const mapStateToProps = createStructuredSelector({
  transactionDetails: makeSelectTransactionDetails(),
});

const mapDispatchProps = (dispatch) => ({
  getTransactionHistory: (payload) => dispatch(getTransactionDetails(payload)),
});

const withConnect = connect(mapStateToProps, mapDispatchProps);

export default compose(withConnect, memo)(TransactionModal);
