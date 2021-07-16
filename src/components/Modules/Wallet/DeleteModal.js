import React from 'react';
import { StyledModal } from '@/components/Elements/Modal/SimpleModal';
import { Col, Row } from 'antd';
import Title from '@/components/Elements/Title';
import Button from '@/components/Elements/Button';
import globalMessage from '@/messages/global';
import { useTranslation } from 'next-i18next';
import Text from '@/components/Elements/Text';

function DeleteModal({ visible, title, subTitle, onClose, onOk }) {
  const { t } = useTranslation();

  return (
    <StyledModal visible={visible} footer={null} closable={false} width={550}>
      <Row align="middle" justify="center">
        <Col align="middle" justify="center" span={24}>
          <div style={{ backgroundColor: '#ABC9EE', padding: '30px 0px 20px' }}>
            <Title level={5}>{title}</Title>
          </div>
          <div style={{ padding: '60px 0px 30px' }}>
            <Text gray content={subTitle} />
          </div>
        </Col>
      </Row>
      <Row align="middle" justify="center" gutter={20} style={{ padding: 30 }}>
        <Col>
          <Button BackButton noMargin onClick={onClose}>
            {t(globalMessage.cancel)}
          </Button>
        </Col>
        <Col>
          <Button
            NextButton
            noMargin
            style={{ backgroundColor: '#FF0033' }}
            onClick={onOk}
          >
            {t(globalMessage.delete)}
          </Button>
        </Col>
      </Row>
    </StyledModal>
  );
}

export default DeleteModal;
