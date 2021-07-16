import React from 'react';
import { StyledModal } from '@/components/Elements/Modal/SimpleModal';
import { Col, Row } from 'antd';
import { CheckCircleTwoTone } from '@ant-design/icons';
import Title from '@/components/Elements/Title';
import Text from '@/components/Elements/Text';
import Button from '@/components/Elements/Button';

function SuccessModal({ visible, onClose, title, subTitle }) {
  return (
    <StyledModal visible={visible} footer={null} closable={false} width={450}>
      <Row align="middle" justify="center">
        <Col align="middle" justify="center" span={24}>
          <div style={{ backgroundColor: '#abc9ee', padding: '30px 0px 20px' }}>
            <CheckCircleTwoTone
              style={{ fontSize: '5rem', paddingBottom: 15 }}
            />
            <Title level={5}>{title}</Title>
          </div>
          <div style={{ height: '10rem', paddingTop: '3rem' }}>
            <Text gray content={subTitle} />
          </div>
          <Button marginBottom type="primary" onClick={onClose}>
            okay
          </Button>
        </Col>
      </Row>
    </StyledModal>
  );
}

export default SuccessModal;
