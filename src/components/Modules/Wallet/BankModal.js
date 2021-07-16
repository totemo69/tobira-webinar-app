import React from 'react';
import { useTranslation } from 'next-i18next';
import { StyledModal } from '@/components/Elements/Modal/SimpleModal';
import { Col, Row } from 'antd';
import Title from '@/components/Elements/Title';
import Label from '@/components/Elements/Labels';
import Input from '@/components/Elements/Input';
import globalMessage from '@/messages/global';
import Button from '@/components/Elements/Button';

function BankModal({ visible, title, onClose, onOk, okText }) {
  const { t } = useTranslation();

  return (
    <StyledModal width={500} visible={visible} footer={null} closable={false}>
      <div style={{ backgroundColor: '#abc9ee', padding: '30px 0px 20px' }}>
        <Title level={5} align="center">
          {title}
        </Title>
      </div>
      <Row style={{ paddingLeft: 70 }}>
        <Col span={20}>
          <Label marginTop asterisk>
            {t(globalMessage.bankName)}
          </Label>
          <Input placeholder="Bank Name" />
          <Label marginTop asterisk>
            {t(globalMessage.accountName)}
          </Label>
          <Input placeholder="Account Name" />
          <Label marginTop asterisk>
            {t(globalMessage.accountNumber)}
          </Label>
          <Input placeholder="Account Number" />
        </Col>
      </Row>
      <Row align="middle" justify="center" gutter={20} style={{ padding: 30 }}>
        <Col>
          <Button BackButton noMargin onClick={onClose}>
            {t(globalMessage.cancel)}
          </Button>
        </Col>
        <Col>
          <Button NextButton noMargin type="primary" onClick={onOk}>
            {okText}
          </Button>
        </Col>
      </Row>
    </StyledModal>
  );
}

export default BankModal;
