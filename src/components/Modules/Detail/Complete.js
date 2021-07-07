import NextImage from 'next/image';
import { Typography, Row, Col } from 'antd';
import PropTypes from 'prop-types';
import Button from '@/components/Elements/Button';
import classNames from './index.module.css';

const { Text, Title } = Typography;
const Complete = ({ gotoDetails }) => (
  <>
    <Row justify="center">
      <Col span={12} lg={12} xs={22} className={classNames.completeCol}>
        <NextImage
          src="/images/success.svg"
          alt="Tobira Logo"
          layout="fill"
          loading="lazy"
        />
      </Col>
    </Row>
    <Row justify="center" className={classNames.spacer}>
      <Col span={18} className={classNames.completeBtn}>
        <Title level={1} className={classNames.completeTitle}>
          Your order is complete!
        </Title>
        <Text>You will be receiving an email with order details.</Text>
      </Col>
    </Row>
    <Row justify="center" className={classNames.spacer}>
      <Col lg={18} xs={22} className={classNames.completeBtn}>
        <Button type="primary" size="large" noMargin onClick={gotoDetails}>
          Go back to webinar details
        </Button>
      </Col>
    </Row>
  </>
);

Complete.propTypes = {
  gotoDetails: PropTypes.func,
};
export default Complete;
